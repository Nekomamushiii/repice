const arr = [12, 44, 35];
let myfunc = (a) => {
  console.log(`too : ${a}`);
};
const arr2 = [...arr, 65, 24];
myfunc(arr2[1]);
