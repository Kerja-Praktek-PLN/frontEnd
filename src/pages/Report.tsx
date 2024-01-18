import axios from "axios";
import Breadcrumb from "../components/Breadcrumb";
import ChartReport from "../components/ChartReport";
import { useEffect, useState } from "react";

const report = () => {
    const [data, setData] = useState([])
    const [modal, setModal] = useState(false)
    const [name, setName] = useState("")
    const [jumlah, setJumlah] = useState(0)
    const [id, setId] = useState(0)

    const fetchData = async () => {
        const response = await axios.get('http://localhost:5000/tower')
        const result = response.data
        console.log(result)
        setData(result)
    }

    useEffect(() => {
        fetchData()
    }, [])


    const handleEditButton = (item) => {
        setModal(true)
        setJumlah(item.jumlah)
        setName(item.name)
        setId(item.id)
    }

    const handleInputChange = (event) => {
        if(event.target.name === "name") setName(event.target.value)
        if(event.target.name === "jumlah") setJumlah(event.target.value)
    }

    const editTower = async (id) => {
        try {
            const response = await axios.put(`http://localhost:5000/tower/${id}`, {
                name,
                jumlah
            })

        } catch (error) {
            console.log(error)
        } finally{
            fetchData()
        }
    }

    return (
      <>
       <Breadcrumb pageName="Report" />
        <div className="text-black text-opacity-70 text-xl font-medium">
          ULTG Maros
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
            {data.map((item, i) => 
            <div title="double click to edit" onDoubleClick={()=>handleEditButton(item)} className=" cursor-pointer w-full bg-white p-4 md:p-5 lg:p-6 rounded shadow-lg">
                <div className="w-60 h-5 text-black text-opacity-50 text-base font-medium">{item.name}</div>
                <div className="w-60 h-5 mt-5 text-black text-opacity-50 text-base font-medium">TOTAL:</div>
                <div className="w-24 h-14 mt-5 text-black text-opacity-50 text-3xl font-medium">{item.jumlah}</div>
            </div>
            )}
        </div>

        {modal && <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40">
              <div className="bg-white p-8 max-w-lg mx-auto rounded shadow-lg w-full">
                <div className="flex justify-between mb-4 justify-center">
                  <h2 className="text-2xl font-medium">Update Data Tower</h2>
                  <button
                    className="text-gray-500 hover:text-gray-600 opacity-40"
                    onClick={() => setModal(false)}
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
                        name="name"
                        value={name}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border-[1.5px] border-stroke bg-[#E5E5E5] py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                    </div>
                    <div className="my-5 mx-4">
                      <input
                        type="number"
                        placeholder="Jumlah"
                        value={jumlah}
                        name="jumlah"
                        onChange={handleInputChange}
                        className="w-full rounded-lg border-[1.5px] border-stroke bg-[#E5E5E5] py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                    </div>
                <div className="flex justify-end pb-5">
                  <div className="flex-grow"></div> 
                  <button
                    className="bg-[#469AA7] text-white py-2 px-4 rounded hover:bg-primary-dark transition duration-300"
                    onClick={() => {
                        editTower(id)
                        setModal(false)
                    }}
                  >
                    Update Data
                  </button>
                  </div> 
              </div>
            </div>}
      </>
    );
  };
  
  export default report;
  