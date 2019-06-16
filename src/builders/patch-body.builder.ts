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
        this.patchBody.op = operation;
        return this;
    }

    public withTargetPath(path: string) {
        this.patchBody.path = path;
        return this;
    }

    public withValue(value: any) {
        this.patchBody.value = value;
        return this;
    }

    public withFromPath(fromPath: string) {
        this.patchBody.from = fromPath;
        return this;
    }

    public build(): PatchBody {
        return this.patchBody;
    }
}