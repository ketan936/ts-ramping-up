var myGen = function*() {
  var one = yield 1;
  var two = yield 2;
  var three = yield 3;
  console.log(one, two, three);
};

var gen = myGen(); //get the generator ready to run
//when you run next() on a generator, it runs until a yield, then waits until next() is called again
console.log(gen.next()); //{value:1, done: false}
console.log(gen.next()); //{value:2, done: false}
console.log(gen.next()); //{value:3, done: false}
console.log(gen.next()); //{value:undefined, done: true}
console.log(gen.next()); //errors because you can't call next() on a closed generator

// console.log(gen.next()); //{value:1, done: false}
// console.log(gen.next(1)); //{value:2, done: false}
// console.log(gen.next(2)); //{value:3, done: false}
// console.log(gen.next(3)); //{value:undefined, done: true}

// function smartCode(generator) { //give me a generator function
//   var gen = generator();//start up the generator
//   var yieldedVal = gen.next().value;//get the first yielded value
//   if(yieldedVal.then) { //is it a promise?
//     //it's a promise!!!
//     yieldedVal.then(gen.next);//wait for it to resolve, then pass the resolved value back in
//   }
// }
