import React, { useState } from 'react';

function DashboardPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    website: '',
  });

  const [entryList, setEntryList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleEdit = (index) => {
    const entryToEdit = entryList[index];
    setFormData(entryToEdit);
    setEditIndex(index);
  };

  const handleSubmit = () => {
    if (!formData.username || !formData.password || !formData.website) {
      alert('Please fill in all fields.');
      return;
    }

    if (editIndex !== null) {
      const updatedList = [...entryList];
      updatedList[editIndex] = formData;
      setEntryList(updatedList);
      setFormData({ username: '', password: '', website: '' });
      setEditIndex(null);
    } 
    else {
      setEntryList([...entryList, formData]);
      setFormData({ username: '', password: '', website: '' });
    }
  };

  const handleDelete = (index) => {
    const updatedList = [...entryList];
    updatedList.splice(index, 1);
    setEntryList(updatedList);
  };

  return (
    <div>
      <fieldset className="border rounded-lg p-4 mb-4">
        <legend className="text-lg font-semibold">Form</legend>
        <form>
          <div className="mb-2">
            <label htmlFor="username" className="block">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="ENTER USERNAME"
              className="w-full px-3 py-2 border rounded-md focus:outline-none"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="block">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="ENTER YOUR PASSWORD"
              className="w-full px-3 py-2 border rounded-md focus:outline-none"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>
          <div className="mb-2">
            <label htmlFor="website" className="block">
              Website:
            </label>
            <input
              type="url"
              id="website"
              name="website"
              placeholder="ENTER YOUR WEBSITE"
              className="w-full px-3 py-2 border rounded-md focus:outline-none"
              value={formData.website}
              onChange={(e) =>
                setFormData({ ...formData, website: e.target.value })
              }
            />
          </div>
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </fieldset>

      <table className="border-collapse border" id="table">
        <thead>
          <tr>
            <th className="border p-2">USERNAME</th>
            <th className="border p-2">PASSWORD</th>
            <th className="border p-2">WEBSITE</th>
            <th className="border p-2">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {entryList.map((entry, index) => (
            <tr key={index}>
              <td className="border p-2">{entry.username}</td>
              <td className="border p-2">{entry.password}</td>
              <td className="border p-2">{entry.website}</td>
              <td className="border p-2">
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded-lg mr-2"
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded-lg"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DashboardPage;
