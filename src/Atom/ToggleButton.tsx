import { atom, Atom } from "@mongez/react-atom";

type PostAtomType = {
  displaySidebar: boolean;
  displayPost:boolean;
}
export const postAtom: Atom<PostAtomType> = atom({
  key: "buttons",
  default: {
    displaySidebar: true,
    displayPost: true,
  }
});
