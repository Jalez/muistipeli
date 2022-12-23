/** @format */

// constants
const ADD_SCORE = 'ADD_SCORE';
const REMOVE_SCORE = 'REMOVE_SCORE';
const SET_TERM_COUNT = 'SET_TERM_COUNT';
const DECREMENT_TERM_COUNT = 'DECREMENT_TERM_COUNT';
const NEW_BEST_SCORE = 'NEW_BEST_SCORE';

// These are action creators
// They are functions that return an action
function add_score() {
	return {
		type: ADD_SCORE,
	};
}

function remove_score() {
	return {
		type: REMOVE_SCORE,
	};
}

function decrement_term_count() {
	return {
		type: DECREMENT_TERM_COUNT,
	};
}

function set_term_count(count) {
	return {
		type: SET_TERM_COUNT,
		payload: count,
	};
}

function new_best_score() {
	return {
		type: NEW_BEST_SCORE,
	};
}

// This is a reducer
// It is a function that takes the current state and an action
function reducer_currentScore(state = 0, action) {
	switch (action.type) {
		case 'ADD_SCORE':
			return state + 50;
		case 'REMOVE_SCORE':
			return state - 10;
		default:
			return state;
	}
}

function reducer_remainingTerms(state = 0, action) {
	switch (action.type) {
		case 'SET_TERM_COUNT':
			return action.payload;
		case 'DECREMENT_TERM_COUNT':
			return state - 1;
		default:
			return state;
	}
}

function reducer_sessionsBest(state = 0, action) {
	switch (action.type) {
		case 'NEW_BEST':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
		default:
			return state;
	}
}

// This is the root reducer
// It combines all the reducers into one
let rootReducer = Redux.combineReducers({
	currentScore: reducer_currentScore,
	remainingTerms: reducer_remainingTerms,
	sessionsBest: reducer_sessionsBest,
});

// This is the store
// It holds the state tree
const scoreStore = Redux.createStore(rootReducer);

const scoreElement = document.getElementById('score');
const sessionsBestElement = document.getElementById('sessionsBest');
const remainingTermsElement = document.getElementById('remainingTerms');

const UnSubscribe = scoreStore.subscribe(() => {
	console.log(scoreStore.getState());
	// If scoreElements innerHTML is not equal to the current score, update it
	if (scoreElement.textContent !== scoreStore.getState().currentScore) {
		scoreElement.textContent = scoreStore.getState().currentScore;
	}
	if (sessionsBestElement.textContent !== scoreStore.getState().sessionsBest) {
		sessionsBestElement.textContent = scoreStore.getState().sessionsBest;
	}
	if (
		remainingTermsElement.textContent !== scoreStore.getState().remainingTerms
	) {
		remainingTermsElement.textContent = scoreStore.getState().remainingTerms;
	}
});

//dispatching actions
// scoreStore.dispatch(add_score());
