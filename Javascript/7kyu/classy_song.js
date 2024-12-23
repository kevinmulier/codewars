class Song {
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
    this.listeners = new Set();
  }

  howMany(people) {
    const initialSize = this.listeners.size;
    people.forEach((person) => this.listeners.add(person.toLowerCase()));
    return this.listeners.size - initialSize;
  }
}
