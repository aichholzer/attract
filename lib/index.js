'use strict';

module.exports = (options = {}) => {

    global.attract = function () {
        const libs = [];
        for (let arg of arguments) {
            let module = null;
            try {
                module = require.resolve(arg);
                libs.push(require(arg));
            } catch (error) {
                if (options.basePath) {
                    arg = `${options.basePath}/${arg}`;
                }
                module = require.resolve(arg);
                libs.push(require(arg));
            }
        }

        return libs.length === 1 ? libs[0] : libs;
    };
};
