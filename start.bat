cd packages
cd tstuto-api
cmd /c npm install
cmd /c npm run build
cd ..\tstuto-web-client
cmd /c npm install
cmd /c npm run build
cd ..\tstuto-server
cmd /c npm install
cmd /c npm run build
cmd /c npm start
