const should = require('should')
const max = require('../lib/max')

describe('#max', () => {
  // 測試有沒有取得正確的最大值
  it('should return the maximum in array', done => {
    const maximum = max([1, 10, 100, 1000])
    maximum.should.equal(1000)
    done()
  })

  // 測試有沒有回傳 undefined
  it('should return undefined when array is empty', done => {
    const maximum = max([])
    ;(maximum === undefined).should.be.true
    done()
  })
})
