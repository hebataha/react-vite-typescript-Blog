import "./App.scss";
import Posts from "./components/Posts/Posts";
import Helmet from "@mongez/react-helmet";
import PostSidebar from "./components/PostSidebar/PostSidebar";
import { PostListAtom } from "./Atom/post-list-atom";
import PostsListAtom from "./components/PostsListAtom/PostsListAtom";
import { Form } from "@mongez/react-form";
import TextInput from "./components/ContactForm/TextInput";
export default function App() {
  
  // function heba(){
  
  // }
  return (
    <>
      {/* <Helmet
        appendAppName={false}
        title="Home Page"
        description="Short description about my store"
        keywords={["online", "store", "electronics"]}
      />
      <div className="flex container">
        <div className="flex-1"> */}
      {/* <Posts /> */}
      {/* <PostsListAtom />
        </div>
        <PostSidebar />
      </div> */}
      <Form
        onSubmit={(values) => {
          console.log(values.values);
        }}
      >
        <TextInput name="user.firstName" />
        <TextInput name="user.lastName" />
        <button>Submit</button>
      </Form>
    </>
  );
}
