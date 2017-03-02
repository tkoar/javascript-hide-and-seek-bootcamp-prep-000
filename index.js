function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  return document.querySelector('#grand-node div');
}

function increaseRankBy(n) {
  var increase = document.querySelectorAll('.ranked-list');
  
  for (var i = 0; i < increase.length; i++) {
    var childrenToIncrease = increase[i].children; 
    
    for (var x = 0; x < childrenToIncrease.length; x++) {
      childrenToIncrease[x].innerHTML = parseInt(childrenToIncrease[x].innerHTML) + n;
    }
  }
}