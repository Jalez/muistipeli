/** @format */

let foundPairs = 0;
function checkPick(activeCards) {
	const { term, definition } = activeCards;
	if (term) {
		term.classList.remove('wrong');
	}
	if (definition) {
		definition.classList.remove('wrong');
	}
	if (term && definition) {
		if (definition.textContent === termsAndDefinitions[term.textContent]) {
			term.classList = term.classList + ' fade-out solved';
			definition.classList = definition.classList + ' fade-out solved';

			foundPairs++;
			// decrement the remaining terms
			scoreStore.dispatch(decrement_term_count());
			// increment the score
			scoreStore.dispatch(add_score());

			if (foundPairs == Object.keys(termsAndDefinitions).length - 1) {
				clearInterval(timer);
				setTimeout(function () {
					myModal.show();
				}, 500);
			}
			setTimeout(function () {
				// console.log('term', term);
				term && term.classList.remove('fade-out');
				definition && definition.classList.remove('fade-out');
			}, 500);
		} else {
			scoreStore.dispatch(remove_score());
			term.classList.add('wrong');
			definition.classList.add('wrong');
			// Remove the wrong class after 0.5 seconds
			setTimeout(function () {
				// console.log('term', term);
				term && term.classList.remove('wrong');
				definition && definition.classList.remove('wrong');
			}, 500);
		}
		emptyCardsObject(activeCards);
	}
}

const emptyCardsObject = (activeCards) => {
	activeCards.term.classList.remove('highlight');
	activeCards.definition.classList.remove('highlight');
	activeCards.term = null;
	activeCards.definition = null;
};
