const whatTimeIsIt = (a) => `${String(((720 * (a / 360)) / 60) | 0 || 12).padStart(2, "0")}:${String((720 * (a / 360)) % 60 | 0).padStart(2, "0")}`;
