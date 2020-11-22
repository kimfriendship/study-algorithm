class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  hash(key) {
    let total = 0;
    let primeNum = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const val = key[i].charCodeAt(0) - 96;
      total = (total * primeNum + val) % this.keyMap.length;
    }

    return total;
  }

  set(key, val) {
    const idx = this.hash(key);
    if (!this.keyMap[idx]) this.keyMap[idx] = [[key, val]];
    else this.keyMap[idx].push([key, val]);

    return this;
  }

  get(key) {
    const idx = this.hash(key);
    if (this.keyMap[idx]) {
      for (const pair of this.keyMap[idx]) {
        if (pair[0] === key) return pair[1];
      }
    }

    return undefined;
  }

  keys() {
    let array = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (!this.keyMap[i]) continue;
      for (let j = 0; j < this.keyMap[i].length; j++) {
        if (array.includes(this.keymap[i][j][0])) continue;
        array.push(this.keyMap[i][j][0]);
      }
    }

    return array;
  }

  values() {
    let array = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (!this.keyMap[i]) continue;
      for (let j = 0; j < this.keyMap[i].length; j++) {
        if (array.includes(this.keymap[i][j][1])) continue;
        array.push(this.keyMap[i][j][1]);
      }
    }

    return array;
  }
}

const hashMap = new HashTable(5);
hashMap.set("wooey", 27);
hashMap.set("eddie", 29);
hashMap.set("eun", 22);
hashMap.set("sol", 31);
hashMap.set("claire", 26);
