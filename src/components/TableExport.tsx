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

const TableExport = ({data, id}) => {
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const [content, setContent] = useState([]);
  
  const [editedName, setEditedName] = useState('');
  const [editedLink, setEditedlink] = useState('');
  const [deleteTarget, setDeleteTarget]= useState(null);

  useEffect(() => {
    console.log("data dari TableExport");
    console.log(data);
    setContent(data);
  },[data])


  
  return (
    <>
      <div id={id} className="flex flex-col px-20 pb-10 overflow-x-auto w-[900px]">
        <div className="grid grid-cols-11 rounded-sm bg-gray-2 border dark:bg-meta-4 sm:grid-cols-11">
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
        </div>
        {content.map((item, i)=>
         <div key={i} className="grid grid-cols-11 border sm:grid-cols-11">
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
                <img src={item.gambar_sebelum} alt="Gambar Sebelum" className='w-full pdf-image' />
              </div>
              <div className="sm:block p-1.5 xl:p-2.5 w-1/2">
                {/* <p className="text-xs text-black dark:text-white sm:block">Image Sesudah</p> */}
                <img src={item.gambar_setelah} alt="Gambar Setelah" className='w-full pb-1 pdf-image' />
              </div>
            </div>
          </div>
          </div>
        )}
      </div>
    </>
  );
};

export default TableExport;