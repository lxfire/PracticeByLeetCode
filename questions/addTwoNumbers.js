function Func(x, y) {
    this.name = x
    this.grender = y
}

var one = new Func(1, 2)
var two = one
two.grender = new Func(2, 3)
two = two.grender

console.log(one, two, '\n *********************** \n')

var three = new Func(1, 2)
three.grender = new Func(2, 3)
three = three.grender

console.log(three.grender, '\n *********************** \n')

var a = {"a": 1, "b": {"a": 2}}
var b = a
b.b.a = 3
b = b.b
console.log(a, b)
