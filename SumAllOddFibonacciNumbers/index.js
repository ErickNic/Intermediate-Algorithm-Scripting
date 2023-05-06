function sumFibs(num) {
    const fiboArray = [];
    const fiboArrayJustOddsNumbers = [];

    console.log(fiboArray);
    fiboArray.push(1);

    console.log(fiboArray)
    
    let sumatoria;
    let i = 1;


    let segundo = fiboArray[i-1];
    fiboArray.push(segundo);

    do{
        segundo = fiboArray[i]+fiboArray[i-1];
        console.log(fiboArray);
        fiboArray.push(segundo);
        i++;
        if(fiboArray[i]>num){
            fiboArray.pop();
        }
    }while(fiboArray[i]<=num);
    for(let j=0;j<fiboArray.length;j++){
        if(fiboArray[j]%2!==0){
            fiboArrayJustOddsNumbers.push(fiboArray[j]);
        }
    }
    
    sumatoria = fiboArrayJustOddsNumbers.reduce((a,b)=>a+b,0)
    console.log(fiboArrayJustOddsNumbers);
    return sumatoria;
}

sumFibs(5);