function repeat(){
  var star = "*";
  var str = "";
  for (var j = 1; j <= 5; j++){
      for (var k = 1; k <= (5*(2*j-j)); k++){
        str += star.concat();
      }
    console.log(str);
    console.log("");
  }

  for (var j = 1; j <= 4; j++){
      for (var k = 4; k >= (5*(2*j-j)); k--){
        str += star.concat();
      }
    console.log(str);
    console.log("");
  }
}
repeat();
