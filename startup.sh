#!/usr/bin/env bash
git fetch
git reset --hard origin/master
sudo systemctl stop HouseAppServer.service
npm run build:prod
echo "#!/usr/bin/env node" > temp.txt
cat dist/bundle.js >> temp.txt
sudo mv temp.txt dist/bundle.js
chmod +x dist/bundle.js
rm temp.txt
sudo systemctl start HouseAppServer.service
sudo journalctl --follow -u HouseAppServer.service
