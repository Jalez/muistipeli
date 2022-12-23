/** @format */

const createTimer = () => {
	let milliseconds = 0;
	let minutes = 0;
	let seconds = 0;
	let hours = 0;
	let days = 0;

	const newTimer = setInterval(function () {
		milliseconds += 1;
		if (milliseconds > 9) {
			milliseconds = 0;
			seconds += 1;
		}
		if (seconds > 59) {
			seconds = 0;
			minutes += 1;
		}

		if (minutes > 59) {
			minutes = 0;
			hours += 1;
		}

		if (hours > 23) {
			hours = 0;
			days += 1;
		}

		let displayedHours = hours;
		let displayedMinutes = minutes;
		let displayedSeconds = seconds;
		let displayedMilliseconds = milliseconds;
		// Add a leading zero to the minutes and seconds if they are less than 10
		if (minutes < 10) {
			displayedMinutes = '0' + displayedMinutes;
		}
		if (seconds < 10) {
			displayedSeconds = '0' + displayedSeconds;
		}

		// Update the time display with the minutes and seconds
		timeDisplay.innerHTML = `${displayedHours}:${displayedMinutes}:${displayedSeconds}:${displayedMilliseconds}`;
	}, 100);
	return newTimer;
};
