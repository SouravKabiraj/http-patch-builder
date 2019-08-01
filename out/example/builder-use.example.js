"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var patch_body_item_builder_1 = require("../builders/patch-body-item.builder");
var patch_body_model_1 = require("../models/patch-body.model");
var patch_body_builder_1 = require("../builders/patch-body.builder");
var BuilderUseExample = /** @class */ (function () {
    function BuilderUseExample() {
    }
    BuilderUseExample.prototype.createTestPatch = function () {
        var patchBodyElement = patch_body_item_builder_1.PatchBodyItemBuilder.withDefaults()
            .withOperation(patch_body_model_1.PatchOperation.TEST)
            .withTargetPath('/email')
            .appendTargetPath('id')
            .withValue('sourav@outlook.com')
            .withFromPath('/name')
            .appendFromPath('first')
            .build();
        var anotherPatchBodyElement = patch_body_item_builder_1.PatchBodyItemBuilder.withDefaults()
            .withOperation(patch_body_model_1.PatchOperation.TEST)
            .withTargetPath('/email')
            .appendTargetPath('id')
            .withValue('sourav@outlook.com')
            .withFromPath('/name')
            .appendFromPath('first')
            .build();
        var patchBody = patch_body_builder_1.PatchBodyBuilder.withNoChange().addChangeElement(patchBodyElement).addChangeElement(anotherPatchBodyElement).build();
        console.log(JSON.stringify(patchBody));
    };
    return BuilderUseExample;
}());
exports.BuilderUseExample = BuilderUseExample;
