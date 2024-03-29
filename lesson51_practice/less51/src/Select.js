export default function Select(props) {
  return (
    <select onChange={(event) => props.onSetLimit(+event.target.value)}>
      <option value="10">10</option>
      <option value="30">30</option>
      <option value="50">50</option>
      <option value="100">100</option>
    </select>
  );
}
