'use strict';
console.log("________________task 5.4________________");

class StringBuilder{
    constructor(inputString){
        this._value = inputString;
    }

    get value(){
        return this._value;
    }

    append(str){
        this._value = this._value.concat(str);
    }

    prepend(str){
        this._value = str.concat(this._value);
    }

    pad(str){
        this._value = str.concat(this._value).concat(str);
    }
}




const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='