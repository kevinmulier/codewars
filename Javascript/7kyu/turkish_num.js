function getTurkishNumber(n) {
    const units = ["sıfır", "bir", "iki", "üç", "dört", "beş", "altı", "yedi", "sekiz", "dokuz"];
    const tens = ["", "on", "yirmi", "otuz", "kırk", "elli", "altmış", "yetmiş", "seksen", "doksan"];
    return n < 10 ? units[n] : tens[Math.floor(n / 10)] + (n % 10 ? " " + units[n % 10] : "");
}