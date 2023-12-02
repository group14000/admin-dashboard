import { useState, useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import NavBar from "./NavBar";
import EditComponent from "./EditComponent";

const YourComponent = () => {
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editRowId, setEditRowId] = useState(null);
  const [data, setData] = useState([
    {
      id: "1",
      name: "Aaron Miles",
      email: "aaron@mailinator.com",
      role: "member",
    },
    {
      id: "2",
      name: "Aishwarya Naik",
      email: "aishwarya@mailinator.com",
      role: "member",
    },
    {
      id: "3",
      name: "Arvind Kumar",
      email: "arvind@mailinator.com",
      role: "admin",
    },
    {
      id: "4",
      name: "Caterina Binotto",
      email: "caterina@mailinator.com",
      role: "member",
    },
    {
      id: "5",
      name: "Chetan Kumar",
      email: "chetan@mailinator.com",
      role: "member",
    },
    {
      id: "6",
      name: "Jim McClain",
      email: "jim@mailinator.com",
      role: "member",
    },
    {
      id: "7",
      name: "Mahaveer Singh",
      email: "mahaveer@mailinator.com",
      role: "member",
    },
    {
      id: "8",
      name: "Rahul Jain",
      email: "rahul@mailinator.com",
      role: "admin",
    },
    {
      id: "9",
      name: "Rizan Khan",
      email: "rizan@mailinator.com",
      role: "member",
    },
    {
      id: "10",
      name: "Sarah Potter",
      email: "sarah@mailinator.com",
      role: "admin",
    },
    {
      id: "11",
      name: "Keshav Muddaiah",
      email: "keshav@mailinator.com",
      role: "member",
    },
    {
      id: "12",
      name: "Nita Ramesh",
      email: "nita@mailinator.com",
      role: "member",
    },
    {
      id: "13",
      name: "Julia Hunstman",
      email: "julia@mailinator.com",
      role: "member",
    },
    {
      id: "14",
      name: "Juan Alonso",
      email: "juan@mailinator.com",
      role: "admin",
    },
    {
      id: "15",
      name: "Gabriel Montoya",
      email: "gabriel@mailinator.com",
      role: "admin",
    },
    {
      id: "16",
      name: "Beatrice Iglesias",
      email: "beatrice@mailinator.com",
      role: "admin",
    },
    {
      id: "17",
      name: "Sarah Symms",
      email: "sarah.s@mailinator.com",
      role: "admin",
    },
    {
      id: "18",
      name: "Patrick Pinheiro",
      email: "patrick@mailinator.com",
      role: "admin",
    },
    {
      id: "19",
      name: "Anand Patel",
      email: "anand@mailinator.com",
      role: "member",
    },
    {
      id: "20",
      name: "Kishore Kalburgi",
      email: "kishore@mailinator.com",
      role: "member",
    },
    {
      id: "21",
      name: "Rebecca Norris",
      email: "rebecca@mailinator.com",
      role: "member",
    },
    {
      id: "22",
      name: "Özgür Başak",
      email: "ozgur@mailinator.com",
      role: "member",
    },
    {
      id: "23",
      name: "Robin Andersen",
      email: "robin@mailinator.com",
      role: "member",
    },
    {
      id: "24",
      name: "Nandini Kumar",
      email: "nandini@mailinator.com",
      role: "member",
    },
    {
      id: "25",
      name: "Nikita Smith",
      email: "nikita@mailinator.com",
      role: "member",
    },
    {
      id: "26",
      name: "Colton Doe",
      email: "colton@mailinator.com",
      role: "member",
    },
    {
      id: "27",
      name: "Alain Senna",
      email: "alain@mailinator.com",
      role: "member",
    },
    {
      id: "28",
      name: "Ashwin Jain",
      email: "ashwin@mailinator.com",
      role: "member",
    },
    {
      id: "29",
      name: "Seema Bhatt",
      email: "seema@mailinator.com",
      role: "member",
    },
    {
      id: "30",
      name: "Kayla Scarpinski",
      email: "kayla@mailinator.com",
      role: "member",
    },
    {
      id: "31",
      name: "Ajay Ghosh",
      email: "ajay@mailinator.com",
      role: "member",
    },
    {
      id: "32",
      name: "Chris Lindberg",
      email: "chris@mailinator.com",
      role: "member",
    },
    {
      id: "33",
      name: "Christina Mourujärvi",
      email: "christina@mailinator.com",
      role: "member",
    },
    {
      id: "34",
      name: "Mikhail Bill",
      email: "mikhail@mailinator.com",
      role: "member",
    },
    {
      id: "35",
      name: "Eino Göregen",
      email: "eino@mailinator.com",
      role: "member",
    },
    {
      id: "36",
      name: "Zachariah Johansson",
      email: "zacharaiah@mailinator.com",
      role: "member",
    },
    {
      id: "37",
      name: "Aimaan Mohammed",
      email: "aimaan@mailinator.com",
      role: "admin",
    },
    {
      id: "38",
      name: "Aika Tsunoda",
      email: "aika@mailinator.com",
      role: "member",
    },
    {
      id: "39",
      name: "Kimiko Minamoto",
      email: "kimiko@mailinator.com",
      role: "member",
    },
    {
      id: "40",
      name: "Alyona Baginskaite",
      email: "alyona@mailinator.com",
      role: "member",
    },
    {
      id: "41",
      name: "Anirudh Mukherjee",
      email: "anirudh@mailinator.com",
      role: "member",
    },
    {
      id: "42",
      name: "Alyona Gov",
      email: "alyonagov@mailinator.com",
      role: "member",
    },
    {
      id: "43",
      name: "Robin Singh",
      email: "robin@mailinator.com",
      role: "member",
    },
    {
      id: "44",
      name: "Vijay Vasudevan",
      email: "vijayv@mailinator.com",
      role: "member",
    },
    {
      id: "45",
      name: "Steve Smith",
      email: "steve@mailinator.com",
      role: "member",
    },
    {
      id: "46",
      name: "Anirudh Banerjee",
      email: "anirudhb@mailinator.com",
      role: "member",
    },
  ]);

  const totalPages = Math.ceil(data.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  // Apply search filter to data
  const filteredData = data.filter((row) =>
    row.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentData = filteredData.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSelectAllRows = () => {
    const allRows = currentData.map((row) => row.id);
    setSelectedRows(allRows);
  };

  const handleRowSelection = (id) => {
    const isSelected = selectedRows.includes(id);
    if (isSelected) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  const handleDeleteSelected = () => {
    const updatedData = data.filter((row) => !selectedRows.includes(row.id));
    setData(updatedData);
    setSelectedRows([]);

    // Update local storage with the updated data
    localStorage.setItem("yourDataKey", JSON.stringify(updatedData));
  };

  const handleEdit = (id) => {
    setIsEditing(true);
    setEditRowId(id);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditRowId(null);
  };

  const handleSaveEdit = (editedData) => {
    const updatedData = data.map((row) =>
      row.id === editRowId ? { ...row, ...editedData } : row
    );
    setData(updatedData);
    setIsEditing(false);
    setEditRowId(null);

    // Update local storage with the updated data
    localStorage.setItem("yourDataKey", JSON.stringify(updatedData));
  };

  const handleDelete = (id) => {
    const updatedData = data.filter((row) => row.id !== id);
    setData(updatedData);
    setSelectedRows([]);

    // Update local storage with the updated data
    localStorage.setItem("yourDataKey", JSON.stringify(updatedData));
  };

  useEffect(() => {
    // Load data from local storage on component mount
    const storedData = localStorage.getItem("yourDataKey");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  return (
    <div className="container mx-auto p-4">
      {/* NavBar Component for Search */}
      <NavBar setSearchTerm={setSearchTerm} />

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300 mt-4">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2">
                <input type="checkbox" onChange={handleSelectAllRows} />
              </th>
              <th className="p-2">Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">Role</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((row) => (
              <tr
                key={row.id}
                className={`${
                  selectedRows.includes(row.id) ? "bg-gray-100" : ""
                } hover:bg-gray-50`}
              >
                <td className="p-2">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(row.id)}
                    onChange={() => handleRowSelection(row.id)}
                  />
                </td>
                <td className="p-2">{row.name}</td>
                <td className="p-2">{row.email}</td>
                <td className="p-2">{row.role}</td>
                <td className="p-2 space-x-2">
                  <button
                    onClick={() => handleEdit(row.id)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <EditIcon />
                  </button>
                  <button
                    onClick={() => handleDelete(row.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <DeleteIcon />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isEditing && editRowId && (
        <EditComponent
          rowData={data.find((row) => row.id === editRowId)}
          onSave={handleSaveEdit}
          onCancel={handleCancelEdit}
        />
      )}

      <div className="flex items-center justify-center mt-4 space-x-2">
        <button
          onClick={() => handlePageChange(1)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          First
        </button>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 ${
              currentPage === index + 1
                ? "bg-blue-700 text-white"
                : "bg-blue-500 text-white hover:bg-blue-700"
            } rounded`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Next
        </button>
        <button
          onClick={() => handlePageChange(totalPages)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Last
        </button>
      </div>

      <button
        onClick={handleDeleteSelected}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
      >
        Delete Selected
      </button>
    </div>
  );
};

export default YourComponent;
