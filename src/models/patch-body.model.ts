export class PatchBodyItem {
    private op: PatchOperation | undefined;
    private path: string | undefined;
    private value: any;
    private from: string | undefined;

    constructor()
    constructor(op?: PatchOperation, path?: string, value?: any, from?: string) {
        this.op = op;
        this.path = path;
        this.value = value;
        this.from = from;
    }

    public get Op(): PatchOperation | undefined {
        return this.op;
    }

    public set Op(op: PatchOperation | undefined) {
        this.op = op;
    }

    public get Path(): string | undefined {
        return this.path;
    }

    public set Path(path: string | undefined) {
        this.path = path;
    }

    public get From(): string | undefined {
        return this.from;
    }

    public set From(from: string | undefined) {
        this.from = from;
    }

    public get Value(): any {
        return this.value;
    }

    public set Value(value: any) {
        this.value = value;
    }
}

export enum PatchOperation {
    TEST = 'test',
    REMOVE = 'remove',
    ADD = 'add',
    REPLACE = 'replace',
    MOVE = 'move',
    COPY = 'copy'
}