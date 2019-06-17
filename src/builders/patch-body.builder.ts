import {PatchBody, PatchOperation} from "../models/patch-body.model";

export class PatchBodyBuilder {
    private readonly patchBody: PatchBody;

    constructor() {
        this.patchBody = new PatchBody();
    }

    public static withDefaults(): PatchBodyBuilder {
        return new PatchBodyBuilder();
    }

    public withOperation(operation: PatchOperation) {
        this.patchBody.Op = operation;
        return this;
    }

    public withTargetPath(path: string) {
        this.patchBody.Path = path;
        return this;
    }

    public appendTargetPath(path: string) {
        this.patchBody.Path = `${this.patchBody.Path}/${path}`;
        return this;
    }

    public withValue(value: any) {
        this.patchBody.Value = value;
        return this;
    }

    public withFromPath(fromPath: string) {
        this.patchBody.From = fromPath;
        return this;
    }

    public appendFromPath(path: string) {
        this.patchBody.From = `${this.patchBody.From}/${path}`;
        return this;
    }

    public build(): PatchBody {
        return this.patchBody;
    }
}