# Monolithic app before any monorepo work started
All the code is in this folder. There are no packages (no packages folder too).

## Before monorepo
```
node app/index.js
Starting App
Model:  MODEL here
SNAP:  SNAP here
App run completed
```

## With monorepo
We want to be able to:
- commit all changes
- publish `snap` package as a module with correct version
- create a GitHub release

```sh
lerna publish patch --conventional-commits --create-release github
```
