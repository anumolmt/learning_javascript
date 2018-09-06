// MergeSort using Recursion
// The algorithm recursively divides the array from its mid(done in the merge function). 
// These divided arrays are then sorted and and combined into a single array and returned (done in the mergeSort function) 


let mergeSort = (leftArr, rightArr) => {
  let sortedArr = [];
  while(leftArr.length && rightArr.length){
    if(leftArr[0] < rightArr[0]){
      sortedArr.push(leftArr[0]);
      leftArr = leftArr.slice(1);
    }
    else{
      sortedArr.push(rightArr[0]);
      rightArr = rightArr.slice(1);  
    }
  }
  return [...sortedArr, ...leftArr, ...rightArr];
}

let merge = (arr) => {
  if( arr.length < 2){
    return arr;
  }
  let mid = parseInt(arr.length/2);
  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid, arr.length);
  return mergeSort(merge(leftArr), merge(rightArr));
}
let arr = [9, 7, 5, 2, 3, 6, 10, 1, 4, 8];
console.log(merge(arr));