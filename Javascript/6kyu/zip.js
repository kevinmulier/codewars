function travel(r, zipcode) {
    if (!zipcode) return ":/";

    const addresses = r.split(',');
    const streets = [];
    const houseNumbers = [];

    addresses.forEach(address => {
        if (address.endsWith(zipcode)) {
            const parts = address.split(' ');
            const houseNumber = parts[0];
            const streetAndTown = parts.slice(1, -2).join(' ');
            streets.push(streetAndTown);
            houseNumbers.push(houseNumber);
        }
    });

    if (streets.length === 0) return `${zipcode}:/`;

    return `${zipcode}:${streets.join(',')}/${houseNumbers.join(',')}`;
}
