const TableGrid = ({ data, header }) => {
  return (
    <table>
      <thead>
        {header.map((item) => {
          return <th>{item}</th>;
        })}
      </thead>
      <tbody>
        {data.map((item) => {
          return (
            <tr>
              <td>{item.userId || item.id}</td>
              <td>{item.title || item.name}</td>
              <td>{`${item.completed}` || item.address.street}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableGrid;
