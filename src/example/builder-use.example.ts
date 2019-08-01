import {PatchBodyItemBuilder} from "../builders/patch-body-item.builder";
import {PatchOperation} from "../models/patch-body.model";
import {PatchBodyBuilder} from "../builders/patch-body.builder";

export class BuilderUseExample {
    createTestPatch(): void {
        const patchBodyElement = PatchBodyItemBuilder.withDefaults()
            .setPatchOperation(PatchOperation.TEST)
            .setTargetPath('/email')
            .appendTargetPath('id')
            .setValue('sourav@outlook.com')
            .setFromPath('/name')
            .appendFromPath('first')
            .build();

        const anotherPatchBodyElement = PatchBodyItemBuilder.withDefaults()
            .setPatchOperation(PatchOperation.TEST)
            .setTargetPath('/email')
            .appendTargetPath('id')
            .setValue('sourav@outlook.com')
            .setFromPath('/name')
            .appendFromPath('first')
            .build();

        const patchBody = PatchBodyBuilder.withNoChange().addChangeElement(patchBodyElement).addChangeElement(anotherPatchBodyElement).build();
        console.log(JSON.stringify(patchBody));
    }
}