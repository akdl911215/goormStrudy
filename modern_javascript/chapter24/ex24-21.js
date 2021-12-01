var funcs = [];
for (var i = 0; i < 3; i++) {
  funcs[i] = (function (id) {
    return function () {
      // console.log("id : ", id);
      return id;
    };
  })(i);
  // console.log(`funcs[${i}] : `, funcs[i]);
}
for (var j = 0; j < funcs.length; j++) {
  console.log(funcs[j]());
}
