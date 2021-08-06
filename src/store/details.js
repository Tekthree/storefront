/// people.store.js

import {createSlice} from '@reduxjs/tookit';

const peopleSlice = createSlice({
	name: 'people',
	initial:  [{ name: 'bob'}, { name: 'sally'}, {name: 'tom'},
	reducers: {
		add(state, action) {
			state.push({ name: action.payload})
		},
		remove(state, action) {
			return state.filter(person => person.name != action.payload)
		}
	}
});