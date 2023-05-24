const problem = '([]'

const validate = (data) => {

    let brackets = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    const heap = []
  
    for (let char of data) {
        if (brackets[char]) {
           heap.push(brackets[char])
        }
        else {
            if (heap.pop() !== char) return false
        }
    } console.log(!heap.length)
    return (!heap.length)
}
validate(problem)