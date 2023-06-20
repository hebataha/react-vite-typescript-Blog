import { atom, Atom } from "@mongez/react-atom";

export const toggleButtons: Atom<string> = atom({
  key: "buttons",
  default: {
    displaySidebar: true,
    displayPost: true,
  }
});