// QuickSort using Recursion
// The algorithm takes the first element of an array(as pivot) and compares the elements of the array with that value. 
// It splits the array it 2 - one which contains elements lesser than the pivot and the other containing elements greater than pivot.
// So with each iteration, the first element of an array (or the split left or right array) would be placed in its correct index within the array.

let quickSort = list => {
  if(list.length < 2){
    return list;
  }
  let pivot = list [0];
  let leftArr = [];
  let rightArr = [];
  
  for( let i = 1; i < list.length ; i++) {
    if(list[i] < pivot ) {
      leftArr.push(list[i]);
    }
    else{
      rightArr.push(list[i]);
    }
  }
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];    
}

let arr = [9, 7, 5, 2, 3, 6, 10, 1, 4, 8];
console.log(quickSort(arr));
