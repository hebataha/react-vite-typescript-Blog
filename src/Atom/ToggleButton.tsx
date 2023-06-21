import { atom, Atom } from "@mongez/react-atom";

export const toggleButtons: Atom<any> = atom({
  key: "buttons",
  default: {
    displaySidebar: true,
    displayPost: true,
  }
});
