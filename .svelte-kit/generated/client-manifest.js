export { matchers } from './client-matchers.js';

			export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11')];

			export const server_loads = [];

			export const dictionary = {
	"(default)": [6,[3]],
	"(context)/context": [5,[2]],
	"(default)/containers": [7,[3]],
	"(default)/controls": [8,[3]],
	"(default)/list": [9,[3]],
	"(default)/views": [10,[3]],
	"(nested)/nested": [11,[4]]
};

			export const hooks = {
				handleError: (({ error }) => { console.error(error); return { message: 'Internal Error' }; }),
			};