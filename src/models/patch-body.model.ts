export class PatchBody {
    private _op: PatchOperation | undefined;
    private _path: string | undefined;
    private _value: any;
    private _from: string | undefined;

    constructor()
    constructor(op?: PatchOperation, path?: string, value?: any, from?: string) {
        this._op = op;
        this._path = path;
        this._value = value;
        this._from = from;
    }

    public get op(): PatchOperation | undefined {
        return this._op;
    }

    public set op(op: PatchOperation | undefined) {
        this._op = op;
    }

    public get path(): string | undefined {
        return this._path;
    }

    public set path(path: string | undefined) {
        this._path = path;
    }

    public get from(): string | undefined {
        return this._path;
    }

    public set from(from: string | undefined) {
        this._from = from;
    }

    public get value(): any {
        return this._value;
    }

    public set value(value: any) {
        this._value = value;
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