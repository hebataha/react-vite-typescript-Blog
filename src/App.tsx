import "./App.css";
import RecentPosts from "./components/RecentPosts/RecentPosts";
import Catagories from "./components/Catagories/Catagories";
import Tags from "./components/Tags/Tags";
import Posts from "./components/Posts/Posts";
import Helmet from "@mongez/react-helmet";
import InputSearch from "./components/InputSearch/InputSearch";
// import Api from "./components/Api";

export default function App() {
  return (
    <>
      <Helmet
        appendAppName={false}
        title="Home Page"
        description="Short description about my store"
        keywords={["online", "store", "electronics"]}
      />
      <div className="flex container">
        <div className="flex-1">
          <Posts />
        </div>
        <div className="flex-2">
          <InputSearch />
          <RecentPosts />
          <Catagories />
          <Tags />
          {/* <Api/> */}
        </div>
      </div>
    </>
  );
}
