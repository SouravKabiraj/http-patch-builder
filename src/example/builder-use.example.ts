import {PatchBodyBuilder} from "../builders/patch-body.builder";
import {PatchOperation} from "../models/patch-body.model";

export class BuilderUseExample {
    createTestPatch() {
        const patchBody = PatchBodyBuilder.withDefaults()
            .withOperation(PatchOperation.TEST)
            .withTargetPath('/email')
            .withValue('sourav@outlook.com')
            .withFromPath('/name')
            .build();

        console.log(JSON.stringify(patchBody));
    }
}