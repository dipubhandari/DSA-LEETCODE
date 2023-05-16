console.log('SELECTION SORT')

const data = [20, 12, 53, 3]
for (let i = 0; i < data.length; i++) {
    let smallest = i
    for (let j = i + 1; j < data.length; j++) {
        if (data[smallest] > data[j]) {
           smallest = j
        }
    }
    let temp = data[i]
    data[i] = data[smallest]
    data[smallest] = temp

}

console.log(data)