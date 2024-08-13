function datingRange(age) {
    let minAge, maxAge;
    
    if (age > 14) {
        minAge = Math.floor(age / 2 + 7);
        maxAge = Math.floor((age - 7) * 2);
    } else {
        minAge = Math.floor(age - 0.1 * age);
        maxAge = Math.floor(age + 0.1 * age);
    }
    
    return `${minAge}-${maxAge}`;
}
