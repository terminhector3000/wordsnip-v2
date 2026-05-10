import ListItem from "./listItem";
const RenderEngineResult = ({ data }) => {
  return (
    <div>
      <ul>
        {data.length > 0 ? (
          data.map((row, idx) => <ListItem key={idx} row={row} />)
        ) : (
          <p>waiting for input</p>
        )}
      </ul>
    </div>
  );
};

export default RenderEngineResult;
