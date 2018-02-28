class SmartCalculator {
  constructor(initialValue) {
    // your implementation
    this.value = initialValue + '';
    this.valueOf = () => eval(this.value);
    this.base = initialValue;
  }

  add(number) {
    // your implementation
    this.value = this.value + '+' + number;
    this.base = number;
    return this;
  }
  
  subtract(number) {
    // your implementation
    this.value = this.value + '-' + number;
    this.base = number;
    return this;
  }

  multiply(number) {
    // your implementation
    this.value = this.value + '*' + number;
    this.base = number;
    return this;
  }

  devide(number) {
    // your implementation
    this.value = this.value + '/' + number;
    this.base = number;
    return this;
  }

  pow(number) {
    // your implementation
    let lastIndex = this.value.lastIndexOf(this.base);
    let bracketLength = this.value.length - lastIndex - (this.base + '').length;
    this.value = this.value.substring(0, lastIndex) + 'Math.pow(' + this.base + ',' + number + ')';
    this.base = number;
    for (let i = 0; i < bracketLength; i++) {
      this.value += ')';
    }
    return this;
  }
}

module.exports = SmartCalculator;
