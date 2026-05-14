import { useState } from "react";
import type { SnipEngine } from "../types/WordsnipType";
import WsInstructions from "../components/wsInstructions";
import WordsnipForm from "../components/worsnipForm";
import RenderEngineResult from "../components/renderEngineResult";

const Home = () => {
  const [snipData, setSnipData] = useState<SnipEngine[]>();

  const onSuccessfulSubmit = (data: SnipEngine[]) => {
    setSnipData(data);
  };

  return (
    <div className="w-full flex-1 p-4 md:p-6 bg-slate-50">
      <WsInstructions />
      <WordsnipForm onSuccessfulSubmit={onSuccessfulSubmit} />
      {snipData ? <RenderEngineResult data={snipData} /> : ""}
    </div>
  );
};

export default Home;
