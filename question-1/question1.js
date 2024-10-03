const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']

const lowerCaseWords = (array) => {
    return new Promise((resolve, reject) => {
        const itemString = array.map((item) => {
            if (typeof item === 'string') {
                return item.toLowerCase()
            } else {
                return null
            }
        })
        const filteredArray = itemString.filter((item) => item !== null)
        if (filteredArray.length > 0) {
            resolve(filteredArray)
        } else {
            reject("No strings")
        }
    })
}

let promise = lowerCaseWords(mixedArray)

promise.then((result) => {
    console.log(result)
    }, (err) => {
    console.log(err)
})