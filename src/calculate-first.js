function single_element(arr) {
  var res = [];
  var tmp = [];
  for(var i = 1; i < arr.length; i += 2){
    tmp.push(arr[i]);
  }
  var flag = false;
  for(var i = 0; i < tmp.length; i ++){
    var element = tmp[i];
    for(var j = 0; j < tmp.length; j ++){
      if(tmp[i] == tmp[j] && i != j){
        flag = true;
      }
    }
    if(flag == false){
      res.push(tmp[i]);
      flag = true;
    }
    flag = false;
  }
  return res;
}
