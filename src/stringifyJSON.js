// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // array is typeof object, so deal with it first
  if (Array.isArray(obj)) {
    obj = obj.map(function(item) {
      return stringifyJSON(item);
    });
    return '[' + obj + ']';
  }
  // null is typeof object, so exclude it and handle later in function
  if (obj !== null && typeof(obj) === 'object') {
    // to handle commas, throw the properties in an array which
    // will later be joined and wrapped as an object
    var properties = [];
    for (var key in obj) {
      // exclude values that evaluate to null until later in function
      if (obj[key] !== undefined && typeof(obj[key]) !== 'function') {
      properties.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      }
    }
    // pull the properties out of the array and wrap as object
    return '{' + properties.join() + '}';
  }
  // double sets of quotes on strings
  if (typeof(obj) === 'string') {
    return '"' + obj + '"';
  }
  // all other primitives
  return '' + obj;
};
