const should = require('should')
const average = require('../lib/average')
describe('#average', () => {
  // 測試算出來的平均是不是 2.5
  it('should return the average of array', done => {
    const avg = average([1, 2, 3, 4])
    avg.should.equal(2.5)
    done()
  })

  // 測試有沒有回傳 NaN
  it('should return NaN when array is empty', done => {
    const avg = average([])
    isNaN(avg).should.be.true
    done()
  })
})
