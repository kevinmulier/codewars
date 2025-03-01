function whoseBicycle(diary1, diary2, diary3) {
    const ageTable = {
        firstSonAge: 14,
        secondSonAge: 9,
        thirdSonAge: 8
    };

    const diaries = [diary1, diary2, diary3];
    const scores = diaries.map(diary => Object.values(diary).reduce((a, b) => a + b, 0));

    let maxScore = Math.max(...scores);
    let winnerIndex = scores.indexOf(maxScore);

    if (scores.filter(score => score === maxScore).length > 1) {
        const tiedIndices = scores
            .map((score, index) => (score === maxScore ? index : null))
            .filter(index => index !== null);

        winnerIndex = tiedIndices.reduce((youngest, current) => 
            ageTable[Object.keys(ageTable)[current]] < ageTable[Object.keys(ageTable)[youngest]]
                ? current
                : youngest
        );
    }

    const sonNames = ['first', 'second', 'third'];
    return `I need to buy a bicycle for my ${sonNames[winnerIndex]} son.`;
}