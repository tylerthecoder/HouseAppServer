const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLList, GraphQLInt } = graphql;
const { FriendModel } = require('../models/friend');
const { ChoreModel } = require('../models/chore');
const { AddChore } = require('../src/chore');

const FriendType = new GraphQLObjectType({
    name: 'Friend',
    fields: ( ) => ({
        name: { type: GraphQLString },
        color: { type: GraphQLString },
        hash: { type: GraphQLString },
        friend_id: { type: GraphQLString },
        points: {
            type: GraphQLInt,
            resolve(parent) {
                return ChoreModel.aggregate([
                    { $match: {
                        doer_id: parent.friend_id
                    }},
                    { $group: {
                        _id: "$doer",
                        points: { $sum: "$points" }
                    }}
                ])
                .then(([data]) => {
                    return (data) ? data.points:0;
                })
            }
        },
        chores: {
            type: GraphQLList(ChoreType),
            resolve(parent) {
                return ChoreModel.find({ doer_id: parent.friend_id })
            }
        }
    })
});

const ChoreType = new GraphQLObjectType({
    name: 'Chore',
    fields: ( ) => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        points: { type: GraphQLInt },
        status: { type: GraphQLString },
        doer_id: { type: GraphQLString },
        chore_id: { type: GraphQLString },
        creator_id: { type: GraphQLString },
        doer: {
            type: FriendType,
            resolve(parent) {
                return FriendModel.findOne({friend_id: parent.doer_id})
            }
        },
        creator: {
            type: FriendType,
            resolve(parent) {
                return FriendModel.findOne({friend_id: parent.creator_id})
            }
        }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        friend: {
            type: FriendType,
            args: { id: { type: GraphQLString } },
            resolve(parent, args){
                return FriendModel.findOne({ friend_id: args.id});
            }
        },
        chore: {
            type: ChoreType,
            args: {
                id: { type: GraphQLString }
            },
            resolve(parent, args){
                return ChoreModel.findOne({ chore_id: args.id});
            }
        },
        friends: {
            type: new GraphQLList(FriendType),
            resolve() {
                return FriendModel.find({});
            }
        },
        chores: {
            type: new GraphQLList(ChoreType),
            args: {
                friend_id: { type: GraphQLString }
            },
            resolve(parent, args) {
                if (args.friend_id) {
                    return ChoreModel.find({ doer_id: args.friend_id })
                } else {
                    return ChoreModel.find({});
                }
            }
        }
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields:{
        changeStatus: {
            type: ChoreType,
            args: {
                chore_id: { type: GraphQLString },
                status: { type: GraphQLString }
            },
            resolve(parent, args) {
                return ChoreModel.findOneAndUpdate({chore_id: args.chore_id}, {status: args.status})
            }
        },
        addChore: {
            type: ChoreType,
            args: {
                name: { type: GraphQLString },
                points: { type: GraphQLInt },
                friend_id: {type: GraphQLString}
            },
            resolve(parent, args) {
                return AddChore(args.name, args.points, args.friend_id)
                    .then(x => x)
                    .catch(err => {
                        console.log(err);
                        return err;
                    });

            }
        }
    }

})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});