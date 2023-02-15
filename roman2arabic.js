function convertToRoman(num) {
  let roman = "";
  let roman2arabic = 
  {
    M:1000, CM:900, D:500, CD:400, C:100, XC:90,
    L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1
  }
  for (let arabic in roman2arabic)
  {
    while (num >= roman2arabic[arabic])
    {
      roman += arabic;
      num -= roman2arabic[arabic];
    }
  } 
 return roman;
}