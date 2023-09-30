import React, { useState } from 'react';
import Breadcrumb from './Breadcrumb';
import ImageUploadModal from './ModalUploadBA';

const NewDataBA = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  }
  return (
    <>
    <Breadcrumb pageName='NewDataBA' />
    <div className='bg-white'>
      <div className='p-5'>
        <div className='text-black font-bold text-xl'>New Data</div>
        <div className='w-20 h-px border border-black my-2'/>
        <div className='text-black font-medium text-lg'>Rute Transmisi : </div>
      </div>
      <div className='px-7 pb-7'>
        <div className='flex grid-cols-3 justify-between w-full'>
         <div>
            <label className="w-54 mb-3 block text-black dark:text-white font-medium text-sm">
              Tanggal
            </label>
            <div className="relative w-full">
              <input
                type="date"
                className="shadow text-sm custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>
          </div>

          <div className="mb-4.5 w-54">
              <label className="mb-2.5 block text-black dark:text-white font-medium text-sm">
                Status
              </label>
              <div className="relative z-20 bg-transparent dark:bg-form-input">
                <select className="shadow text-sm relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-2 px-4 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                  <option value="">Type your subject</option>
                  <option value="">AMAN</option>
                  <option value="">B1</option>
                  <option value="">B2</option>
                  <option value="">KRITIS</option>
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

            <div className="mb-4.5 w-54">
              <label className="mb-2.5 block text-black dark:text-white font-medium text-sm">
                Tindak Lanjut
              </label>
              <div className="relative z-20 bg-transparent dark:bg-form-input">
                <select className="shadow text-sm relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-2 px-4 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                  <option value="">Type your subject</option>
                  <option value="">Sudah Pangkas</option>
                  <option value="">Sudah Tebang</option>
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
        </div>

        <div className='flex grid-cols-2 mt-3 justify-between'>
        <div className="mb-4.5 w-54">
              <label className="mb-2.5 block text-black dark:text-white font-medium text-sm">
                Nama PIC Inspeksi
              </label>
              <div className="relative z-20 bg-transparent dark:bg-form-input">
                <select className="shadow text-sm relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-2 px-4 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                  <option value="">Type your subject</option>
                  <option value="">H IDHAM PEWATA</option>
                  <option value="">RIZAL</option>
                  <option value="">FAUZAN AULIAH</option>
                  <option value="">REZKA</option>
                  <option value="">MAHFUD</option>
                  <option value="">MAHARONI</option>
                  <option value="">SAHARUDDIN</option>
                  <option value="">TIMHAR ULTG</option>
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

            <div className="mb-4.5 w-54">
              <label className="mb-2.5 block text-black dark:text-white font-medium text-sm">
                Jenis Pohon
              </label>
              <input
                type="text"
                placeholder="Jenis Pohon"
                className="shadow text-sm w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>

            <div className='mb-4.5 w-54 h-0'>
            <label className="mb-2.5 block text-black dark:text-white font-medium text-sm">
                    Unggah Gambar
                </label>
                <div
                    id="FileUpload"
                    className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border-2 border-dashed border-primary bg-gray py-4 px-4 dark:bg-meta-4 sm:py-7.5"
                    onClick={openModal}
                  >
                    {/* <input
                      type="file"
                      accept="image/*"
                      className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
                    /> */}
                    <div className="flex flex-col items-center justify-center space-y-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1.99967 9.33337C2.36786 9.33337 2.66634 9.63185 2.66634 10V12.6667C2.66634 12.8435 2.73658 13.0131 2.8616 13.1381C2.98663 13.2631 3.1562 13.3334 3.33301 13.3334H12.6663C12.8431 13.3334 13.0127 13.2631 13.1377 13.1381C13.2628 13.0131 13.333 12.8435 13.333 12.6667V10C13.333 9.63185 13.6315 9.33337 13.9997 9.33337C14.3679 9.33337 14.6663 9.63185 14.6663 10V12.6667C14.6663 13.1971 14.4556 13.7058 14.0806 14.0809C13.7055 14.456 13.1968 14.6667 12.6663 14.6667H3.33301C2.80257 14.6667 2.29387 14.456 1.91879 14.0809C1.54372 13.7058 1.33301 13.1971 1.33301 12.6667V10C1.33301 9.63185 1.63148 9.33337 1.99967 9.33337Z"
                            fill="#3C50E0"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.5286 1.52864C7.78894 1.26829 8.21106 1.26829 8.4714 1.52864L11.8047 4.86197C12.0651 5.12232 12.0651 5.54443 11.8047 5.80478C11.5444 6.06513 11.1223 6.06513 10.8619 5.80478L8 2.94285L5.13807 5.80478C4.87772 6.06513 4.45561 6.06513 4.19526 5.80478C3.93491 5.54443 3.93491 5.12232 4.19526 4.86197L7.5286 1.52864Z"
                            fill="#3C50E0"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.99967 1.33337C8.36786 1.33337 8.66634 1.63185 8.66634 2.00004V10C8.66634 10.3682 8.36786 10.6667 7.99967 10.6667C7.63148 10.6667 7.33301 10.3682 7.33301 10V2.00004C7.33301 1.63185 7.63148 1.33337 7.99967 1.33337Z"
                            fill="#3C50E0"
                          />
                        </svg>
                      </span>
                      <p>
                        <span className="text-primary">Click to upload</span>
                      </p>
                      <p className="mt-1.5">SVG, PNG, JPG or GIF</p>
                      <p>(max, 800 X 800px)</p>
                    </div>
                  </div>
            </div>   
            <ImageUploadModal isOpen={isModalOpen} closeModal={closeModal} />
        </div>

        {/* <div className='mb-4.5 w-54'>
          <button 
          className='bg-blue-500 text-whitepx-4 py-2 rounded hover:bg-blue-600'
          onClick={openModal}
          >
            Upload Image
          </button>
          <ImageUploadModal isOpen={isModalOpen} closeModal={closeModal} />
        </div> */}

        <div className='flex grid-cols-2 mt-3 justify-between'>
        <div className="mb-4.5 w-54">
            <label className="mb-2.5 block text-black dark:text-white font-medium text-sm">
              No Tower
            </label>
            <input
              type="text"
              placeholder="Input Nomor Tower"
              className="shadow text-sm w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
          </div>

          <div className="mb-4.5 w-54">
              <label className="mb-2.5 block text-black dark:text-white font-medium text-sm">
                Bawah Jalur / Luar Jalur
              </label>
              <div className="relative z-20 bg-transparent dark:bg-form-input">
                <select className="shadow text-sm relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-2 px-4 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                  <option value="">Type your subject</option>
                  <option value="">Bawah Jalur</option>
                  <option value="">Luar Jalur</option>
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

            <div className='mb-4.5 w-54'></div>

        </div>

        <div className='flex grid-cols-2 mt-3 justify-between'>
        <div className="mb-4.5 w-54">
            <label className="mb-2.5 block text-black dark:text-white font-medium text-sm">
              Jumlah Tegakan
            </label>
            <input
              type="text"
              placeholder=""
              className="shadow text-sm w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
          </div>

          <div className="mb-4.5 w-54">
            <label className="mb-2.5 block text-black dark:text-white font-medium text-sm">
              Jarak Pohon ke Konduktor
            </label>
            <input
              type="text"
              placeholder="ex 3.6"
              className="shadow text-sm w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
          </div>

            <div className='mb-4.5 w-54'></div>

        </div>

        <button
            type="submit"
            className="flex w-50 mt-5 justify-center item-center mx-auto rounded bg-[#469AA7] p-3 font-medium text-gray"
          >
            Submit
          </button>
      </div>
    </div>
    </>
  );
};

export default NewDataBA;