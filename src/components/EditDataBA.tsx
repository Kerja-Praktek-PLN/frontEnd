import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Breadcrumb from './Breadcrumb';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const EditdataMonitoring = () => {

  const [data,setData] = useState({})
  const {idBA} = useParams()
  const [form, setForm] = useState({})
   const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/BA/${idBA}`);
        const result = await response.data;
        setData({
          ...result,
          tanggal: parseDate(result.createdAt)
        });
        setForm({
          ...result,
          tanggal: parseDate(result.createdAt)
        })
      } catch (error) {
        console.error('Error fetching data:', error);
        }
      }
      fetchData();
    },[])
    
    const handleInputChange = (event: any) => {
      const { name, value, type } = event.target;
      var dummy = value
      if(name === 'tanggal') {
        dummy = parseDate(value)
      }
      if(type === 'number') dummy = parseInt(value)
      setForm((prev)=>{
        return {
          ...prev,
          [name]: dummy
        }
      });
    };

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            setSelectedImage((prevImage) => reader.result as string | null);
          };
          reader.readAsDataURL(file);
          setForm((prev)=>{
          return {
            ...prev,
            [e.target.name]: file,
            }
          });
        }
      };

    const parseDate = (isoDate: any) => {
      const date = new Date(isoDate)
      return date.toISOString().split('T')[0]
    }

    const onSubmitHandler = async () => {
    try {
      const result = await axios.put(`http://localhost:5000/BA/${idBA}`, form, {
        headers:{ 
          "Content-Type": "multipart/form-data"
        }
      })
      console.log(result)
      if(result.status === 200) toast.success("berhasil")
      else throw new Error(result.data)
    } catch (error) {
      toast.error(error.message)
    }
  }
    
    return (
      <>
    <Breadcrumb pageName='NewDataBA' />
    <div className='bg-white'>
      <div className='p-5'>
        <div className='text-black font-bold text-xl'>New Data</div>
        <div className='w-20 h-px border border-black my-2'/>
        <div className='text-black font-medium text-lg'>Rute Transmisi : 
        <select value={form.rute_transmisi} onChange={handleInputChange} name="rute_transmisi" className="shadow text-sm relative z-20 w-1/3 appearance-none rounded border border-stroke bg-transparent py-2 px-4 mx-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
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
        <div className='flex grid-cols-3 justify-start gap-10 w-full'>
          <div>
              <label className="w-100 mb-3 block text-black dark:text-white font-medium text-sm">
                Tanggal
              </label>
              <div className="relative w-full">
                <input
                  name='tanggal'
                  onChange={handleInputChange}
                  type="date"
                  value={form.tanggal}
                  className="shadow text-sm custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>
          </div>
          <div className="mb-4.5 w-100">
              <label className="mb-2.5 block text-black dark:text-white font-medium text-sm">
                Tindak Lanjut
              </label>
              <div className="relative z-20 bg-transparent dark:bg-form-input">
                <select value={form.tindak_lanjut} onChange={handleInputChange} name="tindak_lanjut" className="shadow text-sm relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-2 px-4 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                  <option value="" disabled selected>Type your subject</option>
                  <option value="sudah pangkas">Sudah Pangkas</option>
                  <option value="sudah tebang">Sudah Tebang</option>
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

        <div className='flex grid-cols-2 mt-3 justify-start gap-10'>
          <div className="mb-4.5 w-100">
                <label className="mb-2.5 block text-black dark:text-white font-medium text-sm">
                  Nama PIC Inspeksi
                </label>
                <div className="relative z-20 bg-transparent dark:bg-form-input">
                  <select value={form.nama_PIC} onChange={handleInputChange} name="nama_PIC" className="shadow text-sm relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-2 px-4 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                    <option value="" disabled selected>Type your subject</option>
                    <option value="h idham pewata">H IDHAM PEWATA</option>
                    <option value="rizal">RIZAL</option>
                    <option value="fauzan auliah">FAUZAN AULIAH</option>
                    <option value="rezka">REZKA</option>
                    <option value="mahfud">MAHFUD</option>
                    <option value="maharoni">MAHARONI</option>
                    <option value="saharuddin">SAHARUDDIN</option>
                    <option value="timhar ultg">TIMHAR ULTG</option>
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
          <div className='mb-4.5 w-100 h-0'>
          <label className="mb-2.5 block text-black dark:text-white font-medium text-sm">
                  Unggah Gambar Sebelum
              </label>
              <div
                id='fileUpload'
                className='w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-medium outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary'
                // onClick={openModal}
              >
                <input
                  name='gambar_sebelum'
                  onChange={handleFileUpload}
                  type="file"
                  alt='asdf'
                  accept='image/*'
                  className="shadow text-sm w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
            </div>
            {/* <ImageUploadModal isOpen={isModalOpen} closeModal={closeModal}/> */}
          </div>  
        </div>

        <div className='flex grid-cols-2 mt-3 justify-start gap-10'>
        <div className="mb-4.5 w-100">
            <label className="mb-2.5 block text-black dark:text-white font-medium text-sm">
              No Tower
            </label>
            <input
              name='nomor_tower'
              onChange={handleInputChange}
              type="number"
              value={form.nomor_tower}
              placeholder="Input Nomor Tower"
              className="shadow text-sm w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
        </div>
        <div className='mb-4.5 w-100 h-0'>
        <label className="mb-2.5 block text-black dark:text-white font-medium text-sm">
                Unggah Gambar Setelah
            </label>
            <div
              id='fileUpload'
              className='w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-medium outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary'
              // onClick={openModal}
            >
              <input
                name='gambar_setelah'
                onChange={handleFileUpload}
                type="file"
                className="shadow text-sm w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primar"
              />
          </div>
        </div>   
            {/* <ImageUploadModal isOpen={isModalOpen} closeModal={closeModal} /> */}
        </div>

        {/* <div className='flex grid-cols-2 mt-3 justify-between'>
        <div className="mb-4.5 w-100">
            <label className="mb-2.5 block text-black dark:text-white font-medium text-sm">
              Jarak Pohon ke Konduktor
            </label>
            <input
              name='jarak'
              onChange={handleInputChange}
              type="text"
              placeholder="ex 3.6"
              className="shadow text-sm w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
          </div>

            <div className='mb-4.5 w-54'></div>

        </div> */}

        <button
            type="submit"
            className="flex w-50 mt-5 justify-center item-center mx-auto rounded bg-[#469AA7] p-3 font-medium text-gray"
            onClick={onSubmitHandler}
          >
            Submit
          </button>
      </div>
    </div>
    <ToastContainer position='bottom-right' />
    </>
    );
};

export default EditdataMonitoring;