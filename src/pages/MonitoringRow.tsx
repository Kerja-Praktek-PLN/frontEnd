import Breadcrumb from "../components/Breadcrumb";
import EditdataMonitoring from "../components/EditDataMonitoring";
import deletedatamonitoring from "../components/DeleteDataMonitoring";
import TableMonitoring from "../components/Table Monitoringrow";
import { Link } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";


const MonitoringRow = () => {
    const [data,setData] = useState([{}])
    const [filter, setFilter] = useState("")

    const fetchData = async () => {
      try {  
        var query = new URL(`http://localhost:5000/row?rute_transmisi=${filter}`).href
        const response = await axios.get(query)
        console.log(query)
        const result = response.data
        console.log(result)
        setData(prev => result)
      } catch (error) {
        console.log(error)
      }
    }

<<<<<<< HEAD
  const handleDelete = async (id) => {
    const response = await axios.delete(`http://localhost:5000/row/${id}`)
    fetchData()
  };

    useEffect(() =>{
      fetchData()
=======
    useEffect(() =>{
      fetchData()
      console.log("data")
      console.log(data)
>>>>>>> a8cf4c21c894d02e51b3678598ef348808907633
    },[filter])

    const runFilter = (e: any) =>{
      setFilter(e.target.value)
    }


    return (
      <>
      <Breadcrumb pageName="Monitoring Row" />
      <div className="bg-white">
       <h1 className="pl-3 pt-5 text-black text-opacity-70 text-xl font-medium">Rute Transmisi</h1>
       <div className="flex justify-between p-5">
        <div className="mb-4.5">
          <div className="relative z-20 bg-transparent dark:bg-form-input drop-shadow-lg w-54 bg-white rounded-sm">
            <select onChange={runFilter} className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
              <option value="Tello - Mandai">Tello - Mandai</option>
              <option value="Mandai - Pangkep">Mandai - Pangkep</option>
              <option value="Maros - DayaBaru">Maros - DayaBaru</option>
              <option value="Bosowa - Incomer">Bosowa - Incomer </option>
              <option value="Pangkep - Tonasa">Pangkep - Tonasa</option>
              <option value="Pangkep - Tello">Pangkep - Tello</option>
              <option value="Balusu - Maros">Balusu - Maros</option>
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
          >
            <Link to="/NewDataMR">New Data</Link>
          </button>
        </div>
<<<<<<< HEAD
        <TableMonitoring dataMR={data} deleteHandler={handleDelete}/>
=======
        <TableMonitoring dataMR={data}/>
>>>>>>> a8cf4c21c894d02e51b3678598ef348808907633
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
      </>
    );
  };
  
export default MonitoringRow;
  