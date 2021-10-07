const string = "Привет! как дела?";
const vowels = ["а", "о", "э", "е", "и", "ы", "у", "ё", "ю", "я", "А", "Е", "Ё", "И", "О", "У", "Ы", "Э", "Ю", "Я"];
 
const getVowels = stringToFilter => {
  let extractedVowels = "";

  for (
    let i=0;
    i < stringToFilter.length;
    i++) {
      const currentelem = stringToFilter[i];

      if (vowels.includes(currentelem)) {
        extractedVowels += currentelem;
      } 
    }
  
  return extractedVowels;

}

console.log(getVowels(string));

