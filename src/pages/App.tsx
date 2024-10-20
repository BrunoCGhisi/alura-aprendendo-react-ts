import React, {useState} from "react";
import Form from "../components/Form";
import List from "../components/List";
import style from "./App.module.scss"
import Timer from "../components/Timer";
import IHomeWork from "../types/homeWorkVO";

function App() {
  const [homeWorks, setHomeWorks] = useState<IHomeWork[] | []>([]);

  return (
    <div className={style.AppStyle}>
      <Form setHomeWorks={setHomeWorks} />
      <List homeWorks={homeWorks} />
      <Timer />
    </div>
  );
}

export default App;
