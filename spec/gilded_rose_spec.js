const { Shop, Item, RegularItem, AgedBrie } = require('../src/gilded_rose.js')
describe('Gilded Rose', function () {

  it('new instance of shop should return an empty array', function () {
    const gildedRose = new Shop()
    const expected = []
    const result = gildedRose.getAllItems()
    expect(result).toEqual(expected)
  })

  it('should add foo to the items array', function () {
    const gildedRose = new Shop([new Item('foo', 0, 0)])
    const items = gildedRose.getAllItems()
    expect(items[0].name).toEqual('foo')
  })

  it('should add milk to the items array and decrease sellIn and quality values by 1', function () {
    const gildedRose = new Shop([new Item('milk', 7, 7)])
    gildedRose.updateQuality()
    const items = gildedRose.getAllItems()
    expect(items[0].sellIn).toEqual(6)
    expect(items[0].quality).toEqual(6)
  })

  it('quality should decrease twice as fast when past the sellIn date', function () {
    const gildedRose = new Shop([new Item('milk', 0, 50)])
    gildedRose.updateQuality()
    const items = gildedRose.getAllItems()
    expect(items[0].quality).toEqual(48)
  })

  it('quality should never be a negative number', function () {
    const gildedRose = new Shop([new Item('milk', 0, 0)])
    gildedRose.updateQuality()
    const items = gildedRose.getAllItems()
    expect(items[0].sellIn).toEqual(-1)
    expect(items[0].quality).toEqual(0)
  })

  it('aged brie should increase in quality the older it gets', function () {
    const gildedRose = new Shop([new Item('Aged Brie', 5, 10)])
    const items = gildedRose.updateQuality()
    expect(items[0].sellIn).toEqual(4)
    expect(items[0].quality).toEqual(11)
  })

  it('the quality of an item is never greater than 50', function () {
    const gildedRose = new Shop([new Item('Aged Brie', 5, 50)])
    gildedRose.updateQuality()
    const items = gildedRose.getAllItems()
    expect(items[0].sellIn).toEqual(4)
    expect(items[0].quality).toEqual(50)
  })

  it('the quality of sulfuras never decreases', function () {
    const gildedRose = new Shop([new Item('Sulfuras, Hand of Ragnaros', 5, 80)])
    const items = gildedRose.updateQuality()
    expect(items[0].sellIn).toEqual(5)
    expect(items[0].quality).toEqual(80)
  })

  it('the quality of backstage passes increases by 2 if event is in 6-10 days', function () {
    const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 30)])
    const items = gildedRose.updateQuality()
    expect(items[0].sellIn).toEqual(9)
    expect(items[0].quality).toEqual(32)
  })

  it('the quality of backstage passes increases by 2 if event is in 0-5 days', function () {
    const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 4, 30)])
    const items = gildedRose.updateQuality()
    expect(items[0].sellIn).toEqual(3)
    expect(items[0].quality).toEqual(33)
  })

  it('the quality of backstage passes drops to 0 after the concert', function () {
    const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20)])
    const items = gildedRose.updateQuality()
    expect(items[0].sellIn).toEqual(-1)
    expect(items[0].quality).toEqual(0)
  })

  it('the quality of conjured items degrade twice as fast as normal items', function () {
    const gildedRose = new Shop([new Item('Conjured Mana Cake', 10, 20)])
    const items = gildedRose.updateQuality()
    expect(items[0].sellIn).toEqual(9)
    expect(items[0].quality).toEqual(18)
  })

})
