import axios from "axios";

const newLocal =
  "http://api.openweatherm.org/data/2.5/forecast?id=524901&APPID=f08b1f79f975a4afb92afe75c8b1d393";
// // tslint:disable-next-line:no-console

function getData() {
  return Promise.resolve("hello").then(reponse => {
    console.log("getData", reponse);

    return Promise.resolve(Promise.resolve(reponse));
  });
}

function call() {
  const response = getData().then(response => {
    console.log("call", response);
  });

  console.log("call outer", response);
}

call();

console.log("main", "hello");

// console.log("hello");

// var test1 = function(x: any): any {
//   if (x === 1) {
//     return { catch: y => y(x) };
//   } else {
//     return Promise.reject("Work");
//   }
// };

// test1(2)
//   // .then(x => {
//   //   console.log("success ", x);
//   // })
//   .catch(x => {
//     console.log("error", x);
//   });

// console.log("line after promise");

// const dummyPromise = Promise.resolve(2);

// dummyPromise.then(x => console.log(x + 1)).then(x => console.log(x));
// dummyPromise.then(x => console.log(x + 2));
// dummyPromise.then(x => console.log(x + 3));
// dummyPromise.then(x => console.log(x + 4));
// dummyPromise.then(x => console.log(x + 1));
