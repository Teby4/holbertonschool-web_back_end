import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new Error('amount must be a number');
    }
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    if (typeof amount !== 'string') {
      throw new Error('Amount must be a string');
    }
    this._amount = amount;
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    this._currency = currency;
  }

  displayFullPrice() {
    return `${this.amount} ${this._currency._name} (${this._currency._code})`;
  }

  convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new Error('amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw new Error('conversionRate must be a number');
    }
    return amount * conversionRate;
  }
}
