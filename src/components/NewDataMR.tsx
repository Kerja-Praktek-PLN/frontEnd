// import React from 'react';
import { parse } from 'date-fns';
import Breadcrumb from './Breadcrumb';
import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { BsCloudFog } from 'react-icons/bs';

const NewDataMR = () => {

  const [formData, setFormData] = useState({
    tanggal: '',
    status_tegakan: '',
    nama_PIC: '',
    jenis_pohon: '',
    nomor_tower: '',
    jalur: '',
    jumlah_tegakan: '',
    jarak_pohon_ke_konduktor: '',
    tindak_lanjut: ''
  });


  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = event.target;
    var parsedValue = value
    if(type === 'number') parsedValue = parseInt(value)
    if(name === 'jarak_pohon_ke_konduktor') parsedValue = parseFloat(value)
    if(name === 'tanggal') parsedValue = parseDate(value)
    console.log("parsedValue")
    console.log(parsedValue)
    setFormData((prev)=>{
      return {
        ...prev,
        [name]: parsedValue, 
      }
    });
  };

  const parseDate = (isoDate: any) => {
    const date = new Date(isoDate)
    return date.toISOString().split('T')[0]
  }
  

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log('Form Data:', formData);
      const result = await axios.post(`http://localhost:5000/row`, formData)
      console.log(result)
    } catch (error) {
      console.log("error") 
      console.log(error)
    }
  };

  const [selectedRoute, setSelectedRoute] = useState('');

  return (
    <>
    <Breadcrumb pageName='NewData' />
    <form onSubmit={handleSubmit}>
    <div className='bg-white'>
      <div className='p-5'>
        <div className='text-black font-bold text-xl'>New Data</div>
        <div className='w-20 h-px border border-black my-2'/>
        <div className='text-black font-medium text-lg'>Rute Transmisi : {selectedRoute} 
        <select onChange={handleInputChange} name="rute_transmisi" className="shadow text-sm relative z-20 w-1/3 appearance-none rounded border border-stroke bg-transparent py-2 px-4 mx-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
          <option value="" selected disabled>Rute Transmisi</option>
          <option value="Tello - Mandai">Tello - Mandai</option>
          <option value="Mandai - Pangkep">Mandai - Pangkep</option>
          <option value="Maros - DayaBaru">Maros - DayaBaru</option>
          <option value="Bosowa - Incomer ">Bosowa - Incomer </option>
          <option value="Pangkep - Tonasa">Pangkep - Tonasa</option>
          <option value="Pangkep - Tello">Pangkep - Tello</option>
          <option value="Balusu - Maros">Balusu - Maros</option>
        </select>
        </div>
      </div>
      <div className='px-7 pb-7'>
        <div className='flex grid-cols-3 justify-between w-full'>
         <div>
            <label htmlFor="tanggal" className="w-54 mb-3 block text-black dark:text-white font-medium text-sm">
              Tanggal
            </label>
            <div className="relative w-full">
              <input
                type="date"
                name="tanggal"
                value={formData.tanggal}
                onChange={handleInputChange}
                className="shadow text-sm custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>
          </div>

          <div className="mb-4.5 w-54">
              <label htmlFor="status_tegakan" className="mb-2.5 block text-black dark:text-white font-medium text-sm">
                Status
              </label>
              <div 
              className="relative z-20 bg-transparent dark:bg-form-input">
                <select 
                name="status_tegakan"
                value={formData.status_tegakan}
                onChange={handleInputChange}
                className="shadow text-sm relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-2 px-4 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                  <option value="default">Type your subject</option>
                  <option value="AMAN">AMAN</option>
                  <option value="B1">B1</option>
                  <option value="B2">B2</option>
                  <option value="KRITIS">KRITIS</option>
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
              <label htmlFor='tindakLanjut' className="mb-2.5 block text-black dark:text-white font-medium text-sm">
                Tindak Lanjut
              </label>
              <div 
              className="relative z-20 bg-transparent dark:bg-form-input">
                <select 
                name='tindak_lanjut'
                value={formData.tindakLanjut}
                onChange={handleInputChange}
                className="shadow text-sm relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-2 px-4 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                  <option value="default">Type your subject</option>
                  <option value="sudah pangkas">Sudah Pangkas</option>
                  <option value="sudah tebang">Sudah Tebang</option>
                  <option value="selum ditindak">Belum Ditindak</option>
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
              <label htmlFor='namaPIC' className="mb-2.5 block text-black dark:text-white font-medium text-sm">
                Nama PIC Inspeksi
              </label>
              <div className="relative z-20 bg-transparent dark:bg-form-input">
                <select 
                name='nama_PIC'
                value={formData.nama_PIC}
                onChange={handleInputChange}
                className="shadow text-sm relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-2 px-4 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                  <option value="default">Type your subject</option>
                  <option value="H IDHAM PEWATA">H IDHAM PEWATA</option>
                  <option value="RIZAL">RIZAL</option>
                  <option value="FAUZAN AULIAH">FAUZAN AULIAH</option>
                  <option value="REZKA">REZKA</option>
                  <option value="MAHFUD">MAHFUD</option>
                  <option value="MAHARONI">MAHARONI</option>
                  <option value="SAHARUDDIN">SAHARUDDIN</option>
                  <option value="TIMHAR ULTG">TIMHAR ULTG</option>
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
              <label htmlFor='jenis_pohon' className="mb-2.5 block text-black dark:text-white font-medium text-sm">
                Jenis Pohon
              </label>
              <input
                type="text"
                name='jenis_pohon'
                value={formData.jenis_pohon}
                onChange={handleInputChange}
                placeholder="Jenis Pohon"
                className="shadow text-sm w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>

            <div className='mb-4.5 w-54'></div>    
        </div>

        <div className='flex grid-cols-2 mt-3 justify-between'>
        <div className="mb-4.5 w-54">
            <label htmlFor='nomor_tower' className="mb-2.5 block text-black dark:text-white font-medium text-sm">
              No Tower
            </label>
            <input
              type="number"
              name='nomor_tower'
              value={formData.nomor_tower}
              onChange={handleInputChange}
              placeholder="Input Nomor Tower"
              className="shadow text-sm w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
          </div>

          <div className="mb-4.5 w-54">
              <label htmlFor='jalur' className="mb-2.5 block text-black dark:text-white font-medium text-sm">
                Bawah Jalur / Luar Jalur
              </label>
              <div className="relative z-20 bg-transparent dark:bg-form-input">
                <select 
                name='jalur'
                value={formData.jalur}
                onChange={handleInputChange}
                className="shadow text-sm relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-2 px-4 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                  <option value="default">Type your subject</option>
                  <option value="bawah">Bawah Jalur</option>
                  <option value="luar">Luar Jalur</option>
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
            <label htmlFor='jumlah_tegakan' className="mb-2.5 block text-black dark:text-white font-medium text-sm">
              Jumlah Tegakan
            </label>
            <input
              type="number"
              name='jumlah_tegakan'
              value={formData.jumlah_tegakan}
              onChange={handleInputChange}
              placeholder="Jumlah Tegakan"
              className="shadow text-sm w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
          </div>

          <div className="mb-4.5 w-54">
            <label htmlFor='jarak_pohon_ke_konduktor' className="mb-2.5 block text-black dark:text-white font-medium text-sm">
              Jarak Pohon ke Konduktor
            </label>
            <input
              type="number"
              name="jarak_pohon_ke_konduktor"
              value={formData.jarak_pohon_ke_konduktor}
              onChange={handleInputChange}
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
    </form>
    </>
  );
};

export default NewDataMR;