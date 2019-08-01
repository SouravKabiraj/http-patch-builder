import {PatchBodyItemBuilder} from "./patch-body-item.builder";
import {PatchBodyItem} from "../models/patch-body.model";

export class PatchBodyBuilder {
    private readonly patchBody: PatchBodyItem[];

    constructor() {
        this.patchBody = [];
    }

    public static withNoChange(): PatchBodyBuilder {
        return new PatchBodyBuilder();
    }

    public addChangeElement(patchChange: PatchBodyItem): PatchBodyBuilder {
        this.patchBody.push(patchChange);
        return this;
    }

    public build(): PatchBodyItem[] {
        return this.patchBody;
    }
}