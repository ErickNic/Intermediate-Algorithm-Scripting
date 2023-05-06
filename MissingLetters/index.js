let abc = "abcdefghijklmnopqrstuvwxyz";
abc = abc.split('');
const letter='i'

function fearNotLetter(str) {
  let missingLetters = []
  const strArray = str.split('');
  const strLength = strArray.length;
  const lastLetterIndexOfABC = str.indexOf(strArray[strLength-1]);
  const firstLetterIndexOfABC = str.indexOf(strArray[0]);
  let abctoCompare = abc.toString().replaceAll(',','').substring(firstLetterIndexOfABC,lastLetterIndexOfABC+2);
  let flag=0;
  while(strArray.length!==abctoCompare.length){
    if(strArray[flag]!==abctoCompare[flag]){
      strArray.splice(flag,0,'x')
    }
    flag++;
  }
  for(let k=0;k<strArray.length;k++){
    if(strArray[k]!==abctoCompare[k]){
      missingLetters.push(abctoCompare[k])
   
    }
  }
  if(missingLetters .length ===0){
    return undefined;
  }else{
    missingLetters = missingLetters.toString().replaceAll(',','');
    return missingLetters;
  }
}
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
console.log(fearNotLetter("abce"));
