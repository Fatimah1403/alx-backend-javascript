class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Getter for the brand attribute
  get brand() {
    return this._brand;
  }

  // Getter for the motor attribute
  get motor() {
    return this._motor;
  }

  // Getter for the color attribute
  get color() {
    return this._color;
  }

  // Method to clone a Car object
  cloneCar() {
    return new Car(this._brand, this._motor, this._color);
  }
}
