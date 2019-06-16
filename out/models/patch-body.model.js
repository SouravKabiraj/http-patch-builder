"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PatchBody = /** @class */ (function () {
    function PatchBody(op, path, value, from) {
        this.op = op;
        this.path = path;
        this.value = value;
        this.from = from;
    }
    Object.defineProperty(PatchBody.prototype, "Op", {
        get: function () {
            return this.op;
        },
        set: function (op) {
            this.op = op;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PatchBody.prototype, "Path", {
        get: function () {
            return this.path;
        },
        set: function (path) {
            this.path = path;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PatchBody.prototype, "From", {
        get: function () {
            return this.path;
        },
        set: function (from) {
            this.from = from;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PatchBody.prototype, "Value", {
        get: function () {
            return this.value;
        },
        set: function (value) {
            this.value = value;
        },
        enumerable: true,
        configurable: true
    });
    return PatchBody;
}());
exports.PatchBody = PatchBody;
var PatchOperation;
(function (PatchOperation) {
    PatchOperation["TEST"] = "test";
    PatchOperation["REMOVE"] = "remove";
    PatchOperation["ADD"] = "add";
    PatchOperation["REPLACE"] = "replace";
    PatchOperation["MOVE"] = "move";
    PatchOperation["COPY"] = "copy";
})(PatchOperation = exports.PatchOperation || (exports.PatchOperation = {}));
