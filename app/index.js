console.log("Starting App");

console.log("--- monolith start ---");
const model = require('./model');
const snap = require('./snap');
console.log("Model: ", model.hello());
console.log("SNAP: ", snap.hello());
console.log("--- monolith end-- ---");

console.log("--- monorepo start ---");
const monorepoModel = require('@jirihofman/model');
const monorepoSnap = require('@jirihofman/snap');
console.log("Model: ", monorepoModel.hello());
console.log("SNAP: ", monorepoSnap.hello());

console.log("showing versions");
const versions = {
	app: require('./lerna.json').version,
	packages: {
		model: require('@jirihofman/model').version,
		snap: require('@jirihofman/snap').version
	}
}
console.log(JSON.stringify(versions, null, 4));

console.log("--- monorepo end -----");

console.log("App run completed");
