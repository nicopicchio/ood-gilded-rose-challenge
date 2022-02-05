const agedBrie = 'Aged Brie'
const backstagePasses = 'Backstage passes to a TAFKAL80ETC concert'
const sulfurasRagnaros = 'Sulfuras, Hand of Ragnaros'
const conjuredManaCake = 'Conjured Mana Cake'
const maxQuality = 50
const minQuality = 0
const expiryDate = 0
const backstageBoostFiveDays = 6
const backstageBoostTenDays = 11

class Item {
  constructor (name, sellIn, quality) {
    this.name = name
    this.sellIn = sellIn
    this.quality = quality
  }
}

class Shop {
  constructor (items = []) {
    this.items = items
  }

  updateQuality() {
    for (const item of this.items) {
      if (!this.findItem(agedBrie) && !this.findItem(backstagePasses) && item.quality > minQuality && !this.findItem(sulfurasRagnaros)) this.decrementQuality(item)
      else if (item.quality < maxQuality) this.incrementQuality(item)
      if (this.findItem(backstagePasses)) {
        if (item.sellIn < backstageBoostTenDays && item.quality < maxQuality) this.incrementQuality(item)
        if (item.sellIn < backstageBoostFiveDays && item.quality < maxQuality) this.incrementQuality(item)
      }
      if (!this.findItem(sulfurasRagnaros)) this.dayDecrement(item)
      if (item.sellIn < expiryDate || this.findItem(conjuredManaCake) && !this.findItem(agedBrie) && !this.findItem(sulfurasRagnaros) && item.quality > minQuality) {
        if (!this.findItem(backstagePasses)) this.decrementQuality(item)
        else item.quality = minQuality
      }
      return this.items
    }
  }

  findItem(itemName) {
    return this.items.find(item => item.name === itemName)
  }

  getAllItems() {
    return this.items
  }

  dayDecrement(item) {
    item.sellIn--
  }

  incrementQuality(item) {
    item.quality++
  }

  decrementQuality(item) {
    item.quality--
  }
}

module.exports = {
  Item,
  Shop
}
