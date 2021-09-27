function collectStrings(obj) {
  let newArr = [];

  for (let key in obj) {
    obj[key] instanceof Object
      ? (newArr = [...newArr, ...collectStrings(obj[key])])
      : typeof obj[key] === 'string' && newArr.push(obj[key]);
  }

  return newArr;
}
