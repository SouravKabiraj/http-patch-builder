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
        this.patchBody.Op = operation;
        return this;
    };
    PatchBodyBuilder.prototype.withTargetPath = function (path) {
        this.patchBody.Path = path;
        return this;
    };
    PatchBodyBuilder.prototype.appendTargetPath = function (path) {
        this.patchBody.Path = this.patchBody.Path + "/" + path;
        return this;
    };
    PatchBodyBuilder.prototype.withValue = function (value) {
        this.patchBody.Value = value;
        return this;
    };
    PatchBodyBuilder.prototype.withFromPath = function (fromPath) {
        this.patchBody.From = fromPath;
        return this;
    };
    PatchBodyBuilder.prototype.appendFromPath = function (path) {
        this.patchBody.From = this.patchBody.From + "/" + path;
        return this;
    };
    PatchBodyBuilder.prototype.build = function () {
        return this.patchBody;
    };
    return PatchBodyBuilder;
}());
exports.PatchBodyBuilder = PatchBodyBuilder;
