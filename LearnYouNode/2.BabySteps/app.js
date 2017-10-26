array = process.argv
var sum = 0;


for (var index = 2; index < array.length; index++) {
    sum += Number(array[index]);
}

console.log(sum);