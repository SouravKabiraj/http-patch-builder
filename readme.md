
--------------------------------------PATCH example-----------------------------------------------

PATCH /users/123

[
    { "op": "replace", "path": "/email", "value": "new.email@example.org" }
]


-----------------------------------------Example--------------------------------------------------

PatchBodyBuilder.withDefaults()
            .withOperation(PatchOperation.TEST)
            .withTargetPath('/email')
            .appendTargetPath('id')
            .withValue('sourav@outlook.com')
            .withFromPath('/name')
            .appendFromPath('first')
            .build();


 return->
A request patch body which follow proper format.
{"op":"test","path":"/email/id","value":"sourav@outlook.com","from":"/name/first"}

--------------------------------please-do-not-patch-like-an-idiot---------------------------------


https://williamdurand.fr/2014/02/14/please-do-not-patch-like-an-idiot/
