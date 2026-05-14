const ListItem = (row) => {
  return (
    <tr className="transition-colors hover:bg-gray-50 even:bg-[#e7f1ff] odd:bg-[#ffffff]">
      <td className="px-4 py-3 font-bold">{row.row.word}</td>
      <td className="px-4 py-3 font-bold">{row.row.counts.source} </td>
      <td className="px-4 py-3 font-bold">{row.row.counts.target} </td>
      <td className="px-4 py-3 font-bold">
        {String(row.row.match) === "true" ? "Yes" : "No"}{" "}
      </td>
    </tr>
  );
};

export default ListItem;
