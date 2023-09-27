import Breadcrumb from "../../components/Breadcrumb";
import Tablevartransmisi from "../../components/Table mvarTransmisi";
import { useState } from "react";


const mvarTransmisi = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const [data, setData] = useState([]);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  }

  const handleAddData = () => {
    if (name.trim() === '' || link.trim() === '') {
      return;
    }

  const newData = {
    name,
    link,
  };

  // setData((prevData) => [...prevData, newData]);

  setName('');
  setLink('');

  closeModal();
}

    return (
      <>
      <Breadcrumb pageName="mvarTransmisi" />
      <div className="bg-white">
        <div className="flex justify-between p-5">
          <div className="mb-4.5">
                  <div className="relative z-20 bg-transparent dark:bg-form-input drop-shadow-lg w-54 bg-white rounded-sm">
                    <select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                      <option value="">GI</option>
                      <option value="">GI Tello 150 Kv</option>
                      <option value="">GI Tello 150 Kv</option>
                      <option value="">GI Tello 150 Kv</option>
                      <option value="">GI Tello 150 Kv</option>
                      <option value="">GI Tello 150 Kv</option>
                    </select>
                    <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                      <svg
                        className="fill-current"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.8">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                            fill=""
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>
                <button 
                  className="bg-[#469AA7] text-white py-2 px-4 rounded hover:bg-primary-dark transition duration-300 w-28 h-10"
                  onClick={openModal}
                  >
                    New Data
                  </button>
              </div>
            <Tablevartransmisi />
            <div className="flex justify-end pr-5 pb-5">
              <button className=" text-black py-2 px-4 rounded mr-2 hover:bg-primary-dark transition duration-300 text-xs">
                Previous
              </button>
              <p className="text-black py-2 px-4 rounded-sm mx-2 bg-white shadow-lg border border-black text-xs">
                {/* Page {currentPage} of {totalPages} */}1
              </p>
              <button className=" text-black py-2 px-4 rounded hover:bg-primary-dark transition duration-300 text-xs hover:text-primary">
                Next
              </button>
            </div>
          </div>

          {/* Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40">
              <div className="bg-white p-8 max-w-lg mx-auto rounded shadow-lg w-full">
                <div className="flex justify-between mb-4 justify-center">
                  <h2 className="text-2xl font-medium">New Data</h2>
                  <button
                    className="text-gray-500 hover:text-gray-600 opacity-40"
                    onClick={closeModal}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                 </button>
                </div>
                  <div className="h-px border border-black mb-4 mx-4"></div>
                    <div className="my-5 mx-4">
                      <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-lg border-[1.5px] border-stroke bg-[#E5E5E5] py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                    </div>
                    <div className="my-5 pb-15 mx-4">
                      <input
                        type="text"
                        placeholder="Link File"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                        className="w-full rounded-lg border-[1.5px] border-stroke bg-[#E5E5E5] py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                    </div>
                {/* conten */}
                <div className="flex justify-end pb-5">
                  <div className="flex-grow"></div> 
                  <button
                    className="bg-[#469AA7] text-white py-2 px-4 rounded hover:bg-primary-dark transition duration-300"
                    onClick={() => {
                      handleAddData();
                      closeModal();
                    }}
                  >
                    Add Data
                  </button>
                  </div> 
              </div>
            </div>
          )}
      </>
    );
  };
  
  export default  mvarTransmisi;
  