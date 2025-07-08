"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kernel_1 = require("@storexweb/kernel");
const server = new kernel_1.Server({
    name: "MOVIES_SERVICE",
    dist: `${__dirname}/..`
});
// console.log(server)
server.start();
//# sourceMappingURL=index.js.map