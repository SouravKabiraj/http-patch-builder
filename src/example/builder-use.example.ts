import {PatchBodyBuilder} from "../builders/patch-body.builder";
import {PatchOperation} from "../models/patch-body.model";

export class BuilderUseExample {
    createTestPatch(): void {
        const patchBody = PatchBodyBuilder.withDefaults()
            .withOperation(PatchOperation.TEST)
            .withTargetPath('/email')
            .appendTargetPath('id')
            .withValue('sourav@outlook.com')
            .withFromPath('/name')
            .appendFromPath('first')
            .build();

        console.log(JSON.stringify(patchBody));
    }
}