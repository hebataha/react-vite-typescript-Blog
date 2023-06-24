import { postAtom } from "../../Atom/ToggleButton";
import Catagories from "../Catagories/Catagories";
import InputSearch from "../InputSearch/InputSearch";
import RecentPosts from "../RecentPosts/RecentPosts";
import Tags from "../Tags/Tags";
import cache from "@mongez/cache";
export default function PostSidebar() {
  const displaySidebar = postAtom.use("displaySidebar");
  if (!displaySidebar) return null;

  return (
    <>
      <div className="flex-2">
        <InputSearch />
        <RecentPosts />
        <Catagories />
        <Tags />
        {/* <Api/> */}
      </div>
    </>
  );
}
