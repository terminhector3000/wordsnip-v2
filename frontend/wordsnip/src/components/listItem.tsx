const ListItem = (row) => {
  return (
    <li>
      <span>{row.row.word} </span>
      <span>{row.row.counts.source} </span>
      <span>{row.row.counts.target} </span>
      <span>{String(row.row.match)} </span>
    </li>
  );
};

export default ListItem;
