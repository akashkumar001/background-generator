// const newArray=[1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]
// newArray.sort((a,b)=>a-b);
// orderArray=[];
// supArray=[];
// c=1;
// newArray.forEach(x=>{
//   if(x===c){
//     orderArray.push(x)
//   } else {
//     supArray.push(orderArray);
//     orderArray=[];
//     orderArray.push(x);
//     c=x;
//   }

// })

function differ(arr){
  numType=[];
  strType=[];
  superType=[];
  arr.forEach(x=>{
    if (typeof x==="number"){
      numType.push(x)
    } else{
      strType.push(x)
    }

  })
  superType.push(numType);
  superType.push(strType);
  return superType;
  
}