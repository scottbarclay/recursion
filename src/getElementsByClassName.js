// If life was easy, we could just do things the easy way:
//var getElementsByClassName = function (className) {
  //return document.getElementsByClassName(className);
//};

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className) {
  var result = [];
  // call the helper function with the document as the root
  recurse(document, className, result);
  return result;
};

// helper recursion function
var recurse = function(node, className, result) {
  var children = node.childNodes;
  for(var i = 0; i < children.length; i++) {
    // if this childNode has the class, add it 
    if(children[i].classList && children[i].classList.contains(className)) {
      result.push(children[i]);
    }
    // if the childNode has children, recurse those
    if(children[i].childNodes) {
      recurse(children[i], className, result);
    }
  }
  return result;
};