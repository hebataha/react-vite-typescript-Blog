import { atom, Atom } from "@mongez/react-atom";

export const currencyAtom: Atom<string> = atom({
  key: "currency",
  default: "EUR",
});