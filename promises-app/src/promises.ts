import axios from "axios";

const newLocal =
  "http://api.openweatherm.org/data/2.5/forecast?id=524901&APPID=f08b1f79f975a4afb92afe75c8b1d393";
// tslint:disable-next-line:no-console
// axios(
//   newLocal
// ).then(data => {
//   debugger
// }).catch(err => {
//   debugger;
// });

var test1 = function(x) {
  if (x === 1) {
    return { catch: y => y(x) };
  } else {
    return Promise.reject("Work");
  }
};

test1(2)
  // .then(x => {
  //   console.log("success ", x);
  // })
  .catch(x => {
    console.log("error", x);
  });

console.log("line after promise");
