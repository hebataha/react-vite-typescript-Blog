import "./App.css";
import SinglePost from "./components/SinglePost/SinglePost";
import InputSearch from "./components/InputSearch/InputSearch";
import RecentPosts from "./components/RecentPosts/RecentPosts";
import Catagories from "./components/Catagories/Catagories";
import Tags from "./components/Tags/Tags";
import Posts from "./components/Posts/Posts";

export default function App() {
  return (
    <>
      <div className="flex container">
        <div className="flex-1">
          <Posts />
        </div>
        <div className="flex-2">
          <InputSearch />
          <RecentPosts />
          <Catagories />
          <Tags />
        </div>
      </div>
    </>
  );
}
