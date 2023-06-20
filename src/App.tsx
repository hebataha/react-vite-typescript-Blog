import "./App.scss";
import RecentPosts from "./components/RecentPosts/RecentPosts";
import Catagories from "./components/Catagories/Catagories";
import Tags from "./components/Tags/Tags";
import Posts from "./components/Posts/Posts";
import Helmet from "@mongez/react-helmet";
import InputSearch from "./components/InputSearch/InputSearch";
import { toggleButtons } from "./Atom/ToggleButton";
// import Api from "./components/Api";

export default function App() {
  const toggle = toggleButtons.use();

  console.log(toggle);

  // console.log(toggleB.displaySidebar.update("heba"))
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
        {/* <h1>{toggleSlide}</h1> */}
        {toggle.displaySidebar && (
          <div className="flex-2">
            <InputSearch />
            <RecentPosts />
            <Catagories />
            <Tags />
            {/* <Api/> */}
          </div>
        )}
      </div>
    </>
  );
}
