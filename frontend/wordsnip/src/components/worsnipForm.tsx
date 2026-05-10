import { useState } from "react";
import { z } from "zod";
import { wordsnipSchema } from "../schemas/mainFormSchema";
import { createSnip } from "../api/wsengine";

const WordsnipForm = ({ onSuccessfulSubmit }) => {
  const [source, setSource] = useState("");
  const [target, setTarget] = useState("");
  const [honeyPot, setHoneyPot] = useState("");
  const [inputError, setInputError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (honeyPot.trim() !== "") {
      setInputError("Invalid data");
      return;
    }

    const result = wordsnipSchema.safeParse({
      source,
      target,
      honeypot: honeyPot,
    });

    if (!result.success) {
      const tree = z.treeifyError(result.error);
      if (tree.properties?.source) {
        setInputError(String(tree.properties?.source?.errors));
        return inputError;
      }
    }

    try {
      const res = await createSnip(result.data);
      onSuccessfulSubmit(res.data);
      setSource("");
      setTarget("");
    } catch (err) {
      setInputError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form id="main-form" onSubmit={handleSubmit}>
        {inputError && <p>{inputError}</p>}
        <div>
          <label htmlFor="sourceArea">Source</label>
          <textarea
            id="sourceArea"
            name="sourceArea"
            value={source}
            onChange={(e) => setSource(e.target.value)}
            minLength={10}
            maxLength={3000}
            required
          />
        </div>
        <div className="text-area-group">
          <label htmlFor="targetArea">Target</label>
          <textarea
            id="targetArea"
            name="targetArea"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            minLength={10}
            maxLength={3000}
            rows={4}
            cols={30}
            required
          />
        </div>
        <div style={{ position: "absolute", left: -9999 }} aria-hidden="true">
          <label htmlFor="referer">Leave this field empty</label>
          <input
            tabIndex={-1}
            type="text"
            name="referer"
            id="referer"
            value={honeyPot}
            onChange={(e) => setHoneyPot(e.target.value)}
          />
        </div>
        <div>
          <button disabled={loading}>{loading ? "Sending ..." : "Send"}</button>
        </div>
      </form>
    </div>
  );
};

export default WordsnipForm;
