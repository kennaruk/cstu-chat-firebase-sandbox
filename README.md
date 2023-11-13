# CS@TU Chat Firebase Serverless Sandbox

## Pre-requisites

## For Windows User
- [Cmder + Git](https://github.com/cmderdev/cmder/releases/download/v1.3.24/cmder.zip)

### For MacOS User
- [Git](https://git-scm.com/download/mac)

### For both Windows & MacOS
- [Node.js](https://nodejs.org/en/download)
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)

After we have above tools ready then

### Open Terminal
**Windows** - Open [Cmder](https://cmder.app/)

**MacOS** - Open [Terminal](https://en.wikipedia.org/wiki/Terminal_(macOS))

Then running these following commands in ya terminal
```sh
npm install --global yarn
yarn global add firebase-tools

cd ~
git clone git@github.com:kennaruk/cstu-chat-firebase-sandbox.git
cd cstu-chat-firebase-sandbox.git
yarn

yarn dev
```