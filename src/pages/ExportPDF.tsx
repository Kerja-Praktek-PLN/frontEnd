import { useEffect, useState } from 'react';
import JsPDF, { jsPDF } from 'jspdf';
import TableExport from '../components/TableExport';
import axios from 'axios';
import html2canvas from 'html2canvas';

const ExportPDF = () => {
  const [data,setData] = useState([])
  const fetchData = async () => {
        try {
            // var query = Object.keys(filter).map((key) => `${key}=${filter[key]}`).join("&")
            const query = new URL(`http://localhost:5000/BA`)
            console.log(query)
            const response = await axios.get(query);
            const result = await response.data;
            setData(result);
            console.log(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        console.log("page reload")
        fetchData();
    },[])

    const handleExport = async () => {
      const pdf = new jsPDF("portrait", "pt", "a4");
      const data = await html2canvas(document.getElementById('coba'), {
        useCORS: true
      });
      const img = data.toDataURL("image/png");
      const imgProperties = pdf.getImageProperties(img);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
      pdf.addImage(img, "PNG", 0, 100, pdfWidth+10, pdfHeight+10);
      pdf.save(`${new Date().toUTCString()}_report.pdf`);
    }
  
  return (
    <>
      <button
        className="bg-danger m-10 text-white py-2 px-4 rounded hover:bg-primary-dark transition duration-300 h-10"
        onClick={handleExport}
      >
        Export To PDF
      </button>
      <TableExport id="coba" data={data}/>
    </>
  );
};

export default ExportPDF;
