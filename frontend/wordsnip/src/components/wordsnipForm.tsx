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
        onSuccessfulSubmit(null, String(tree.properties?.source?.errors));
        return inputError;
      }
    }

    const res = await createSnip(result.data);

    if (Array.isArray(res.data)) {
      onSuccessfulSubmit(res.data, "");
      requestAnimationFrame(() => {
        document.getElementById("wordsnip-results")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    } else {
      onSuccessfulSubmit(null, res.error.message);
      setInputError(res.error.message);
    }

    setLoading(false);
  };

  return (
    <div className="max-w-8xl mx-auto p-6 bg-white">
      <form
        id="main-form"
        onSubmit={handleSubmit}
        className="max-w-8xl mx-auto p-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="sourceArea"
              className="block mb-2.5 text-sm font-medium text-heading"
            >
              Your Text
            </label>
            <textarea
              id="sourceArea"
              name="sourceArea"
              value={source}
              placeholder="Paste text you want to compare here ..."
              onChange={(e) => setSource(e.target.value)}
              minLength={10}
              maxLength={3000}
              required
              className="
            w-full
            min-h-100
            border
            rounded
            border-gray-300
            bg-slate-50
            p-4
            text-gray-900
            shadow-sm
            outline-none
            resize-none
            transition
            focus:border-blue-500
            focus:ring-4
            focus:ring-blue-100
          "
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="targetArea"
              className="block mb-2.5 text-sm font-medium text-heading"
            >
              Reference Text
            </label>
            <textarea
              id="targetArea"
              name="targetArea"
              value={target}
              placeholder="Paste your reference text here ..."
              onChange={(e) => setTarget(e.target.value)}
              minLength={10}
              maxLength={3000}
              className="
            w-full
            min-h-100
            border
            rounded
            border-gray-300
            bg-slate-50
            p-4
            text-gray-900
            shadow-sm
            outline-none
            resize-none
            transition
            focus:border-blue-500
            focus:ring-4
            focus:ring-blue-100
          "
            />
          </div>
          <div style={{ position: "absolute", left: -9999 }} aria-hidden="true">
            <label
              htmlFor="referer"
              className="text-sm font-medium text-gray-700"
            >
              Leave this field empty
            </label>
            <input
              tabIndex={-1}
              type="text"
              name="referer"
              id="referer"
              value={honeyPot}
              onChange={(e) => setHoneyPot(e.target.value)}
            />
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <button
            disabled={loading}
            className="
        rounded-lg
        bg-blue-600
        px-6
        py-3
        text-white
        hover:bg-blue-700
      "
          >
            {loading ? "Sending ..." : "Send"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default WordsnipForm;
