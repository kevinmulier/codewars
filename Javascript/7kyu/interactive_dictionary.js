class Dictionary {
  constructor() {
    this.dictionary = {};
  }

  newEntry(key, value) {
    this.dictionary[key] = value;
  }

  look(key) {
    return key in this.dictionary ? this.dictionary[key] : `Can't find entry for ${key}`;
  }
}
