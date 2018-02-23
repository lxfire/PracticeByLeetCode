function Prom () {
}

Prom.arg = function () {
    console.log(1111)
    return Prom.apply(this, arguments)
}

Prom.wt = function () {
    console.log(222)
    return Prom.apply(this, arguments)
}
