function dropCap(str) {
    return str
        .split(' ')
        .map(word => word.length > 2 ? word[0].toUpperCase() + word.slice(1).toLowerCase() : word)
        .join(' ');
}
