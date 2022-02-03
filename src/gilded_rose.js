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

  getAllItems() {
    return this.items
  }

  qualityIncrementer() {
    this.quality++
  }

  qualityDecrementer() {
    this.quality--
  }

  isAgedBrie(itemName) {
    return this.items.find(item => item.name === itemName)
  }

  isBackstagePass(itemName) {
    return this.items.find(item => item.name === itemName)
  }

  isSulfurasRagnaros(itemName) {
    return this.items.find(item => item.name === itemName)
  }

  isConjuredCake(itemName) {
    return this.items.find(item => item.name === itemName)
  }

  updateQuality() {
    for (const item of this.items) {
      if (!this.isAgedBrie(agedBrie) && !this.isBackstagePass(backstagePasses) && item.quality > minQuality && !this.isSulfurasRagnaros(sulfurasRagnaros)) { item.quality-- }
      else if (item.quality < maxQuality) { item.quality++ }
      if (this.isBackstagePass(backstagePasses)) {
        if (item.sellIn < backstageBoostTenDays && item.quality < maxQuality) { item.quality++ }
        if (item.sellIn < backstageBoostFiveDays && item.quality < maxQuality) { item.quality++ }
      }
      if (!this.isSulfurasRagnaros(sulfurasRagnaros)) { item.sellIn-- }
      if (item.sellIn < expiryDate || this.isConjuredCake(conjuredManaCake) && !this.isAgedBrie(agedBrie) && !this.isSulfurasRagnaros(sulfurasRagnaros) && item.quality > minQuality) {
        if (!this.isBackstagePass(backstagePasses)) { item.quality-- }
        else item.quality = minQuality
      }
      return this.items
    }
  }
}

module.exports = {
  Item,
  Shop
}

  // isMaxQuality(itemQuality) {
  //   this.items.find(item => item.quality === itemQuality)
  //   return itemQuality < maxQuality
  // }

  // isMinQuality(itemQuality) {
  //   this.items.find(item => item.quality === itemQuality)
  //   return itemQuality > minQuality
  // }

  /*
  brie
  increments by 1 every day until the sellIn date
  increments by 2 every day past the sellIn date

  aged

  normal item
  decrements by 1 every day until the sellIn date
  decrements by 2 every day past the sellIn date

  backstage pass
  increments by 1 up until 10 days prior to concert
  increments by 2 if 10-6 prior to concert
  increments by 3 if 5-1 days prior to concert

  conjured items
  decrements by 2 every day
  */