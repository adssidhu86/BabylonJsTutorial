if ("" == 0) {
    console.log("null and 0 are same");
    // It is! But why??
  }

  var x=9.03;
  if (!(1 < x & x < 3)) {
    // True for *any* value of x!
    console.log(typeof x, x);
    console.log(x);
  }


  const obj = { width: 10, height: 15 };
// Why is this NaN? Spelling is hard!
const area = obj.width * obj.heigth;
console.log(area)
console.log(typeof obj);