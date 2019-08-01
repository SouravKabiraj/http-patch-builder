"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PatchBodyBuilder = /** @class */ (function () {
    function PatchBodyBuilder() {
        this.patchBody = [];
    }
    PatchBodyBuilder.withNoChange = function () {
        return new PatchBodyBuilder();
    };
    PatchBodyBuilder.prototype.addChangeElement = function (patchChange) {
        this.patchBody.push(patchChange);
        return this;
    };
    PatchBodyBuilder.prototype.build = function () {
        return this.patchBody;
    };
    return PatchBodyBuilder;
}());
exports.PatchBodyBuilder = PatchBodyBuilder;
