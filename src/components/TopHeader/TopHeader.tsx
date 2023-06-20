import React, { useState } from "react";
import { toggleButtons } from "../../Atom/ToggleButton";
import styles from "./style.module.scss";

export default function TopHeader() {
  const toggle = toggleButtons.use();
  const [data, setData] = toggleButtons.useState();
  const [valueObject, setValueObject] = useState(true);

  console.log(data);

  function updateSlidbar() {
    setValueObject((prevState) => !prevState);

    toggleButtons.update({
      ...data.value,
      displaySidebar: valueObject,
      displayPost: true,
    });
  }
  function updatePost() {
    setValueObject((prevState) => !prevState);

    toggleButtons.update({
      ...data.value,
      displaySidebar: true,
      displayPost: valueObject,
    });
  }
  // console.log(data)
  return (
    <>
      <div className={styles.topHeader}>
        <button onClick={updateSlidbar}>Display Slider</button>
        <button onClick={updatePost}> Display Posts</button>
      </div>
    </>
  );
}
