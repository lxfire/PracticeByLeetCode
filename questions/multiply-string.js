/**
 * num1 = '2' , num2 = '3' 2*3 = 6
 * ouput = '6'
 * num1 = '123' , num2 = '456' 123*456 = 56088 
 * output '56088'
 * num1
 * /

var multiply = (num1, num2) => {
  var num = len1 < len2 ? num1.length : num2.length
  var count = 1
  var sum = 0
  while(num > count) {
    sum += num1.substr(num1.length - count, 1) * num2.substr(num2.length - count, 1) * 10^ (count - 1)
  }
  sum += num1.substr(0, num1.length - count) * 10^count
  return sum
}
