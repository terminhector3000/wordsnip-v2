import type { SnipEngine } from "../types/wordsnipType";

const ListItem = ({ word, counts, match }: SnipEngine) => {
  return (
    <tr className="transition-colors hover:bg-gray-50 even:bg-[#e7f1ff] odd:bg-[#ffffff]">
      <td className="px-4 py-3 font-bold">{word}</td>
      <td className="px-4 py-3 font-bold">{counts.source} </td>
      <td className="px-4 py-3 font-bold">{counts.target} </td>
      <td className="px-4 py-3 font-bold">
        {String(match) === "true" ? "Yes" : "No"}{" "}
      </td>
    </tr>
  );
};

export default ListItem;
