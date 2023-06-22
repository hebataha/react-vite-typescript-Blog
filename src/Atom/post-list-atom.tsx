import React from "react";
import { atom, Atom } from "@mongez/react-atom";

type PostListAtomType = {
    posts:[],
    loading:[],
    error:""
};
export const PostListAtom: Atom <PostListAtomType> = atom({
  key: "Manege_Posts",
  default: {
    posts:[],
    loading:[],
    error:""
  },
});
