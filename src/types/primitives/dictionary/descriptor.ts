
import {
    TypeDescriptor
} from "../../interfaces";

import {
    Dictionary
} from "./interfaces";


export interface DictionaryTypeDescriptor<TKey = any, TValue = any> extends TypeDescriptor<Dictionary<TKey, TValue>> {
    name: "dictionary";
    keyType: TypeDescriptor<TKey>;
    valueType: TypeDescriptor<TValue>;
}