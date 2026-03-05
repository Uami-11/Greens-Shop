// Giving api items that don't have cost and only rarity a random price between a range according to the DMG

export const PRICE_RANGES = {
  "Common": {min: 50, max: 100},
  "Unommon": {min: 101, max: 500},
  "Rare": {min: 501, max: 5000},
  "Very Rare": {min: 5001, max: 50000},
  "Legendary": {min: 50001, max: 350000},
}

// the prices are random but for the user the price needs to stay the same, so we seed the price

function seededRandom(seed){
  let hash = 0;
  for (let i = 0; i < seed.length; i++){
    hash = (Math.imul(31, hash) + seed.charCodeAt(i)) | 0;
  }
  
  hash = Math.abs(hash) + 1;
  hash = (Math.imul(1664525, hash)) + 1013904223 | 0;

  return (hash >>> 0) / 4294967295;
}

export function generatePrice(index, rarity, category){
  const range = PRICE_RANGES[rarity] || PRICE_RANGES["Common"];

  const rand = seededRandom(index);
  let gp = Math.floor(rand * (range.max - range.min + 1)) + range.min;

  if (category == "Potion")
    gp = Math.max(1, Math.max(1, Math.floor(gp/2)));

  return gp;
}

export function formatPrice(gp){
  if (gp >= 1){
    const goldPart = Math.floor(gp);
    const remainder = Math.round((gp - goldPart) * 100);
    const silverPart = Math.floor(remainder/10);
    const copperPart = remainder % 10;

    const parts = [];

    if (goldPart)
      parts.push(`${goldPart.toLocaleString()} gp`);

    if (silverPart)
      parts.push(`${silverPart} sp`);

    if (copperPart)
      parts.push(`${copperPart} cp`);

    return parts.join(' ') || '0 cp';
  }
}

export function costToGP(cost){
  if (!cost || !cost.quantity) return null;

  if (cost.unit == "gp") return cost.quantity;
  if (cost.unit == "sp") return cost.quantity / 10;
  if (cost.unit == "cp") return cost.quantity / 100;

  return cost.quantity;
}

