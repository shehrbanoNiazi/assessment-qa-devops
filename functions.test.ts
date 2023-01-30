const {shuffleArray} = require('./utils')

test('shuffleArray should', () => {
    let array = [1,2,3,4,5]
    let shuffledArray = shuffleArray(array)
    expect(Array.isArray(shuffledArray)).toBe(true)
})
 
test( 'arrayLength should', () =>{
    let array = [1,2,3,4,5]
    let shuffledArray = shuffleArray(array)
 expect(shuffledArray.length).toBe(array.length)
})
