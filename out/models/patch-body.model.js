"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PatchBody = /** @class */ (function () {
    function PatchBody(op, path, value, from) {
        this._op = op;
        this._path = path;
        this._value = value;
        this._from = from;
    }
    Object.defineProperty(PatchBody.prototype, "op", {
        get: function () {
            return this._op;
        },
        set: function (op) {
            this._op = op;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PatchBody.prototype, "path", {
        get: function () {
            return this._path;
        },
        set: function (path) {
            this._path = path;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PatchBody.prototype, "from", {
        get: function () {
            return this._path;
        },
        set: function (from) {
            this._from = from;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PatchBody.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
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
