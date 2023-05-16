console.log('Linear Search')

const data = [1, 3, 5, 44, 2, 4, 66, 55, 42, 11, 21]

// search index of 1
const searchItem = 55
function search(data,searchItem) {
    let position = undefined
    for (let i = 0; i < data.length; i++){
        if (data[i] == searchItem) {
            position = i
            return position
        }
    }
    return 'Not found'
}
const position = search(data, searchItem)

console.log(position)
