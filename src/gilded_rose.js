const agedBrie = 'Aged Brie'
const backstagePasses = 'Backstage passes to a TAFKAL80ETC concert'
const sulfurasRagnaros = 'Sulfuras, Hand of Ragnaros'
const conjuredManaCake = 'Conjured Mana Cake'
const maxQuality = 50
const minQuality = 0
const expiringDate = 0

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

  isMaxQuality(itemQuality) {
    this.items.find(item => item.quality === itemQuality)
    return itemQuality < maxQuality
  }

  isMinQuality(itemQuality) {
    this.items.find(item => item.quality === itemQuality)
    return itemQuality > minQuality
  }

  updateQuality() {
    for (const item of this.items) {
      if (!this.isAgedBrie(agedBrie) && !this.isBackstagePass(backstagePasses) && item.quality > minQuality && !this.isSulfurasRagnaros(sulfurasRagnaros)) item.quality--
      else if (item.quality < maxQuality) item.quality++
      if (this.isBackstagePass(backstagePasses)) {
        if (item.sellIn < 11 && item.quality < maxQuality) item.quality++
        if (item.sellIn < 6) {
          if (item.quality < maxQuality) item.quality++
        }
      }
      if (!this.isSulfurasRagnaros(sulfurasRagnaros)) item.sellIn--
      if (item.sellIn < expiringDate || this.isConjuredCake(conjuredManaCake)) {
        if (!this.isAgedBrie(agedBrie)) {
          if (!this.isBackstagePass(backstagePasses)) {
            if (item.quality > minQuality && !this.isSulfurasRagnaros(sulfurasRagnaros)) item.quality--
          } else {
            item.quality = minQuality
          }
        } else {
          if (item.quality < maxQuality) item.quality++
        }
      }
      return this.items
    }
  }
}

module.exports = {
  Item,
  Shop
}
