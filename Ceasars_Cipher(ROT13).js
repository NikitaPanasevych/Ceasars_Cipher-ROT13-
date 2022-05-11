function rot13(str) {
    var strA = str.split(""); 
    var alph = [
"A","B","C","D","E","F","G","H",
"I","J","K","L","M","N","O","P","Q",
"R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H",
"I","J","K","L","M"];
    for(let i = 0;i<str.length;i++){
        for(let j = 0;j<26;j++){
            if(str[i] === alph[j]){
                strA[i] = alph[j+13]
            }
        }
    }
  return strA.join("");
}

console.log(rot13("SERR PBQR PNZC"));