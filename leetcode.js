// LeetCode Logo
// Problem List

// 21. Merge Two Sorted Lists

// You are given the heads of two sorted linked lists list1 and list2.

const list1 = [1, 2, 4]
const list2 = [1, 3, 4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]
let firstNode = 0
let secondNode = 0
const output = []
function ListNode(val, next) {

    const length = 6
    for (let i = 0; i < 6; i++){
        if (val[firstNode] < next[secondNode]) {
            output.push(val[firstNode])
            firstNode++
        }
        if (  next[secondNode] < val[firstNode]) {
            output.push(next[secondNode])
            secondNode++
        }
        if (val[firstNode] == next[secondNode]) {
            output.push(val[firstNode])
            output.push(next[secondNode])
            firstNode++
            secondNode++
        }
    }
return output

}
const outputs = ListNode(list1, list2)
console.log(outputs)
