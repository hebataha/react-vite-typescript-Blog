import { atom, Atom } from "@mongez/react-atom";

type PostListAtomType = {
    posts:any[],
    loading:boolean,
    error:string
};
export const PostListAtom: Atom <PostListAtomType> = atom({
  key: "manege_posts",
  default: {
    posts:[],
    loading:true,
    error:""
  },
});
