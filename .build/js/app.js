(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
var Memory = require('./../js/memory-model.js').memoryModule;

$(document).ready(function() {
  var memory = new Memory(5);
  var value1 = 0;
  var value2 = 0;
  var winCounter = 0;
  memory.createArray();
  var shuffledArray = memory.shuffle();
  shuffledArray.forEach(function(element){
    $(".output").append("<button type='button' value='"+ element +"' class='btn " + element + "'><span class='hidden'>" + element + "</span></div>");
  });
  $(".btn").click(function(){
    if ($(this).find('> span').hasClass('hidden')) {
      $(this).find('> span').addClass("show");
      $(this).find('> span').removeClass("hidden");
      if (value1 === 0) {
        value1 = parseInt($(this).val());
      } else {
        value2 = parseInt($(this).val());
      }
      if (value1 !== 0 && value2 !== 0) {
        if (value1 !== value2) {
          alert('try again');
          $(".show").addClass("hidden");
          $(".show").removeClass("show");
        } else {
          $(".show").removeClass("show");
          winCounter+=1;
          if (winCounter === memory.number) {
            alert('you win');
          }
        }
        value1 = 0;
        value2 = 0;
      }
    }
  });
});

},{"./../js/memory-model.js":1}]},{},[2]);
