import { useState, useMemo } from "react";
import { ArrowUp, ArrowDown, ArrowUpDown } from "lucide-react";
import ListItem from "./listItem";

const RenderEngineResult = ({ data }) => {
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "asc",
  });

  const sortedData = useMemo(() => {
    const sortable = [...data];
    if (sortConfig.key) {
      sortable.sort((a, b) => {
        if (sortConfig.key === "source" || sortConfig.key === "target") {
          if (a.counts[sortConfig.key] < b.counts[sortConfig.key]) {
            return sortConfig.direction === "asc" ? -1 : 1;
          }
          if (a.counts[sortConfig.key] > b.counts[sortConfig.key]) {
            return sortConfig.direction === "asc" ? 1 : -1;
          }
        } else {
          if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === "asc" ? -1 : 1;
          }
          if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === "asc" ? 1 : -1;
          }
        }

        return 0;
      });
    }
    return sortable;
  }, [sortConfig, data]);

  const handleSort = (key: string) => {
    setSortConfig((prev) => {
      const direction =
        prev.key === key && prev.direction === "asc" ? "desc" : "asc";
      return { key, direction };
    });
  };

  const getArrow = (key: string) => {
    if (sortConfig.key !== key) {
      return <ArrowUpDown className="h-4 w-4 text-[#fff]-400" />;
    }
    return sortConfig.direction === "asc" ? (
      <ArrowUp className="h-4 w-4 text-[#333]-700" />
    ) : (
      <ArrowDown className="h-4 w-4 text-[#333]-700" />
    );
  };
  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6">
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        {data.length > 0 ? (
          <table className="min-w-175 w-full border-collapse text-sm">
            <thead className="bg-[#009879] text-[#ffffff]">
              <tr>
                <th className="px-4 py-3 text-left font-bold ">Word</th>
                <th
                  onClick={() => handleSort("source")}
                  className="px-4 py-3 text-left font-bold cursor-pointer hover:bg-[#57CFAD] hover:text-[#333]"
                >
                  <div className="flex items-center gap-1">
                    <span className="font-medium">Source</span>{" "}
                    <div className="transition-colors group-hover:text-gray-600">
                      {getArrow("source")}
                    </div>
                  </div>
                </th>
                <th
                  onClick={() => handleSort("target")}
                  className="px-4 py-3 text-left font-bold cursor-pointer hover:bg-[#57CFAD] hover:text-[#333]"
                >
                  <div className="flex items-center gap-1">
                    <span className="font-medium">Target</span>
                    <div className="transition-colors group-hover:text-gray-600">
                      {getArrow("target")}
                    </div>
                  </div>
                </th>
                <th
                  onClick={() => handleSort("match")}
                  className="px-4 py-3 text-left font-bold cursor-pointer hover:bg-[#57CFAD] hover:text-[#333]"
                >
                  <div className="flex items-center gap-1">
                    <span className="font-medium">Match</span>
                    <div className="transition-colors group-hover:text-gray-600">
                      {getArrow("match")}
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="text-[#333333]">
              {sortedData.map((row, idx) => (
                <ListItem key={idx} row={row} />
              ))}
            </tbody>
          </table>
        ) : (
          <p>waiting for input</p>
        )}
      </div>
    </div>
  );
};

export default RenderEngineResult;
