import Breadcrumb from "../components/Breadcrumb";
import ChartReport from "../components/ChartReport";
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
        

    return (
      <>
       <Breadcrumb pageName="Report" />
        <div className="text-black text-opacity-70 text-xl font-medium">
          ULTG Maros
        </div>
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
            </div>
        </div>
      </>
    );
  };
  
  export default report;
  