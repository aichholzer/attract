'use strict';


const attract = () => {

    global.attract = function () {
        const libs = [];
        for (let arg of arguments) {
            let module = null;
            try {
                module = require.resolve(arg);
            } catch (e) {
                throw new Error(e);
            }

            if (module) {
                libs.push(require(arg));
            }
        }

        return libs.length === 1 ? libs[0] : libs;
    };
};

module.exports = attract();
