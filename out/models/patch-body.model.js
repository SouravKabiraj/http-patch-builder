"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PatchBodyItem = /** @class */ (function () {
    function PatchBodyItem(op, path, value, from) {
        this.op = op;
        this.path = path;
        this.value = value;
        this.from = from;
    }
    Object.defineProperty(PatchBodyItem.prototype, "Op", {
        get: function () {
            return this.op;
        },
        set: function (op) {
            this.op = op;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PatchBodyItem.prototype, "Path", {
        get: function () {
            return this.path;
        },
        set: function (path) {
            this.path = path;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PatchBodyItem.prototype, "From", {
        get: function () {
            return this.from;
        },
        set: function (from) {
            this.from = from;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PatchBodyItem.prototype, "Value", {
        get: function () {
            return this.value;
        },
        set: function (value) {
            this.value = value;
        },
        enumerable: true,
        configurable: true
    });
    return PatchBodyItem;
}());
exports.PatchBodyItem = PatchBodyItem;
var PatchOperation;
(function (PatchOperation) {
    PatchOperation["TEST"] = "test";
    PatchOperation["REMOVE"] = "remove";
    PatchOperation["ADD"] = "add";
    PatchOperation["REPLACE"] = "replace";
    PatchOperation["MOVE"] = "move";
    PatchOperation["COPY"] = "copy";
})(PatchOperation = exports.PatchOperation || (exports.PatchOperation = {}));
