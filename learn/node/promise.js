// 温故知新

/**
 * promise 2
 */
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success')
  }, 1000)
})
  
const promise2 = promise1.then(() => {
   throw new Error('error!!!')
})

console.log('promise1', promise1)
console.log('promise2', promise2)

setTimeout(() => {
  console.log('promise1', promise1)
  console.log('promise2', promise2)
}, 2000)

console.log('------------------------------------------\n')

/**
 * promise 3
 */
const promise = new Promise((resolve, reject) => {
  resolve('success1')
  reject('error')
  resolve('success2')
})

promise
  .then((res) => {
    console.log('then: ', res)
  })
  .catch((err) => {
    console.log('catch: ', err)
  })

console.log('------------------------------------------\n')

/**
 * promise 4
 */
Promise.resolve(1)
  .then((res) => {
    console.log(res)
    return 2
  })
  .catch((err) => {
    return 3
  })
  .then((res) => {
    console.log(res)
  })

console.log('------------------------------------------\n')


/*
 * promise 5
 */
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('once')
    resolve('success')
  }, 1000)
})

const start = Date.now()
promise.then((res) => {
  console.log(res, Date.now() - start, 'xx')
})
promise.then((res) => {
  console.log(res, Date.now() - start, '--')
})

console.log('----------------------------\n');
