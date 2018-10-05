// var a = {
//   h1: "hello",
//   h2: function() {
//     return this.h1;
//   }
// };

// var h3 = a.h2.bind("asd");

// console.log(h3());

// var b = {
//   h1: "hellob",
//   h2: function() {
//     console.log(this.h1);
//     var h3 = a.h2;
//     var h4 = h3.bind(this);
//     return h4();
//   }
// };
// var a = {
//   h1: "hello",
//   h2: {
//     h1: "hello1",
//     h2: this.h1
//   }
// };
function b() {
  this.h1 = "hello124";
  var h1 = "hellob";
  this.h2 = () => {
    console.log(this.h1);
  };
  return {
    h1: "hello1",
    h2: function() {
      debugger;
      console.log(h1);
    }
  };
}

var h3 = new b().h2;
var h4 = h3.bind({ h1: "asdfsdf" });
console.log(h4());
