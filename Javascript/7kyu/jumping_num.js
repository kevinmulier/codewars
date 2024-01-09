function jumpingNumber(n) {
	let splittedN = n.toString().split("");
	let currentNum = splittedN[0];
	for (let i = 1; i < splittedN.length; i++) {
		if (currentNum - splittedN[i] != 1 && currentNum - splittedN[i] != -1) {
			return "Not!!";
		}
		currentNum = splittedN[i];
	}
	return "Jumping!!";
}
