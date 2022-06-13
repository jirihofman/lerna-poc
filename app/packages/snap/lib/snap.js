'use strict';

const json = require('../package.json');
module.exports = {
    hello: () => {
        return "SNAP here. Version: " + json.version;
    },
    version: json.version
};
