import { writable } from "svelte/store";

const layout_model = {
  sidebar: false,
  mobile: false
};

export const layout = writable(layout_model);
