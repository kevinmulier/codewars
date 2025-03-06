function findNextPower(val, pow_) {
    let base = Math.ceil(Math.pow(val + 1, 1 / pow_));
    return Math.pow(base, pow_);
}