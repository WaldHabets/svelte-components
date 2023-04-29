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
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20'),
	() => import('./nodes/21')];

			export const server_loads = [];

			export const dictionary = {
	"(default)": [6,[3]],
	"(context)/context": [5,[2]],
	"(default)/(interaction)/buttons": [7,[3]],
	"(default)/(interaction)/checkboxes": [8,[3]],
	"(default)/(interaction)/input-fields": [9,[3]],
	"(default)/(interaction)/radioboxes": [10,[3]],
	"(default)/banners": [11,[3]],
	"(default)/breadcrumbs": [12,[3]],
	"(default)/colour": [13,[3]],
	"(default)/containers": [14,[3]],
	"(default)/controls": [15,[3]],
	"(default)/layout": [16,[3]],
	"(default)/list-box": [17,[3]],
	"(default)/search": [18,[3]],
	"(default)/sidebar-button": [19,[3]],
	"(default)/views": [20,[3]],
	"(nested)/nested": [21,[4]]
};

			export const hooks = {
				handleError: (({ error }) => { console.error(error); return { message: 'Internal Error' }; }),
			};