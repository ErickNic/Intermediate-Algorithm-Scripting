function diffArray(arr1, arr2) {
    const newArr = [];
    const arr1Largo = arr1.length;
    const arr2Largo = arr2.length;
    console.log(arr2Largo);
    console.log(arr1Largo);
    console.log(arr1Largo[6]);
    if(arr1Largo>arr2Largo){
        for(let i=0;i<arr1Largo;i++){
            console.log(`Se compara arr`)
            if(arr1[i]!==arr2[i]){
                console.log('entra al loop')
                /* while(arr2.lastIndexOf(arr1[i])!==-1 && arr2[i]== undefined){
                    console.log('Se entro al loog')
                } */
                newArr.push(arr1[i])
            }
        }
    }else{
        for(let i=0;i<arr2Largo;i++){
            
        }
        console.log('El segundo es el mas largo')
    }
    
    console.log(newArr)
    return newArr;
  }
  
  diffArray([1, 2, 3,4,6, 5], [1, 2, 3, 4, 5]);
  var array = [2, 9, 9];
  console.log(array.lastIndexOf(9))