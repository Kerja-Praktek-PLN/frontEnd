import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import EditModal from "./ModalEdit";
import DeleteConfirmationModal from "./ModalDelete";
import { Link } from 'react-router-dom';
import { BsCloudFog, BsColumnsGap } from 'react-icons/bs';
import axios from 'axios';

type EditModalProps = {
  isOpen: boolean;
  closeModal: () => void;
  handleEdit: (data: { name: string; link: string }) => void;
};

const TableBA = ({dataBA}) => {
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const [data, setData] = useState([]);
  
  const [editedName, setEditedName] = useState('');
  const [editedLink, setEditedlink] = useState('');
  const [deleteTarget, setDeleteTarget]= useState(null);

  useEffect(() => {
    console.log("dataBA dari tableBA");
    console.log(dataBA);
    setData(dataBA);
  },[dataBA])



  const openEditModal = () => {
    setEditModalOpen(true);

    setEditedName(name);
    setEditedlink(link);
  };

  const handleEditData = () => {
    setName(name);
    setLink(link);

    setEditModalOpen(false);
  };

  const openDeleteModal = (id: number) => {
    setDeleteModalOpen(true);
    setDeleteTarget(id)
  };

  const handleDelete = async () => {
    console.log("id confirmed deletion")
    console.log(deleteTarget)
    setData(prev => 
      data.filter((item) => item.id !== deleteTarget)
    )
    const result = await axios.delete(`http://localhost:5000/BA/${deleteTarget}`)
    if(result.status === 200){
      console.log("success")
    }
    else {
      console.log("failed")
      console.log(result)
    }
    setDeleteModalOpen(false);
  };
  return (
    <>
      <div id="pdf-content" className="flex flex-col px-20 pb-10 overflow-x-auto">
        <div className="grid grid-cols-8 rounded-sm bg-gray-2 border dark:bg-meta-4 sm:grid-cols-12">
          <div className="hidden sm:block p-1.5 xl:p-2.5 border-r">
            <h5 className="text-xs font-medium font-bold xsm:text-sm">
              No.
            </h5>
          </div>
          <div className="p-1.5 text-center xl:p-2.5 border-r col-span-2">
            <h5 className="text-xs font-medium font-bold xsm:text-sm">
              Nama PIC Inspeksi
            </h5>
          </div>
          <div className="hidden p-1.5 text-center sm:block xl:p-2.5 border-r">
            <h5 className="text-xs font-medium font-bold xsm:text-sm">
              No Tower
            </h5>
          </div>
          <div className="flex flex-col items-center justify-center col-span-3 border-r">
            <div className="p-1.5 text-center xl:p-2.5 border-b w-full">
              <h5 className="text-xs font-medium font-bold xsm:text-sm">
                Tegakan
              </h5>
            </div>
            <div className="flex justify-between w-full">
              <div className="p-1.5 text-center xl:p-2.5 border-r w-1/3">
                <h5 className="text-xs font-medium font-bold xsm:text-sm">
                  Jumlah
                </h5>
              </div>
              <div className="p-1.5 text-center xl:p-2.5 border-r w-1/3">
                <h5 className="text-xs font-medium font-bold xsm:text-sm">
                  Status
                </h5>
              </div>
              <div className="p-1.5 text-center xl:p-2.5 w-1/3">
                <h5 className="text-xs font-medium font-bold xsm:text-sm">
                  Jenis Pohon
                </h5>
              </div>
            </div>
          </div>
          <div className="hidden p-1.5 text-center sm:block xl:p-2.5 border-r">
            <h5 className="text-xs font-medium font-bold xsm:text-sm">
              Jalur
            </h5>
          </div>
          <div className="hidden p-1.5 text-center xl:p-2.5 sm:block border-r w-full">
            <h5 className="text-xs font-medium font-bold xsm:text-sm">
              Tindak Lanjut
            </h5>
          </div>
          <div className="flex flex-col items-center justify-center col-span-2 border-r">
            <div className="p-2 text-center xl:p-3 border-b w-full">
              <h5 className="text-sm font-medium font-bold">
                Gambar
              </h5>
            </div>
            <div className="flex justify-between w-full">
              <div className="p-2 text-center xl:p-3 border-r w-1/2">
                <h5 className="text-sm font-medium font-bold">
                  Sebelum
                </h5>
              </div>
              <div className="p-2 text-center xl:p-3 w-1/2">
                <h5 className="text-sm font-medium font-bold">
                  Sesudah
                </h5>
              </div>
            </div>
          </div>
          <div className="hidden p-1.5 text-center xl:p-2.5 sm:block w-full">
            <h5 className="text-xs font-medium font-bold xsm:text-sm">
              Action
            </h5>
          </div>
        </div>
        {data.map((item, i)=>
         <div key={i} className="grid grid-cols-8 border sm:grid-cols-12">
          <div className="hidden sm:block p-1.5 xl:p-2.5 border-r">
            <p className="text-xs text-black dark:text-white sm:block">{i+1}</p>
          </div>

          <div className="sm:block p-1.5 xl:p-2.5 border-r col-span-2">
            <p className="text-xs text-black dark:text-white sm:block">{item.nama_PIC}</p>
          </div>

          <div className="sm:block p-1.5 xl:p-2.5 border-r">
            {item?.monitoringRow.length !== 0 ? item.monitoringRow.map((mr)=>
              <p className="text-xs text-black p-1.5 dark:text-white sm:block">{mr.nomor_tower}</p>
            ) :
              <p className="text-xs text-black p-1.5 dark:text-white sm:block">{item.nomor_tower}</p>
            }
          </div>

          <div className="flex flex-col items-between justify-center col-span-3 border-r">
              {item.monitoringRow.map((mr)=>
              <div className="flex justify-between w-full h-full">
                  <div className="sm:block p-1.5 xl:p-2.5 border-r border-b w-1/3 h-full">
                    <p className="text-xs text-black dark:text-white sm:block">{mr.jumlah_tegakan}</p>
                  </div>
                  <div className="sm:block p-1.5 xl:p-2.5 border-r border-b w-1/3">
                    <p className="text-xs text-black dark:text-white sm:block">{mr.status_tegakan}</p>
                  </div>
                  <div className="sm:block p-1.5 xl:p-2.5 border-b flex w-1/3">
                    <p className="text-xs text-black dark:text-white sm:block">{mr.jenis_pohon}</p>
                  </div>
              </div>
              )}
          </div>
          
          <div className="sm:block p-1.5 xl:p-2.5 border-r">
            {item.monitoringRow.map((mr)=>
              <p className="text-xs text-black p-1.5 dark:text-white sm:block">{mr.jalur}</p>
            )}
          </div>

          <div className="sm:block p-1.5 xl:p-2.5 border-r">
            <p className="text-xs text-black dark:text-white sm:block">{item.tindak_lanjut}</p>
          </div>

          <div className="flex flex-col items-center justify-center col-span-2 border-r">
            <div className="flex justify-between w-full">
              <div className="sm:block p-1.5 xl:p-2.5 border-r w-1/2 h-full">
                {/* <p className="text-xs text-black dark:text-white sm:block">Image Sebelum</p> */}
                <img src={item.gambar_sebelum} alt="Gambar Sebelum" className='w-full' />
              </div>
              <div className="sm:block p-1.5 xl:p-2.5 w-1/2">
                {/* <p className="text-xs text-black dark:text-white sm:block">Image Sesudah</p> */}
                <img src={item.gambar_setelah} alt="Gambar Setelah" className='w-full pb-1' />
              </div>
            </div>
          </div>

          <div className="items-center justify-center p-1.5 sm:flex xl:p-2.5 ">
            <div className="flex items-center space-x-2 ">
              <Link to={`/Editdataba/${item.id}`} >
                <button
                  className="hover:text-primary bg-[#42AEC3] p-0.5 mt-0.5 rounded-sm shadow border"

                >
                  <svg
                    className="fill-current"
                    width="16"
                    height="16"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.2276 2.27225L18.7277 2.77238C19.1163 3.1609 19.1163 3.78916 18.7277 4.17355L17.525 5.38046L15.6195 3.47503L16.8223 2.27225C17.2108 1.88373 17.8391 1.88373 18.2235 2.27225H18.2276ZM8.67155 10.4272L14.2184 4.8762L16.1238 6.78163L10.5728 12.3284C10.453 12.4483 10.3042 12.5351 10.143 12.5806L7.72504 13.2708L8.41529 10.8529C8.46076 10.6917 8.54756 10.5429 8.66742 10.423L8.67155 10.4272ZM15.4211 0.871082L7.26625 9.02185C6.90666 9.38144 6.64626 9.8237 6.50987 10.3073L5.32776 14.4405C5.22856 14.7877 5.32362 15.1597 5.57988 15.416C5.83615 15.6722 6.20814 15.7673 6.55533 15.6681L10.6886 14.486C11.1763 14.3455 11.6186 14.0851 11.974 13.7296L20.1289 5.57885C21.2904 4.41741 21.2904 2.53265 20.1289 1.3712L19.6288 0.871082C18.4674 -0.290361 16.5826 -0.290361 15.4211 0.871082ZM3.63726 2.48305C1.6285 2.48305 0 4.11155 0 6.12031V17.3627C0 19.3715 1.6285 21 3.63726 21H14.8797C16.8885 21 18.517 19.3715 18.517 17.3627V12.7335C18.517 12.1838 18.0747 11.7415 17.525 11.7415C16.9752 11.7415 16.533 12.1838 16.533 12.7335V17.3627C16.533 18.2762 15.7931 19.016 14.8797 19.016H3.63726C2.72381 19.016 1.98396 18.2762 1.98396 17.3627V6.12031C1.98396 5.20686 2.72381 4.46701 3.63726 4.46701H8.2665C8.81622 4.46701 9.25848 4.02475 9.25848 3.47503C9.25848 2.92531 8.81622 2.48305 8.2665 2.48305H3.63726Z"
                      fill="black"
                    />
                  </svg>
                </button>
              </Link>
              <button
                className="hover:text-primary bg-[#FF0000] p-0.5 rounded-sm border shadow"
                onClick={()=>{openDeleteModal(item.id)}}
              >
                <svg
                  className="fill-current"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.7535 2.47502H11.5879V1.9969C11.5879 1.15315 10.9129 0.478149 10.0691 0.478149H7.90352C7.05977 0.478149 6.38477 1.15315 6.38477 1.9969V2.47502H4.21914C3.40352 2.47502 2.72852 3.15002 2.72852 3.96565V4.8094C2.72852 5.42815 3.09414 5.9344 3.62852 6.1594L4.07852 15.4688C4.13477 16.6219 5.09102 17.5219 6.24414 17.5219H11.7004C12.8535 17.5219 13.8098 16.6219 13.866 15.4688L14.3441 6.13127C14.8785 5.90627 15.2441 5.3719 15.2441 4.78127V3.93752C15.2441 3.15002 14.5691 2.47502 13.7535 2.47502ZM7.67852 1.9969C7.67852 1.85627 7.79102 1.74377 7.93164 1.74377H10.0973C10.2379 1.74377 10.3504 1.85627 10.3504 1.9969V2.47502H7.70664V1.9969H7.67852ZM4.02227 3.96565C4.02227 3.85315 4.10664 3.74065 4.24727 3.74065H13.7535C13.866 3.74065 13.9785 3.82502 13.9785 3.96565V4.8094C13.9785 4.9219 13.8941 5.0344 13.7535 5.0344H4.24727C4.13477 5.0344 4.02227 4.95002 4.02227 4.8094V3.96565ZM11.7285 16.2563H6.27227C5.79414 16.2563 5.40039 15.8906 5.37227 15.3844L4.95039 6.2719H13.0785L12.6566 15.3844C12.6004 15.8625 12.2066 16.2563 11.7285 16.2563Z"
                    fill="black"
                  />
                  <path
                    d="M9.00039 9.11255C8.66289 9.11255 8.35352 9.3938 8.35352 9.75942V13.3313C8.35352 13.6688 8.63477 13.9782 9.00039 13.9782C9.33789 13.9782 9.64727 13.6969 9.64727 13.3313V9.75942C9.64727 9.3938 9.33789 9.11255 9.00039 9.11255Z"
                    fill="black"
                  />
                  <path
                    d="M11.2502 9.67504C10.8846 9.64692 10.6033 9.90004 10.5752 10.2657L10.4064 12.7407C10.3783 13.0782 10.6314 13.3875 10.9971 13.4157C11.0252 13.4157 11.0252 13.4157 11.0533 13.4157C11.3908 13.4157 11.6721 13.1625 11.6721 12.825L11.8408 10.35C11.8408 9.98442 11.5877 9.70317 11.2502 9.67504Z"
                    fill="black"
                  />
                  <path
                    d="M6.72245 9.67504C6.38495 9.70317 6.1037 10.0125 6.13182 10.35L6.3287 12.825C6.35683 13.1625 6.63808 13.4157 6.94745 13.4157C6.97558 13.4157 6.97558 13.4157 7.0037 13.4157C7.3412 13.3875 7.62245 13.0782 7.59433 12.7407L7.39745 10.2657C7.39745 9.90004 7.08808 9.64692 6.72245 9.67504Z"
                    fill="black"
                  />
                </svg>
              </button>
            </div>
          </div>
          </div>
        )}
        

        {/* Render the EditModal */}
        {/* <EditModal
          isOpen={isEditModalOpen}
          closeModal={() => setEditModalOpen(false)}
          handleEdit={handleEdit}
        /> */}

        {/* Render the DeleteConfirmationModal */}
        <DeleteConfirmationModal
          isOpen={isDeleteModalOpen}
          closeModal={() => setDeleteModalOpen(false)}
          handleDelete={handleDelete}
          id={deleteTarget}
        />
      </div>
    </>
  );
};

export default TableBA;