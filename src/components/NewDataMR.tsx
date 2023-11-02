// import React from 'react';
import Breadcrumb from './Breadcrumb';

const NewDataMR = () => {
  return (
    <>
    <Breadcrumb pageName='NewData' />
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
                  <option value="">Belum Ditindak</option>
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

            <div className='mb-4.5 w-54'></div>    
        </div>

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

export default NewDataMR;