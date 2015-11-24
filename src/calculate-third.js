function even_group_calculate_average(arr) {
  var res = [];
  var even = [];
  for(var i = 1; i < arr.length; i += 2 ){
    if(arr[i] % 2 == 0){
      even.push(arr[i]);
    }
  }
  var param = 10;
  for(var i = 0; i < 10; i++ ){
    var tmp = 0;
    var count = 0;
    for(var j = 0; j < even.length; j++ ){
      if(Math.floor(even[j] / param) == 0){
        tmp += even[j];
        count++;
        even[j] = 123e8;
      }
    }
    if(count != 0){
      res.push(tmp/count);
    }
    param = param * 10;
  }
  if(res.length == 0){
    res.push(0);
  }
  return res;
}
