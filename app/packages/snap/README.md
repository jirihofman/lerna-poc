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
- push changes
- create GitHub Release
- publish `snap` package

```sh
lerna version patch --conventional-commits --create-release github                               
info cli using local version of lerna
lerna notice cli v5.1.1
lerna info current version 22.3.124
lerna info Looking for changed packages since v22.3.124

Changes:
 - @jirihofman/snap: 22.3.124 => 22.3.125

? Are you sure you want to create these versions? Yes
lerna info execute Creating releases...
lerna info getChangelogConfig Successfully resolved preset "conventional-changelog-angular"
lerna info git Pushing tags...
lerna success version finished


lerna publish from-package
info cli using local version of lerna
lerna notice cli v5.1.1

Found 1 package to publish:
 - @jirihofman/snap => 22.3.125

? Are you sure you want to publish these packages? Yes
lerna info publish Publishing packages to npm...
lerna notice Skipping all user and access validation due to third-party registry
lerna notice Make sure you're authenticated properly ¯\_(ツ)_/¯
lerna WARN ENOLICENSE Package @jirihofman/snap is missing a license.
lerna WARN ENOLICENSE One way to fix this is to add a LICENSE.md file to the root of this repository.
lerna WARN ENOLICENSE See https://choosealicense.com for additional guidance.
lerna http fetch PUT 200 https://npm.pkg.github.com/@jirihofman%2fsnap 1477ms
lerna success published @jirihofman/snap 22.3.125
lerna notice 
lerna notice 📦  @jirihofman/snap@22.3.125
lerna notice === Tarball Contents === 
lerna notice 184B  lib/snap.js 
lerna notice 692B  package.json
lerna notice 3.2kB README.md   
lerna notice === Tarball Details === 
lerna notice name:          @jirihofman/snap                        
lerna notice version:       22.3.125                                
lerna notice filename:      jirihofman-snap-22.3.125.tgz            
lerna notice package size:  1.9 kB                                  
lerna notice unpacked size: 4.1 kB                                  
lerna notice shasum:        878012af6f5864c1a88e687013817c89486dcd31
lerna notice integrity:     sha512-u/35zqGm6DT14[...]Ysct0tN60VfMw==
lerna notice total files:   3                                       
lerna notice 
Successfully published:
 - @jirihofman/snap@22.3.125
```
