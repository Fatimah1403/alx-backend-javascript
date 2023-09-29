import Currency from './3-currency';
export default class Pricing {
    constructor(amount, currency) {
        this._amount = amount;
        this._currency = currency;
    }

    // getter for amouunt;
    get amount() {
        return this._amount;
    }
    // setter for amount
    set amount(value) {
        this._amount = value;
    }

    // getter for currency
    get currency() {
        return this._currency;
    }
    // setter for currency
    set currency(value) {
        this._currency = value;
    }
    displayFullPrice() {
        return `${this.amount} ${this.currency._name} (${this.currency._code})`;
    }
    static convertPrice(amount, conversionRate) {
        return amount * conversionRate;
    }
}
