import { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import { ChangeEvent } from "react";


const HelpFeedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Perform submission logic here
    setIsSubmitted(true);
  };

  const closeModal = () => {
    setIsSubmitted(false);
    // Optionally reset form fields here
    setFormData({
      name: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <Breadcrumb pageName="Help & Feedback" />
      <div className="w-full h-full bg-white mt-7 p-5 drop-shadow-lg">
        <form onSubmit={handleSubmit}>
          <div className="mb-4.5">
            <label className="mb-2.5 block text-black dark:text-white">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder=""
              className="w-1/2 shadow rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
          </div>

          <div className="mb-4.5">
            <label className="mb-2.5 block text-black dark:text-white">
              Subject :
            </label>
            <div className="relative z-20 bg-transparent dark:bg-form-input">
              <select
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="relative z-20 w-1/2 appearance-none rounded border shadow border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              >
                <option value="">Select your subject</option>
                <option value="Request">Request</option>
                <option value="Report">Report</option>
                <option value="Others">Others</option>
              </select>
              <span className="absolute top-1/2 right-1/2 mr-1 z-30 -translate-y-1/2 ">
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

          <div className="mb-6">
            <label className="mb-2.5 block text-black dark:text-white">
              Message
            </label>
            <textarea
              rows={6}
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Type your message"
              className="w-9/12 shadow rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            ></textarea>
          </div>

          <button
            type="submit"
            className="flex w-72 justify-center item-center mx-auto rounded bg-[#469AA7] p-3 font-medium text-gray"
          >
            Submit
          </button>
        </form>
        {isSubmitted && (
          <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <p className="text-xl font-semibold mb-4">
                Thank you, your request has been recorded!
              </p>
              <button
                onClick={() => {
                  closeModal();
                  window.location.href = "/home";
                }}
                className="bg-[#469AA7] text-white py-2 px-4 rounded hover:bg-primary-dark transition duration-300"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default HelpFeedback;
