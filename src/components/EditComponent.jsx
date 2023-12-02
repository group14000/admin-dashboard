import { useState } from "react";

const EditComponent = ({ rowData, onSave, onCancel }) => {
  const [editedData, setEditedData] = useState({ ...rowData });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = () => {
    onSave(editedData);
  };

  return (
    <div className="edit-modal fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-8 rounded-md shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Edit Row</h2>

        <label className="block mb-4">
          Name:
          <input
            type="text"
            name="name"
            value={editedData.name}
            onChange={handleChange}
            className="form-input mt-1 block w-full"
          />
        </label>

        <label className="block mb-4">
          Email:
          <input
            type="text"
            name="email"
            value={editedData.email}
            onChange={handleChange}
            className="form-input mt-1 block w-full"
          />
        </label>

        <label className="block mb-4">
          Role:
          <input
            type="text"
            name="role"
            value={editedData.role}
            onChange={handleChange}
            className="form-input mt-1 block w-full"
          />
        </label>

        <div className="flex space-x-4">
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Save
          </button>
          <button
            onClick={onCancel}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditComponent;
