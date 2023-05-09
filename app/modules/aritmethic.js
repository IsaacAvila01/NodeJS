function add(num1, num2){
  if(typeof(num1)==="number" && typeof(num2)==="number")
     return num1 + num2
  else
    return -999     
}

function diff(num1, num2){
    if(typeof(num1)==="number" && typeof(num2)==="number")
       return num1 - num2
    else
      return -999     
  }

// objeto que espefica la exportación
module.exports={
  suma:add,  
  diff:diff
}