class Negotiation {

    constructor(_date,_value,_amount){

        Object.assign(this, {_value, _amount});
        this._date = new Date(_date.getTime());
        Object.freeze(this);

    }

    get amount () {
        return this._amount;
    }

    get value () {
        return this._value;
    }

    get date () {
        return new Date(this._date.getTime());
    }

    get volume () {
        return this.amount * this.value;
    }

}