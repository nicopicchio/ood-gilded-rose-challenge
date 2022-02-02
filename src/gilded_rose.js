const agedBrie = 'Aged Brie'
const backstagePasses = 'Backstage passes to a TAFKAL80ETC concert'
const sulfurasRagnaros = 'Sulfuras, Hand of Ragnaros'
const conjuredManaCake = 'Conjured Mana Cake'
const maxQuality = 50
const minQuality = 0

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

  updateQuality() {
    for (const item of this.items) {
      if (item.name !== agedBrie && item.name !== backstagePasses && item.quality > minQuality && item.name !== sulfurasRagnaros) {
        item.quality--  
      } else {
        if (item.quality < maxQuality) {
          item.quality++
          if (item.name === backstagePasses) {
            if (item.sellIn < 11) {
              if (item.quality < maxQuality) {
                item.quality++
              }
            }
            if (item.sellIn < 6) {
              if (item.quality < maxQuality) {
                item.quality++
              }
            }
          }
        }
      }
      if (item.name !== sulfurasRagnaros) item.sellIn--
      if (item.sellIn < 0 || item.name === conjuredManaCake) {
        if (item.name !== agedBrie) {
          if (item.name !== backstagePasses) {
            if (item.quality > minQuality) {
              if (item.name !== sulfurasRagnaros) {
                item.quality--
              }
            }
          } else {
            item.quality = minQuality
          }
        } else {
          if (item.quality < maxQuality) {
            item.quality++
          }
        }
      }
    }
    return this.items
  }
}
module.exports = {
  Item,
  Shop
}
