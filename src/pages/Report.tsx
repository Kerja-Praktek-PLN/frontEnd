import axios from "axios";
import Breadcrumb from "../components/Breadcrumb";
import ChartReport from "../components/ChartReport";
<<<<<<< HEAD
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
=======
import React, { useState } from "react";
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import { useEffect } from "react";

const report = () => {
    const initialTotals = {
        daya : 149,
        tello : 122,
        mandai : 199,
        kima : 120,
        maros : 239,
        bosowa : 93, 
    }

    // const saveToLocalStorage = () => {
    //     localStorage.setItem("garduIndukTotals", JSON.stringify(totals));
    // };
    
    // const loadFromLocalStorage = () => {
    //     const savedTotals = localStorage.getItem("garduIndukTotals");
    //     return savedTotals ? JSON.parse(savedTotals) : initialTotals;
    // };
    
    // // Use loadFromLocalStorage when initializing state
    // const [totals, setTotals] = useState(loadFromLocalStorage());
    

    type TotalsKey = keyof typeof initialTotals;

    const [totals, setTotals] = useState(initialTotals);

    const increment = (key: TotalsKey) => {
        setTotals(prevTotals => ({ ...prevTotals, [key]: prevTotals[key] + 1 }));
    };

    const decrement = (key: TotalsKey) => {
        setTotals(prevTotals => ({ ...prevTotals, [key]: Math.max(0, prevTotals[key] - 1) }));
    };

    const [chartSeries, setChartSeries] = useState([
        {name: 'daya', data: [initialTotals.daya] },
        {name: 'tello', data: [initialTotals.tello] },
        {name: 'mandai', data: [initialTotals.mandai] },
        {name: 'kima', data: [initialTotals.kima] },
        {name: 'maros', data: [initialTotals.maros] },
        {name: 'bosowa', data: [initialTotals.bosowa] },
    ]);

    useEffect(() => {
        // Construct a new series array based on the updated totals
        const updatedSeries = [
          { name: 'Gardu Induk Daya', data: [totals.daya] },
          { name: 'Gardu Induk Tello', data: [totals.tello] },
          { name: 'Gardu Induk Mandai', data: [totals.mandai] },
          { name: 'Gardu Induk Kima', data: [totals.kima] },
          { name: 'Gardu Induk Maros', data: [totals.maros] },
          { name: 'Gardu Induk Bosowa', data: [totals.bosowa] },
        ];
        
        setChartSeries(updatedSeries);
        console.log(chartSeries);
    }, [totals]); // Only re-run the effect if totals changes
        
>>>>>>> a8cf4c21c894d02e51b3678598ef348808907633

    return (
      <>
       <Breadcrumb pageName="Report" />
        <div className="text-black text-opacity-70 text-xl font-medium">
          ULTG Maros
        </div>
<<<<<<< HEAD
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
            {data.map((item, i) => 
            <div title="double click to edit" onDoubleClick={()=>handleEditButton(item)} className=" cursor-pointer w-full bg-white p-4 md:p-5 lg:p-6 rounded shadow-lg">
                <div className="w-60 h-5 text-black text-opacity-50 text-base font-medium">{item.name}</div>
                <div className="w-60 h-5 mt-5 text-black text-opacity-50 text-base font-medium">TOTAL:</div>
                <div className="w-24 h-14 mt-5 text-black text-opacity-50 text-3xl font-medium">{item.jumlah}</div>
=======
        <div className="mt-5">
            <ChartReport seriesData={chartSeries} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
            <div className="w-full bg-white p-4 md:p-5 lg:p-6 rounded shadow-lg">
                <div className="flex justify-between">
                    <div className="w-60 h-5 text-black text-opacity-50 text-base font-medium">PLN GARDU INDUK DAYA</div>
                    <button className="mr-2" onClick={() => decrement('daya')}>-</button>
                    <button onClick={() => increment('daya')}>+</button>
                </div>
                <div className="w-60 h-5 mt-5 text-black text-opacity-50 text-base font-medium">TOTAL:</div>
                <div className="w-24 h-14 mt-5 text-black text-opacity-50 text-3xl font-medium">{totals.daya}</div>
            </div>
            <div className="w-full bg-white p-4 md:p-5 lg:p-6 rounded shadow-lg">
                <div className="flex justify-between">
                    <div className="w-60 h-5 text-black text-opacity-50 text-base font-medium">GARDU INDUK 150KV TELLO</div>
                    <button className="mr-2" onClick={() => decrement('tello')}>-</button>
                    <button onClick={() => increment('tello')}>+</button>
                </div>
                <div className="w-60 h-5 mt-5 text-black text-opacity-50 text-base font-medium">TOTAL:</div>
                <div className="w-24 h-14 mt-5 text-black text-opacity-50 text-3xl font-medium">{totals.tello}</div>                
            </div>
            <div className="w-full bg-white p-4 md:p-5 lg:p-6 rounded shadow-lg">
                <div className="flex justify-between">
                    <div className="w-60 h-5 text-black text-opacity-50 text-base font-medium">Gardu Induk PLN V Mandai</div>
                    <button className="mr-2" onClick={() => decrement('mandai')}>-</button>
                    <button onClick={() => increment('mandai')}>+</button>
                </div>
                <div className="w-60 h-5 mt-5 text-black text-opacity-50 text-base font-medium">TOTAL:</div>
                <div className="w-24 h-14 mt-5 text-black text-opacity-50 text-3xl font-medium">{totals.mandai}</div>              
            </div>
            <div className="w-full bg-white p-4 md:p-5 lg:p-6 rounded shadow-lg">
                <div className="flex justify-between">
                    <div className="w-60 h-5 text-black text-opacity-50 text-base font-medium">PLN GARDU INDUK KIMA</div>
                    <button className="mr-2" onClick={() => decrement('kima')}>-</button>
                    <button onClick={() => increment('kima')}>+</button>
                </div>
                <div className="w-60 h-5 mt-5 text-black text-opacity-50 text-base font-medium">TOTAL:</div>
                <div className="w-24 h-14 mt-5 text-black text-opacity-50 text-3xl font-medium">{totals.kima}</div>
            </div>
            <div className="w-full bg-white p-4 md:p-5 lg:p-6 rounded shadow-lg">
                <div className="flex justify-between">
                    <div className="w-60 h-5 text-black text-opacity-50 text-base font-medium">PLN GARDU INDUK MAROS</div>
                    <button className="mr-2" onClick={() => decrement('maros')}>-</button>
                    <button onClick={() => increment('maros')}>+</button>
                </div>
                <div className="w-60 h-5 mt-5 text-black text-opacity-50 text-base font-medium">TOTAL:</div>
                <div className="w-24 h-14 mt-5 text-black text-opacity-50 text-3xl font-medium">{totals.maros}</div>                
            </div>
            <div className="w-full bg-white p-4 md:p-5 lg:p-6 rounded shadow-lg">
                <div className="flex justify-between">
                    <div className="w-60 h-5 text-black text-opacity-50 text-base font-medium">PLN GARDU INDUK BOSOWA</div>
                    <button className="mr-2" onClick={() => decrement('bosowa')}>-</button>
                    <button onClick={() => increment('bosowa')}>+</button>
                </div>
                <div className="w-60 h-5 mt-5 text-black text-opacity-50 text-base font-medium">TOTAL:</div>
                <div className="w-24 h-14 mt-5 text-black text-opacity-50 text-3xl font-medium">{totals.bosowa}</div>
>>>>>>> a8cf4c21c894d02e51b3678598ef348808907633
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
  