# CS@TU Chat Firebase Serverless Sandbox

## Pre-requisites

## For Windows User
- [Cmder + Git](https://github.com/cmderdev/cmder/releases/download/v1.3.24/cmder.zip)

### For MacOS User
- [Git](https://git-scm.com/download/mac)

### For both Windows & MacOS
- [VSCode](https://code.visualstudio.com/download)
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
```

- Open file [src/services/firebase](src/services/firebase.ts)
- Replace [line 11](https://github.com/kennaruk/cstu-chat-firebase-sandbox/blob/35f67767e49973dcefb4dd6993ecaf5cd258c5cb/src/services/firebase.ts#L11) with [this json file](https://firebasestorage.googleapis.com/v0/b/ken-chat-730f5.appspot.com/o/k-cred?alt=media&token=57cf5a0d-4de0-4db5-94cf-5dbb0cb361c0)

```
yarn build
yarn dev
```