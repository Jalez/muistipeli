/** @format */

// Get the score element

let score = 0;

const UnSubscribeScorekeeper = store.subscribe(() => {
	console.log('Scorekeeper.js: ' + store.getState().currentScore);
});

// const updateScore = (score) => {};

// updateScore(score);
