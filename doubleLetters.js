function doubleLetters(word){
  var result = "";
  console.log(word.length);
  for(var i = 0; i < word.length; i++){
    console.log(word.charAt(i));
    result += word.charAt(i) + word.charAt(i);
    console.log(result);
        }
  return result;
} doubleLetters("abc");
