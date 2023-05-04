function myReplace(str, before, after) {
    str = str.split(' ');
    for(let i=0;i<str.length;i++){
        if(str[i] ===before){
            if(before.charAt(0).toUpperCase() + before.slice(1)===before){
                str[i]=after.charAt(0).toUpperCase() + after.slice(1);
            }else{
                str[i]=after.charAt(0).toLowerCase() + after.slice(1)
            }
        }
    }
    str = str.join(' ');
    console.log(str);
    return str;
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");