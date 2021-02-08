#!/bin/bash

cd packages/tstuto-api
npm install
npm run build
cd ../tstuto-web-client
npm install
npm run build
cd ../tstuto-server
npm install
npm run build
npm start
