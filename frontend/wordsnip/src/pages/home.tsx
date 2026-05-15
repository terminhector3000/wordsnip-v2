import { useState } from "react";
import type { SnipEngine } from "../types/WordsnipType";
import WsInstructions from "../components/wsInstructions";
import ErrorMessage from "../components/errorMessage";
import WordsnipForm from "../components/wordsnipForm";
import RenderEngineResult from "../components/renderEngineResult";

const Home = () => {
  const [snipData, setSnipData] = useState<SnipEngine[]>();
  const [requestError, setRequestError] = useState("");

  const onSuccessfulSubmit = (data: SnipEngine[], err: string) => {
    setSnipData(data);
    setRequestError(err);
  };

  return (
    <div className="w-full flex-1 p-4 md:p-6 bg-slate-50">
      <WsInstructions />
      {requestError !== "" && <ErrorMessage requestError={requestError} />}
      <WordsnipForm onSuccessfulSubmit={onSuccessfulSubmit} />
      {Array.isArray(snipData) && <RenderEngineResult data={snipData} />}
    </div>
  );
};

export default Home;
