# `snap`

> Currently only API for snap. The UI will be done in next major update.

## Usage

```
const snap = require('snap');

console.log(snap.hello());
```

## npm package
This should be available for downloading. Need to use registry and `GH_TOKEN`.
```sh
npm login --registry=https://npm.pkg.github.com --scope=@jirihofman 
npm notice Log in on https://npm.pkg.github.com/
Username: jirihofman
Password: 
Email: (this IS public) jiri.hofman@gmail.com
Logged in as jirihofman to scope @jirihofman on https://npm.pkg.github.com/.
```

Publishing command
```sh
# lerna publish patch --conventional-commits --registry=https://npm.pkg.github.com --scope=@jirihofman
npm adduser --registry=https://npm.pkg.github.com/:_authToken=<TOKEN>
# The above is ok for `npm publish`. Not for `lerna publish`.

lerna publish patch --conventional-commits
```
