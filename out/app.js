"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var builder_use_example_1 = require("./example/builder-use.example");
__export(require("./builders/patch-body-item.builder"));
__export(require("./models/patch-body.model"));
new builder_use_example_1.BuilderUseExample().createTestPatch();
