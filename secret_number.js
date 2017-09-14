'use strict';
module.exports = function() {
  var secretNum = Math.random();
  return function(){
    return secretNum;
  };
};


