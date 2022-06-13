# Lerna example
Let's start with an app that is monolithic, already in use and ready to be split into packages/modules. It has a version already. For this example, the app is owned by an "organization" jirihofman. That is where any of its packages will be published.

## How it started
```sh
git init
lerna init
```

### Create first package - snap
```sh
lerna create snap 
lerna notice cli v5.1.1
lerna WARN ENOREMOTE No git remote found, skipping repository property
package name: (snap) @jirihofman/snap
version: (0.0.0) 
description: 
keywords: 
homepage: 
license: (ISC) 
entry point: (lib/snap.js) 
git repository: 
About to write to /Users/jirihofman/prace/clientio/lerna-poc/packages/snap/package.json:

{
  "name": "@jirihofman/snap",
  "version": "0.0.0",
  "description": "> TODO: description",
  "author": "Jiří Hofman <jiri.hofman@gmail.com>",
  "homepage": "",
  "license": "ISC",
  "main": "lib/snap.js",
  "directories": {
    "lib": "lib",
    "test": "__tests__"
  },
  "files": [
    "lib"
  ],
  "scripts": {
    "test": "echo \"Error: run tests from root\" && exit 1"
  }
}


Is this OK? (yes) 
lerna success create New package @jirihofman/snap created at ./packages/snap
```

### Add 3rd party package (lodash + jquery) to a package
```sh
lerna add lodash
lerna notice cli v5.1.1
lerna info Adding lodash in 1 package
lerna info Bootstrapping 1 package
lerna info Installing external dependencies
lerna info Symlinking packages and binaries
lerna success Bootstrapped 1 package
```
And jquery the same way.

### Extract stuff from our monolith - model
The `model` will be used in `snap`.
```sh
lerna create model
lerna notice cli v5.1.1
lerna WARN ENOREMOTE No git remote found, skipping repository property
package name: (model) @jirihofman/model
version: (0.0.0) 
description: used in many packages
keywords: 
homepage: 
license: (ISC) 
entry point: (lib/model.js) 
git repository: 
About to write to /Users/jirihofman/prace/clientio/lerna-poc/packages/model/package.json:

{
  "name": "@jirihofman/model",
  "version": "0.0.0",
  "description": "used in many packages",
  "author": "Jiří Hofman <jiri.hofman@gmail.com>",
  "homepage": "",
  "license": "ISC",
  "main": "lib/model.js",
  "directories": {
    "lib": "lib",
    "test": "__tests__"
  },
  "files": [
    "lib"
  ],
  "scripts": {
    "test": "echo \"Error: run tests from root\" && exit 1"
  }
}


Is this OK? (yes) 
lerna success create New package @jirihofman/model created at ./packages/model
```

### Bootstrap it
```sh
lerna bootstrap
lerna notice cli v5.1.1
lerna info Bootstrapping 2 packages
lerna info Symlinking packages and binaries
lerna success Bootstrapped 2 packages
```

### Make `model` a dependency of `snap`
```sh
lerna add @jirihofman/model
lerna notice cli v5.1.1
lerna info Adding @jirihofman/model in 1 package
lerna info Bootstrapping 2 packages
lerna info Symlinking packages and binaries
lerna success Bootstrapped 2 packages
```

### Use packages in our App
Add dependencies in `package.json`
```json
"dependencies": {
    "@jirihofman/model": "file:packages/model",
    "@jirihofman/snap": "file:packages/snap"
  },
```
Then bootstrap it again
```
cd app 
jirihofman@Jiri-MacBook-Pro app % lerna ll
lerna notice cli v5.1.1
@jirihofman/model v0.0.0 packages/model
@jirihofman/snap  v0.0.0 packages/snap
lerna success found 2 packages
jirihofman@Jiri-MacBook-Pro app % lerna bootstrap
lerna notice cli v5.1.1
lerna info bootstrap root only

added 599 packages, and audited 602 packages in 25s

52 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

Then run the app. See the new modules are now working properly.
```sh
node index.js  
Starting App
Model:  MODEL here
SNAP:  SNAP here
--- monorepo start ---
Model:  🚀 MODEL here
SNAP:  🚀 SNAP here
--- monorepo end -----
App run completed
```
