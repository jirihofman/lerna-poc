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
Important note: never commit your Personal Access Token into codebase. The token gets deleted. If this happen, GitHub will send you an email with this subject: `[GitHub] GitHub access token found in commit`.

**Example**
```sh
lerna publish patch --conventional-commits
info cli using local version of lerna
lerna notice cli v5.1.1
lerna info current version 22.3.118
lerna info Looking for changed packages since v22.3.118

Changes:
 - @jirihofman/snap: 22.3.118 => 22.3.119

? Are you sure you want to publish these packages? Yes
lerna info execute Skipping releases
lerna info getChangelogConfig Successfully resolved preset "conventional-changelog-angular"
lerna info git Pushing tags...
lerna info publish Publishing packages to npm...
lerna notice Skipping all user and access validation due to third-party registry
lerna notice Make sure you're authenticated properly ¯\_(ツ)_/¯
lerna WARN ENOLICENSE Package @jirihofman/snap is missing a license.
lerna WARN ENOLICENSE One way to fix this is to add a LICENSE.md file to the root of this repository.
lerna WARN ENOLICENSE See https://choosealicense.com for additional guidance.
lerna http fetch PUT 200 https://npm.pkg.github.com/@jirihofman%2fsnap 1525ms
lerna success published @jirihofman/snap 22.3.119
lerna notice 
lerna notice 📦  @jirihofman/snap@22.3.119
lerna notice === Tarball Contents === 
lerna notice 184B lib/snap.js 
lerna notice 692B package.json
lerna notice 942B README.md   
lerna notice === Tarball Details === 
lerna notice name:          @jirihofman/snap                        
lerna notice version:       22.3.119                                
lerna notice filename:      jirihofman-snap-22.3.119.tgz            
lerna notice package size:  1.1 kB                                  
lerna notice unpacked size: 1.8 kB                                  
lerna notice shasum:        af721ec7edb89e5fb1467425fafcea99cffa3fb1
lerna notice integrity:     sha512-9pMAUZQF/O7Le[...]QxZ2afZD0BoHg==
lerna notice total files:   3                                       
lerna notice 
Successfully published:
 - @jirihofman/snap@22.3.119
 ```
