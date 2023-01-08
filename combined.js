import async from "async";

import one from './one.js'
import two from './two.js'

async.series([
    function(callback) {
        one(callback);
    },
    function (callback) {
        two(callback);
    }
]);