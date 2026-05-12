import { useState } from "react";
import { Link } from "react-router-dom";
import type { SnipEngine } from "../types/WordsnipType";
import WordSnipLogo from "../components/wsLogo";
import WordsnipForm from "../components/worsnipForm";
import RenderEngineResult from "../components/renderEngineResult";

const Home = () => {
  const [snipData, setSnipData] = useState<SnipEngine[]>();

  const onSuccessfulSubmit = (data: SnipEngine[]) => {
    setSnipData(data);
  };

  return (
    <div>
      <div className="bg-slate-50">
        <div className="w-40 md:w-48 lg:w-56 py-8">
          <WordSnipLogo className="h-10 md:h-12 w-auto transition-transform duration-200 hover:scale-105 dark:invert" />
        </div>
      </div>
      <div>
        <Link to="/contact">Contact</Link>
        <WordsnipForm onSuccessfulSubmit={onSuccessfulSubmit} />
        {snipData ? (
          <RenderEngineResult data={snipData} />
        ) : (
          "waiting for input"
        )}
      </div>
    </div>
  );
};

export default Home;
