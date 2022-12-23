/**
 * Creates a button element with the class "memoryCard" and the text content of the button.
 *
 * @format
 * @param {*} textContent The text content of the button.
 * @returns A button element with the class "memoryCard" and the text content of the button.
 */

const activeCards = {};

const createCardButton = (textContent, className) => {
	const button = document.createElement('button');
	button.classList.add(className);
	button.textContent = textContent;

	button.addEventListener('click', function () {
		if (this.classList.contains('fade-out')) {
			return;
		}
		if (activeCards[className]) {
			activeCards[className].classList.remove('highlight');
		}
		this.classList.toggle('highlight');
		activeCards[className] = this;
		checkPick(activeCards);
	});
	return button;
};
