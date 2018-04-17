class Input {
    constructor(placeHolder) {
        this.placeHolder = placeHolder || "Type...";
        this._value = "";
    }

    get value() {
        return this._value;
    }
    
    setValue(newValue) {
        this._value = newValue;
    }
}

class NumberInput extends Input {
    constructor(placeHolder){
        super(placeHolder);
        this.type = "number";
    }
}

class AddRequiredValidation extends NumberInput {
    get valid (){
        if(!this.value){
            return false
        }
        return true
    }
}

class  AddMaxLengthValidation extends NumberInput {
    get valid (){
        if(this.value.toString().length <= 5){
            return true
        }
        return false
    }
}

class AddNumberValidation extends NumberInput{
    get valid() {
        if(typeof this.value === this.type){
            return true
        }
        return false
    }
}
let numberInput = new NumberInput();

numberInput = new AddRequiredValidation( new NumberInput() )

// The desired behaviour would be
console.log(numberInput.valid)// ---> false, because of required validator

numberInput = new AddNumberValidation( new NumberInput() )

numberInput.setValue("1");
console.log(numberInput.valid)// ---> false, because of number validator
numberInput.setValue(1);
console.log(numberInput.valid)// ---> true, all validators pass

numberInput = new AddMaxLengthValidation( new NumberInput() )
numberInput.setValue(1111111111111111111111111111);
console.log(numberInput.valid) //---> false, because of max length validator

// Notice after applying some validator to an object, it gets additional "valid" property;