
const cloneArray = require('./cloneArray')

test('should return the exact array', ()=>{
    expect(cloneArray([1,2,3,4])).toEqual([1,2,3,4])
    expect(cloneArray([1,2,3,4])).not.toBe([1,2,3,4])

})
