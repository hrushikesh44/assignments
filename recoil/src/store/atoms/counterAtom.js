import { atom, selector } from "recoil";

export const counterAtom = atom({
  default: 0,
  key: "counter",
});

export const even = selector({
  key: "isEven",
  get: function ({ get }) {
    const value = get(counterAtom);
    const isEven = value % 2 == 0;
    return isEven;
  },
});
