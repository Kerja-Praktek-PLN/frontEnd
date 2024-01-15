// import { useState } from "react";
import { createElement, useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import TableBA from "../components/TableBA";
import { Link } from "react-router-dom";
import axios from "axios";
import JsPDF, { jsPDF } from 'jspdf';
import html2pdf from 'html2pdf.js';
import html2canvas from 'html2canvas';

const generatePDF = (component, props, filename) => {
    const element = createElement(component, props);
    console.log("element")
    console.log(element)
    const opt = {
        margin: 10,
        filename: filename,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    // html2pdf(element, opt);
    html2canvas(element)
        .then((canvas) => {
            const img = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(img)
            pdf.save("test.pdf")
        })
};



const BeritaAcara = () => {
    const [data,setData] = useState([])
    const [rute, setRute] = useState("")
    const [loading,setLoading] = useState(false)
    const [filter, setFilter] = useState({})

    const handleExport = () => {
        // const report = new jsPDF('landscape','px','a4');
        // report.html(createElement(TableBA, {dataBA: data}), {

        // }).then(() => {
        //     report.save('report.pdf');
        // });
        // console.log("exporting")
        generatePDF(TableBA, {dataBA: data}, 'example.pdf');
    }


    const fetchData = async () => {
        try {
            var query = Object.keys(filter).map((key) => `${key}=${filter[key]}`).join("&")
            query = new URL(`http://localhost:5000/BA?${query}`).href
            console.log(query)
            const response = await axios.get(query);
            const result = await response.data;
            setData(result);
            console.log(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    }

    const runFilter = (e: any) =>{
        console.log("filter berubah")
        const {value, name} = e.target
        setFilter((prev)=>{
            return{
                ...prev,
                [name] : value,
            }
        })
        console.log("filter")
        console.log(...filter)
        console.log({value, name})
    }

    useEffect(() => {
        console.log("page reload")
        fetchData();
    },[filter])

    return (
        <>
        <Breadcrumb pageName="Berita Acara" />
        <div className="bg-white">
        <h1 className="pl-3 pt-5 text-black text-opacity-70 text-xl font-medium">Rute Transmisi</h1>
        <div className="flex justify-between p-5">
            <div className="mb-4.5">
            <div className="relative z-20 bg-transparent dark:bg-form-input drop-shadow-lg w-54 bg-white rounded-sm">
                <select onChange={runFilter} name="rute" className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                    <option value="ALL" selected>No Filter</option>
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
            <div>
                <button
                    className="bg-[#469AA7] text-white py-2 px-4 mr-5 rounded hover:bg-primary-dark transition duration-300 w-28 h-10"
                >
                <Link to="/NewDataBA">New Data</Link>
                </button>
                <button
                    className="bg-danger text-white py-2 px-4 rounded hover:bg-primary-dark transition duration-300 h-10"
                    // onClick={handleExport}berit
                >
                
                <Link to="/ExportToPDF">Export to PDF</Link>
                </button>
            </div>
            </div>
            <h1 className="pl-3 text-black text-opacity-70 text-xl font-medium">Tanggal</h1>
            <div className="mb-4.5 p-5">
                <div className="relative z-20 bg-transparent dark:bg-form-input drop-shadow-lg w-54 bg-white rounded-sm">
                <input
                    type="date"
                    onChange={runFilter}
                    name="tanggal"
                    className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
                </div>
            </div>
            <TableBA dataBA={data} />
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

export default BeritaAcara;