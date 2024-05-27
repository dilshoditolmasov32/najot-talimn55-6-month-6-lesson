import "./tableData.css";

const TableData = () => {

  return (
    <table id="customers">
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Phone number</th>
        <th>Your email</th>
        <th>Your address</th>
        <th>Gender</th>
      </tr>

      <tr>
        <td>Paris spécialités</td>
        <td>Marie Bertrand</td>
        <td>France</td>
        <td>France</td>
        <td>France</td>
        <td>France</td>
      </tr>
    </table>
  );
};

export default TableData;
