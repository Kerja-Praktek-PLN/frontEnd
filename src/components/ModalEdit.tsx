import React, { useState, useEffect } from 'react';

type EditModalProps = {
  isOpen: boolean;
  closeModal: () => void;
  handleEditData: (id: number, name: string, link: string, lastUpdate: Date) => void;
  initialId: number
  initialName: string;
  initialLink: string;
};

const EditModal: React.FC<EditModalProps> = ({
  isOpen,
  closeModal,
  handleEditData,
  initialId,
  initialName,
  initialLink,
}) => {
  const [name, setName] = useState(initialName);
  const [link, setLink] = useState(initialLink);
  const [id, setId] = useState(initialId);
  const [lastUpdate, setLastUpdate] = useState(getCurrentTime());

  useEffect(() => {
    // Reset the input values when modal is opened
    if (isOpen) {
      setId(initialId);
      setName(initialName);
      setLink(initialLink);
    }
  }, [isOpen, initialId, initialName, initialLink]);

  const handleSave = () => {
    // Call your edit data function here with the updated data
    setLastUpdate(getCurrentTime())
    handleEditData(id, name, link, lastUpdate);
    closeModal();
  };

  function getCurrentTime(): Date {
    return new Date();
  }

  return (
    <div className={`modal ${isOpen ? 'open' : 'hidden'}`} aria-label="Edit Data Modal">
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40">
        <div className="bg-white p-8 max-w-lg mx-auto rounded shadow-lg w-full">
          <h2 className="text-2xl mb-4">Edit Data</h2>
          <div className="h-px border border-black mb-4 mx-4"></div>
          <div className="my-5 mx-4">
            <input
              type="hidden"
              value={id}
              
            />
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-[#E5E5E5] py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="my-5 pb-15 mx-4">
            <input
              type="url"
              placeholder="Link File"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-[#E5E5E5] py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </div>
          <div className="flex justify-end pb-5">
            <div className="flex-grow"></div>
            <button
              className="bg-[#469AA7] text-white py-2 px-4 rounded hover:bg-primary-dark transition duration-300"
              onClick={handleSave}
            >
              Update
            </button>
            <button
              className="border text-black py-2 px-4 rounded hover:bg-primary-dark transition duration-300 ml-2"
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

export default EditModal;
