function selectionSort(arr) {
    let i = 0
    let j = 1
    while (i < arr.length) {
        let min = arr[i]
        let indx = i
        let indx2 = i
        while (j < arr.length) {
            if (arr[j] < min) {
                min = arr[j]
                indx2 = j
                j++
            }
            else
                j++
        }
        if (indx !== indx2) {
            let temp = arr[indx]
            arr[indx] = arr[indx2]
            arr[indx2] = temp
        }
        i++
        j = i + 1
    }
    return arr
}

module.exports = selectionSort;