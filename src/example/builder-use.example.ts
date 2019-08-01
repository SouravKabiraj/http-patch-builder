import {PatchBodyItemBuilder} from "../builders/patch-body-item.builder";
import {PatchOperation} from "../models/patch-body.model";
import {PatchBodyBuilder} from "../builders/patch-body.builder";

export class BuilderUseExample {
    createTestPatch(): void {
        const patchBodyElement = PatchBodyItemBuilder.withDefaults()
            .withOperation(PatchOperation.TEST)
            .withTargetPath('/email')
            .appendTargetPath('id')
            .withValue('sourav@outlook.com')
            .withFromPath('/name')
            .appendFromPath('first')
            .build();

        const anotherPatchBodyElement = PatchBodyItemBuilder.withDefaults()
            .withOperation(PatchOperation.TEST)
            .withTargetPath('/email')
            .appendTargetPath('id')
            .withValue('sourav@outlook.com')
            .withFromPath('/name')
            .appendFromPath('first')
            .build();

        const patchBody = PatchBodyBuilder.withNoChange().addChangeElement(patchBodyElement).addChangeElement(anotherPatchBodyElement).build();
        console.log(JSON.stringify(patchBody));
    }
}