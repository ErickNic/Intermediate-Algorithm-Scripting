/* function destroyer(arr) {
    const indexOf = [];
    let ix = 0;
    const subArray =  arr[0];
    console.log(subArray);
    for(let i=1;i<arr.length;i++){
        console.log(`${i}.El valor es ${arr[i]}`)
        for(let j=0;j<subArray.length;j++){
            console.log(`Se evalua ${i}. ${arr[i]} con ${j}. ${arr[0][j]}`);
            if(arr[i]===subArray[j]){
                console.log(`\n\t Son iguales`);
                indexOf.push(j);
            }
            }
            console.log(`'Los indices de los valores iguales a ${arr[i]} son: ${indexOf}'`);
            
            console.log(subArray);
        }
        console.log(indexOf);
        indexOf.sort((a,b)=>a-b);
        console.log(indexOf);
        for(let k=0;k<indexOf.length;k++){
            const preciseIndex = indexOf[k]-ix;
            console.log(`'El elemento a eliminar está en el indice ${preciseIndex}'`);
            subArray.splice(preciseIndex,1);
            ix++;
            console.log(ix);
        }
        console.log(subArray);
        return subArray;
} */

function destroyer(arr) {
    const valsToRemove = Object.values(arguments).slice(1);
    console.log(arr)
    console.log(valsToRemove);
    return 0;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

/* console.log([1, 2, 3, 1, 2, 3].sort((a,b) =>a-b));
console.log(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"].sort((a,b) =>a-b)); */