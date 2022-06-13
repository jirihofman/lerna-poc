'use strict';

version = require('../package.json').version
module.exports = {
    hello: () => {
        return "SNAP here. Version: " + version;
    }
};
