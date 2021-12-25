function compose(a, b) {
  return function (x) {
    console.log('b is => ', b)
    return a(b(x))
  }
}


var head = function(x) { return x[0]; };

var reverse = function (x) {
  return x && x.split(',').reduce((acc, x) => [x].concat(acc), []);
}

var toUpperCase = function(x) { return String(x).toUpperCase(); };

var exclaim = function(x) { return x + '!'; };

// var loudLastUpper = compose(exclaim, toUpperCase, head, reverse);
var x = compose(head, reverse)
var z = compose(exclaim, toUpperCase)
var _loudLastUpper = compose(x, z)
// var result = loudLastUpper(['jumpkick', 'roundhouse', 'uppercut']);
var _result = _loudLastUpper(['jumpkick', 'roundhouse', 'uppercut']);
console.log('result is => ', _result);




// compose case 1
var CARS = [
  {name: "Ferrari FF", horsepower: 660, dollar_value: 700000, in_stock: true},
  {name: "Spyker C12 Zagato", horsepower: 650, dollar_value: 648000, in_stock: false},
  {name: "Jaguar XKR-S", horsepower: 550, dollar_value: 132000, in_stock: false},
  {name: "Audi R8", horsepower: 525, dollar_value: 114200, in_stock: false},
  {name: "Aston Martin One-77", horsepower: 750, dollar_value: 1850000, in_stock: true},
  {name: "Pagani Huayra", horsepower: 700, dollar_value: 1300000, in_stock: false}
];

// 使用_.compose()重写函数 提示_.prop()是curry函数
var isLastInStock = function(cars) {
  var last_car = _.last(cars);
  return _.prop('in_stock', last_car);
};


_compose(_props, _compose('in_stock', _.last))



// add(1)(2)(3)  add(1, 2, 3)
const curry = function (fn) {

}