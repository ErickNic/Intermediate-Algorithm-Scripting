const vowel = /[aeiou]/
function translatePigLatin(str) {
  const strArray = str.split('');
  const ay = 'ay'
  let valueToReturn = ''
  console.log(strArray);
  const flag = false;
  let indexOfFirstVowel = str.search(vowel);
  if(indexOfFirstVowel ===0){
    valueToReturn = str +'way';
  }else{
    let addedToTheEnd = str.substring(0, indexOfFirstVowel);
    valueToReturn = str.substring(indexOfFirstVowel)+addedToTheEnd+ay
  }
  console.log(indexOfFirstVowel)
  console.log(valueToReturn)
  return valueToReturn
}

translatePigLatin("consonant");
translatePigLatin("eight");