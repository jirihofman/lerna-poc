'use strict';

const json = require('../package.json');
module.exports = {
    hello: () => {
        return "🚀 MODEL here";
    },
    version: json.version
};
