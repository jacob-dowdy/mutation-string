function mutation(arr) {
  var firstArr = arr[1].toLowerCase();
  var secondArr = arr[0].toLowerCase();
  for (i = 0; i < firstArr.length;i++) {
    if (secondArr.indexOf(firstArr[i]) < 0)
      return false;
  }
  return true;
}

mutation(["hello", "hey"]);
