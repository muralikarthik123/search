import { useNavigate } from "react-router-dom";
function TablePage({ tableData }) {
    const Nav=useNavigate()
    const moving=()=>{
        Nav('/table')
    }
    return (
      <div>
        <h2>User Data Table</h2>
        <table border="1">
            <tr>
              <th>Name</th>
              <th>Age</th>
            </tr>

            {tableData.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.age}</td>
              </tr>
            ))}
        </table>
        <br/>
        <button onClick={moving}>Move</button>
      </div>
    );
  }
  
  export default TablePage;
  