import  { useState } from "react";

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
    <div className="edit-modal">
      <h2>Edit Row</h2>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={editedData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="text"
          name="email"
          value={editedData.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Role:
        <input
          type="text"
          name="role"
          value={editedData.role}
          onChange={handleChange}
        />
      </label>
      <button onClick={handleSave}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default EditComponent;
