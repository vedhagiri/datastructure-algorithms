function strCaseInsensitive(text){
    text = text.toString(); 
    if(text.length === 0) return "";
  
    var matchArr = 'abcdefghijklmnopqrstuvwxyz'.split(''),
        x = new Array(text.length),
        textLowerCase = text.toLowerCase();
      for(var i = 0; i < x.length; i++){
            var charLowerCase= textLowerCase[i],
                output = (match.indexOf(charLowerCase) !== -1) ? charLowerCase + charLowerCase.toUpperCase() :  text[i]; 
          x[i] = "[" + output + "]";
      };  
      return x.join('~');
  }
  
  
  strCaseInsensitive("vedhagiri1234!@@ #@! @# ASDEFRFD");