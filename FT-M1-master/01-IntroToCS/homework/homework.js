'use strict';

function BinarioADecimal(num) {
   var result=0;
   var pos = num.length-1;
   for(let i=0; i< num.length;i++){
      result=result+num[i]*Math.pow(2,pos);
      pos--;
   }
   return result;

}

function DecimalABinario(num) {
   var str =""
   var number = num
   while (number>0){
      str=number %2 +str
      number=math.floor(number/2)
   }
   console.log(str)
   return str;
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
