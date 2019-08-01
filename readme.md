
--------------------------------------PATCH example-----------------------------------------------

PATCH /users/123

[
    {
    "op":"test",
    "path":"/email/id",
    "value":"sourav@outlook.com",
    "from":"/name/first"
    },
    {
    "op":"test",
    "path":"/email/id",
    "value":"sourav@outlook.com",
    "from":"/name/first"
    }
]


-----------------------------------------Example--------------------------------------------------

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
    


 return->
A request patch body which follow proper format.

[
    {
    "op":"test",
    "path":"/email/id",
    "value":"sourav@outlook.com",
    "from":"/name/first"
    },
    {
    "op":"test",
    "path":"/email/id",
    "value":"sourav@outlook.com",
    "from":"/name/first"
    }
]

--------------------------------please-do-not-patch-like-an-idiot---------------------------------


https://williamdurand.fr/2014/02/14/please-do-not-patch-like-an-idiot/
