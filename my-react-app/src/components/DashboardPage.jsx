import React, { useState } from 'react';
import Modal from 'react-modal';
import { FaEdit, FaTrash } from 'react-icons/fa';

Modal.setAppElement('#root');

function DashboardPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    website: '',
  });

  const [entryList, setEntryList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleEdit = (index) => {
    const entryToEdit = entryList[index];
    setFormData({ ...entryToEdit });
    setEditIndex(index);
    setIsEditModalOpen(true);
  };

  const handleDelete = (index) => {
    setDeleteIndex(index);
  };

  const confirmDelete = () => {
    if (deleteIndex !== null) {
      const updatedList = [...entryList];
      updatedList.splice(deleteIndex, 1);
      setEntryList(updatedList);
      setDeleteIndex(null);
      setSuccessMessage('Entry deleted successfully.');
    }
  };

  const cancelDelete = () => {
    setDeleteIndex(null);
  };

  const handleSubmit = () => {
    if (!formData.username || !formData.password || !formData.website) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    if (editIndex !== null) {
      const updatedList = [...entryList];
      updatedList[editIndex] = formData;
      setEntryList(updatedList);
      setIsEditModalOpen(false);
      setSuccessMessage('Entry updated successfully.');
    } else {
      setEntryList([...entryList, formData]);
      setIsAddModalOpen(false);
      setSuccessMessage('Entry added successfully.');
    }

    setFormData({ username: '', password: '', website: '' });
    setEditIndex(null);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      {deleteIndex !== null && (
        <div className="modal">
          <div className="modal-content">
            <p className="text-red-500 text-lg">
              Are you sure you want to delete this entry?
            </p>
            <div className="flex justify-center mt-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg mr-2"
                onClick={confirmDelete}
              >
                Yes
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                onClick={cancelDelete}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}

      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}
      {errorMessage && (
        <div className="error-message">{errorMessage}</div>
      )}

      <div className="m-4 p-4 bg-white rounded-md shadow-md">
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-xl"
        >
          Add Data
        </button>
        <Modal
          isOpen={isAddModalOpen}
          onRequestClose={() => setIsAddModalOpen(false)}
          contentLabel="Add Data Modal"
        >
          <button
            className="absolute top-2 right-2 bg-gray-300 text-gray-700 w-8 h-8 text-xl"
            onClick={() => setIsAddModalOpen(false)}
          >
            X
          </button>
          <fieldset className="border p-4 mb-4">
            <legend className="text-lg font-semibold">Add Data</legend>
            <form>
              <div className="mb-4">
                <label htmlFor="username" className="block">
                  Username:
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="ENTER USERNAME"
                  className="w-full px-3 py-2 border focus:outline-none"
                  value={formData.username}
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block">
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="ENTER YOUR PASSWORD"
                  className="w-full px-3 py-2 border focus:outline-none"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
              </div>
              <div className="mb-4">
                <label htmlFor="website" className="block">
                  Website:
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  placeholder="ENTER YOUR WEBSITE"
                  className="w-full px-3 py-2 border focus:outline-none"
                  value={formData.website}
                  onChange={(e) =>
                    setFormData({ ...formData, website: e.target.value })
                  }
                />
              </div>
              <button
                type="button"
                className="bg-blue-500 text-white px-4 py-2"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </form>
          </fieldset>
        </Modal>
      </div>
      <div className="m-4 p-4 bg-white shadow-md">
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
                    className="bg-blue-500 text-white px-2 py-1 rounded-full mr-2"
                    onClick={() => handleEdit(index)}
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded-full"
                    onClick={() => handleDelete(index)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Modal
          isOpen={isEditModalOpen}
          onRequestClose={() => setIsEditModalOpen(false)}
          contentLabel="Edit Data Modal"
        >
          <button
            className="absolute top-2 right-2 bg-gray-300 text-gray-700 w-8 h-8 text-xl"
            onClick={() => setIsEditModalOpen(false)}
          >
            X
          </button>
          <fieldset className="border p-4 mb-4">
            <legend className="text-lg font-semibold">Edit Data</legend>
            <form>
              <div className="mb-4">
                <label htmlFor="editUsername" className="block">
                  Username:
                </label>
                <input
                  type="text"
                  id="editUsername"
                  name="editUsername"
                  placeholder="ENTER USERNAME"
                  className="w-full px-3 py-2 border focus:outline-none"
                  value={formData.username}
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
                />
              </div>
              <div className="mb-4">
                <label htmlFor="editPassword" className="block">
                  Password:
                </label>
                <input
                  type="password"
                  id="editPassword"
                  name="editPassword"
                  placeholder="ENTER YOUR PASSWORD"
                  className="w-full px-3 py-2 border focus:outline-none"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
              </div>
              <div className="mb-4">
                <label htmlFor="editWebsite" className="block">
                  Website:
                </label>
                <input
                  type="url"
                  id="editWebsite"
                  name="editWebsite"
                  placeholder="ENTER YOUR WEBSITE"
                  className="w-full px-3 py-2 border focus:outline-none"
                  value={formData.website}
                  onChange={(e) =>
                    setFormData({ ...formData, website: e.target.value })
                  }
                />
              </div>
              <button
                type="button"
                className="bg-blue-500 text-white px-4 py-2"
                onClick={handleSubmit}
              >
                Update
              </button>
            </form>
          </fieldset>
        </Modal>
      </div>
    </div>
  );
}

export default DashboardPage;
