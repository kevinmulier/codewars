function sabb(s, val, happiness) {
    let letterScore = 0;
    for (let char of s) {
        if ("sabbatical".includes(char)) letterScore++;
    }
    return (letterScore + val + happiness) > 22 ? 'Sabbatical! Boom!' : 'Back to your desk, boy.';
}
