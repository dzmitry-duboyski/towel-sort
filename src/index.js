module.exports = function towelSort  (matrix) {
  if(!arguments[0]){ return []; }
  if(matrix.length===0){ return []; }

  let stack = []
  
  matrix.map(function (elem,index){
    if(index%2==0 || index===0){ //0,2
      stack.push(elem);
      return;
    }
     stack.push(elem.reverse());
  })

  return stack.join(',').split(',').map(elem=>Number(elem))
}