
import {
    asScope,
    inject,
    injectable
} from "microinject";

import {
    DataReader,
    DataWriter
} from "../../../binary-serializer";

import {
    TypeTemplateRegistry
} from "../type-serializer";

import {
    SaveGameInstance,
    SaveGameHeaderInstance,
    SaveBodyInstance,
    SaveGameScope
} from "../services";

import {
    TypeTemplate
} from "../type-serializer";

import {
    SaveGameHeader,
    SaveBody
} from "../interfaces";


@injectable(SaveGameInstance)
@asScope(SaveGameScope)
export class SaveGameInstanceImpl implements SaveGameInstance {

    constructor(
        @inject(SaveGameHeaderInstance) private _header: SaveGameHeaderInstance,
        @inject(TypeTemplateRegistry) private _templates: TypeTemplateRegistry,
        @inject(SaveBodyInstance) private _body: SaveBodyInstance
    ) {}

    get header(): SaveGameHeader {
        return this._header;
    }

    get body(): SaveBody {
        return this._body;
    }

    parse(reader: DataReader) {
        this._header.parse(reader);
        this._templates.parse(reader);
        this._body.parse(reader);
    }

    write(writer: DataWriter) {
        this._header.write(writer);
        this._templates.write(writer);
        this._body.write(writer);
    }
}