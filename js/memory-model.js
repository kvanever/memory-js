function Memory(number) {
  this.number = number;
  this.array = [];
}

Memory.prototype.shuffle = function() {
  var counter = this.array.length;
  while (counter > 0) {
      var index = Math.floor(Math.random() * counter);
      counter--;
      var temp = this.array[counter];
      this.array[counter] = this.array[index];
      this.array[index] = temp;
  }
  return this.array;
};

Memory.prototype.createArray = function()  {
  for(i = 1; i <= this.number; i++) {
    this.array.push(i);
    this.array.push(i);
  }
  return this.array;
};


exports.memoryModule = Memory;
