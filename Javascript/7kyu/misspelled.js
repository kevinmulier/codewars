function mispelled(word1, word2) {
    if (word1 === word2) return true;
    if (Math.abs(word1.length - word2.length) > 1) return false;

    let diff = 0;
    let [shorter, longer] = word1.length < word2.length ? [word1, word2] : [word2, word1];

    if (longer.length === shorter.length) {
        for (let i = 0; i < shorter.length; i++) {
            if (shorter[i] !== longer[i]) diff++;
            if (diff > 1) return false;
        }
    } else {
        if (longer.startsWith(shorter) || longer.endsWith(shorter)) return true;
        for (let i = 0, j = 0; i < shorter.length; i++, j++) {
            if (shorter[i] !== longer[j]) {
                diff++;
                i--;
                if (diff > 1) return false;
            }
        }
    }

    return true;
}