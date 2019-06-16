"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var patch_body_builder_1 = require("../builders/patch-body.builder");
var patch_body_model_1 = require("../models/patch-body.model");
var BuilderUseExample = /** @class */ (function () {
    function BuilderUseExample() {
    }
    BuilderUseExample.prototype.createTestPatch = function () {
        var patchBody = patch_body_builder_1.PatchBodyBuilder.withDefaults()
            .withOperation(patch_body_model_1.PatchOperation.TEST)
            .withTargetPath('/email')
            .withValue('sourav@outlook.com')
            .withFromPath('/name')
            .build();
        console.log(JSON.stringify(patchBody));
    };
    return BuilderUseExample;
}());
exports.BuilderUseExample = BuilderUseExample;
