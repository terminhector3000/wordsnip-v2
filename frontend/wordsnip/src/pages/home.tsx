import { useState } from "react";
import { Link } from "react-router-dom";
import type { SnipEngine } from "../types/WordsnipType";
import WordsnipForm from "../components/worsnipForm";
import RenderEngineResult from "../components/renderEngineResult";

const Home = () => {
  const [snipData, setSnipData] = useState<SnipEngine[]>();

  const onSuccessfulSubmit = (data: SnipEngine[]) => {
    setSnipData(data);
  };

  return (
    <div>
      <WordsnipForm onSuccessfulSubmit={onSuccessfulSubmit} />
      {snipData ? <RenderEngineResult data={snipData} /> : "waiting for input"}
    </div>
  );
};

export default Home;
