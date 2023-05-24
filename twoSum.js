
// find first two number from array that sum is 100

const data = [1, 40, 51, 89, 10,8,-39]
const total = 50

const findSum = (data, total) => {
    const output = []
    for (let i = 0; i < data.length; i++) {
        for (let j = i + 1; j < data.length; j++) {
            if (data[i] + data[j] == total) {
                output.push([data[i], data[j]])
            }
        }
    }
    return output
}
const output = findSum(data, total);


console.log(output)
