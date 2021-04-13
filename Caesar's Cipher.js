function rot13(str) {
    //alphabet
    var abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  
    //turns str into array
    var encodedStr = str.split("");
  
    //blank string to push into
    var decodedStr = "";
  
    for (var index = 0; index < encodedStr.length; index++) {
      if (!abc.includes(encodedStr[index])) {
        decodedStr += encodedStr[index];
      } 
      else {
        var encodedInd = abc.indexOf(encodedStr[index]);
        if (encodedInd < 13) {
          decodedStr += abc[encodedInd + 13];
        }
        else {
          var total = encodedInd + 13;
          var newInd = total - abc.length;
          decodedStr += abc[newInd]
        } 
      }
      
    }
    return decodedStr;
  }
  
  console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT"));