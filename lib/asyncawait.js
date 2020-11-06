//https://javascript.info/async-await
/*
    The word “async” before a function means one simple thing: 
    a function always returns a promise. 
    Other values are wrapped in a resolved promise automatically.
*/

//https://medium.com/javascript-in-plain-english/async-await-javascript-5038668ec6eb

//https://developer.blog/async-await/

function f1(t) {
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        console.log(`wait time is ${t}`)
        resolve(t)
      }, t)
    })
  }
  //wait for f1 execution to complete before invoking again
  async function f2() {
      await f1(3000)
      await f1(2000)
      await f1(4000)
      await f1(1000)
  }

  //f2 & f3 accomplish the samething
  function f3() {
      f1(3000).then( (value) => console.log(value) )
  }

  const myAsyncFunction = async () => {
      return 123
  }

  const entryFunction = () => {
        console.log(myAsyncFunction())
        myAsyncFunction().then(console.log)
  }

entryFunction()