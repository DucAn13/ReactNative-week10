import { atom, selector } from 'recoil';

export const todoListState = atom({
  key: 'todoListState',
  default: [],
});

export const todoListSelector = selector({
  key: 'todoListSelector',
  get: async () => {
    const response = await fetch('https://66ff425c2b9aac9c997eb603.mockapi.io/Task');
    return response.json();
  },
});
