const { Shop, Item } = require('../src/gilded_rose.js')
describe('Gilded Rose', function () {

  it('new instance of shop should return an empty array', function () {
    const gildedRose = new Shop()
    const expected = []
    const result = gildedRose.getAllItems()
    expect(result).toEqual(expected)
  })

  it('should add foo to the items array', function () {
    const gildedRose = new Shop([new Item('foo', 0, 0)])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toEqual('foo')
  })

  it('should add milk to the items array and decrease sellIn and quality values by 1', function () {
    const gildedRose = new Shop([new Item('milk', 7, 7)])
    const items = gildedRose.updateQuality(1)
    expect(items[0].sellIn).toEqual(6)
    expect(items[0].quality).toEqual(6)
  })

  it('should add milk to the items array and decrease sellIn and quality values by 4', function () {
    const gildedRose = new Shop([new Item('milk', 7, 7)])
    const items = gildedRose.updateQuality(4)
    expect(items[0].sellIn).toEqual(3)
    expect(items[0].quality).toEqual(3)
  })

})
