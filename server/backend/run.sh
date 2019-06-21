#!/bin/sh

cd /src
# yarn
#npm run start:test
yarn install
yarn start

tail -f /dev/null
