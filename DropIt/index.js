function dropElements(arr, func) {
    const arrCopy = [...arr];
    console.log(arrCopy)
    for(let i=0;i<arr.length;i++){
        console.log(func(arr[i]))
        console.log(arr[i])
        if(func(arr[i])){
            break;
        }else{
            arrCopy.shift()
        }
    }
    console.log(arrCopy)
  return arrCopy;
}

/* dropElements([1, 2, 3], function(n) {return n < 3; }); */
dropElements([0, 1, 0, 1], function(n) {return n === 1;})