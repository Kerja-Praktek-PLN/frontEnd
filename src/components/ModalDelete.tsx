import React from 'react';
import PropTypes from 'prop-types';

type DeleteModalProps = {
    isOpen: boolean;
    closeModal: () => void;
    handleDelete: () => void; // Corrected the type to accept no arguments
  };
  
  const DeleteConfirmationModal: React.FC<DeleteModalProps> = ({ isOpen, closeModal, handleDelete }) => {
    const handleDeleteClick = () => {
      // Perform the delete action
      handleDelete();
  
      // Close the modal
      closeModal();
    };

  return (
    <div className={`modal ${isOpen ? 'open' : 'hidden'}`}>
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40">
      <div className="bg-white p-8 max-w-lg mx-auto rounded shadow-lg w-full">
        <h2 className="text-2xl mb-4">Confirm Delete</h2>
        <p className="mb-4">Are you sure you want to delete this entry?</p>
        <div className="flex justify-end">
          <button
            className="bg-[#469AA7] text-white py-2 px-4 rounded hover:bg-primary-dark transition duration-300"
            onClick={handleDeleteClick}
          >
            Delete
          </button>
          <button
            className="bg-gray-500 text-black border py-2 px-4 rounded hover:bg-gray-700 transition duration-300 ml-2"
            onClick={closeModal}
          >
            Cancel
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
