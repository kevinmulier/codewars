function iTri(distance) {
    const totalDistance = 140.6;

    if (distance === 0) {
        return 'Starting Line... Good Luck!';
    } else if (distance < 2.4) {
        return { Swim: `${(totalDistance - distance).toFixed(2)} to go!` };
    } else if (distance < 114.4) {
        return { Bike: `${(totalDistance - distance).toFixed(2)} to go!` };
    } else if (distance < 130.6) {
        return { Run: `${(totalDistance - distance).toFixed(2)} to go!` };
    } else if (distance <= 140.6) {
        return { Run: 'Nearly there!' };
    } else {
        return "You're done! Stop running!";
    }
}
