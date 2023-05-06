async function spinalCase(str) {
  let strr = str;
  const typeOf = typeof(strr);
  let x = strr.toUpperCase();
  if(strr.includes(' ')){
    strr = strr.replaceAll(' ','-')
  }
  if(strr.includes('_')){
    strr = strr.replaceAll(' ','-')
  }
  console.log(strr)
  if(strr.split(' ').length!==1){
    
  }else{
    const indexOfspaces = [];
    const copyArray = x.split('');
    flag=0;
    let copystrr = ''
    copyArray.forEach(element => {
      if(element===strr[flag]){
        indexOfspaces.push(strr.indexOf(element))
      }
      flag++;
      return;
    });
    let prevIndex = 0;
    indexOfspaces.forEach(element =>{
      if(indexOfspaces.indexOf(element)===indexOfspaces.indexOf(indexOfspaces[indexOfspaces.length-indexOfspaces.length])){
        copystrr = strr.slice(0,element).concat('-');
        prevIndex = element;
      }else if(indexOfspaces.indexOf(element) ===indexOfspaces.indexOf(indexOfspaces[indexOfspaces.length-1])){
        copystrr = copystrr.concat(strr.slice(prevIndex,element));
      }else{
        copystrr = copystrr.concat(strr.slice(prevIndex,element)).concat('-')
        prevIndex = element;
      }
    })
    
    strr=copystrr
  }
  strr = strr.toLocaleLowerCase()
  if(strr.includes('_')){
    strr.replaceAll('_','')
  }
  if(strr.includes('--')){
    strr.replaceAll('-')
  }
  console.log(strr)
  return strr;
}

const ejecutor = async () =>{
  await spinalCase("thisIsSpinalTap")
  await spinalCase("The_Andy_Griffith_Show")
  await spinalCase("Teletubbies say Eh-oh")
  await spinalCase("This Is Spinal Tap")
  await spinalCase("thisIsSpinalTap")
}
ejecutor()
