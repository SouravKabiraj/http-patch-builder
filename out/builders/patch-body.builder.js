"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var patch_body_model_1 = require("../models/patch-body.model");
var PatchBodyBuilder = /** @class */ (function () {
    function PatchBodyBuilder() {
        this.patchBody = new patch_body_model_1.PatchBody();
    }
    PatchBodyBuilder.withDefaults = function () {
        return new PatchBodyBuilder();
    };
    PatchBodyBuilder.prototype.withOperation = function (operation) {
        this.patchBody.op = operation;
        return this;
    };
    PatchBodyBuilder.prototype.withTargetPath = function (path) {
        this.patchBody.path = path;
        return this;
    };
    PatchBodyBuilder.prototype.withValue = function (value) {
        this.patchBody.value = value;
        return this;
    };
    PatchBodyBuilder.prototype.withFromPath = function (fromPath) {
        this.patchBody.from = fromPath;
        return this;
    };
    PatchBodyBuilder.prototype.build = function () {
        return this.patchBody;
    };
    return PatchBodyBuilder;
}());
exports.PatchBodyBuilder = PatchBodyBuilder;
