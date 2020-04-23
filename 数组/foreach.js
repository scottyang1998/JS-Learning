var arr = [1, 4, 5, 8, 7, 4];
var sum = 0;
arr.forEach(function(key, index, arr) {
    arr[index] = key;
    sum += key;
})
console.log(sum);

arr.forEach(function(value) {
    console.log(value);
});