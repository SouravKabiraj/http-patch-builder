import {PatchBodyItem, PatchOperation} from "../models/patch-body.model";

export class PatchBodyItemBuilder {
    private readonly patchBodyItem: PatchBodyItem;

    constructor() {
        this.patchBodyItem = new PatchBodyItem();
    }

    public static withDefaults(): PatchBodyItemBuilder {
        return new PatchBodyItemBuilder();
    }

    public withOperation(operation: PatchOperation) {
        this.patchBodyItem.Op = operation;
        return this;
    }

    public withTargetPath(path: string) {
        this.patchBodyItem.Path = path;
        return this;
    }

    public appendTargetPath(path: string) {
        this.patchBodyItem.Path = `${this.patchBodyItem.Path}/${path}`;
        return this;
    }

    public withValue(value: any) {
        this.patchBodyItem.Value = value;
        return this;
    }

    public withFromPath(fromPath: string) {
        this.patchBodyItem.From = fromPath;
        return this;
    }

    public appendFromPath(path: string) {
        this.patchBodyItem.From = `${this.patchBodyItem.From}/${path}`;
        return this;
    }

    public build(): PatchBodyItem {
        return this.patchBodyItem;
    }
}