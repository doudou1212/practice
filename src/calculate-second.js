function calculate_median(arr) {
  var tmp = [];
  for(var i = 1; i < arr.length; i += 2 ){
    tmp.push(arr[i]);
  }
  for(var i = 0;i < tmp.length-1; i ++ ){
    for(var j = i+1; j < tmp.length;j++ ){
      if(tmp[i] > tmp[j]){
        var t = tmp[i];
        tmp[i] = tmp[j];
        tmp[j] = t;
      }
    }
  }
  console.log("tmp is "+tmp);
  if(tmp.length % 2 == 1){
    console.log((tmp.length-1)/2);//当tmp.length==3时  tmp.length/2 为1.5,真是醉了Orz...
    return tmp[(tmp.length-1)/2];
  }
  else{
    console.log((tmp[tmp.length/2]+tmp[tmp.length/2 - 1])/2);
    return (tmp[tmp.length/2]+tmp[tmp.length/2 - 1])/2;
  }
}
