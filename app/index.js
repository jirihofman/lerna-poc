console.log("Starting App");

const model = require('./model');
const snap = require('./snap');
console.log("Model: ", model.hello());
console.log("SNAP: ", snap.hello());

console.log("--- monorepo start ---")
const monorepoModel = require('@jirihofman/model');
const monorepoSnap = require('@jirihofman/snap');
console.log("Model: ", monorepoModel.hello());
console.log("SNAP: ", monorepoSnap.hello());

console.log("--- monorepo end -----")

console.log("App run completed");
