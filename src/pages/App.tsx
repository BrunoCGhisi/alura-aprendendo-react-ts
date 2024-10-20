import React, { useState } from "react";
import Form from "../components/Form";
import List from "../components/List";
import style from "./App.module.scss";
import Timer from "../components/Timer";
import IHomeWork from "../types/homeWorkVO";

function App() {
  const [homeWorks, setHomeWorks] = useState<IHomeWork[] | []>([]);
  const [selected, setSelected] = useState<IHomeWork>();

  function selectHomeWork(selectedHomeWork: IHomeWork) {
    setSelected(selectedHomeWork);
    setHomeWorks((oldHomeWorks) =>
      oldHomeWorks.map((homeWork) => ({
        ...homeWork,
        selected: homeWork.id === selectedHomeWork.id ? true : false,
      }))
    );
  }
  return (
    <div className={style.AppStyle}>
      <Form setHomeWorks={setHomeWorks} />
      <List homeWorks={homeWorks} selectHomeWork={selectHomeWork} />
      <Timer selected={selected} />
    </div>
  );
}

export default App;
