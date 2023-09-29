export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string' && name !== 'string') {
      throw new TypeError('Invalid input type')
    }
    this._code = code;
    this._name = name;
  }
  
  // Getter for code
  get code() {
    return this._code;
  }

  // Setter for code
  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = value;
  }

   // Getter for name
  get name() {
    return this._name;
  }

   // Setter for name
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  // method to display currency.
  displayFullCurrency() {
  return `${this.name} (${this.code})`;
  }
}
