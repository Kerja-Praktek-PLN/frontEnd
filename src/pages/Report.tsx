import Breadcrumb from "../components/Breadcrumb";
import ChartReport from "../components/ChartReport";

const report = () => {
    return (
      <>
       <Breadcrumb pageName="Report" />
        <div className="text-black text-opacity-70 text-xl font-medium">
          ULTG Maros
        </div>
        <div className="mt-5">
            <ChartReport />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
            <div className="w-full bg-white p-4 md:p-5 lg:p-6 rounded shadow-lg">
                <div className="w-60 h-5 text-black text-opacity-50 text-base font-medium">PLN GARDU INDUK DAYA</div>
                <div className="w-60 h-5 mt-5 text-black text-opacity-50 text-base font-medium">TOTAL:</div>
                <div className="w-24 h-14 mt-5 text-black text-opacity-50 text-3xl font-medium">149</div>
            </div>
            <div className="w-full bg-white p-4 md:p-5 lg:p-6 rounded shadow-lg">
                <div className="h-5 text-black text-opacity-50 text-base font-medium">GARDU INDUK 150KV TELLO</div>
                <div className="w-60 h-5 mt-5 text-black text-opacity-50 text-base font-medium">TOTAL:</div>
                <div className="w-24 h-14 mt-5 text-black text-opacity-50 text-3xl font-medium">122</div>
            </div>
            <div className="w-full bg-white p-4 md:p-5 lg:p-6 rounded shadow-lg">
                <div className="h-5 text-black text-opacity-50 text-base font-medium">Gardu Induk PLN V Mandai</div>
                <div className="w-60 h-5 mt-5 text-black text-opacity-50 text-base font-medium">TOTAL:</div>
                <div className="w-24 h-14 mt-5 text-black text-opacity-50 text-3xl font-medium">199</div>
            </div>
            <div className="w-full bg-white p-4 md:p-5 lg:p-6 rounded shadow-lg">
                <div className="h-5 text-black text-opacity-50 text-base font-medium">PLN GARDU INDUK KIMA</div>
                <div className="w-60 h-5 mt-5 text-black text-opacity-50 text-base font-medium">TOTAL:</div>
                <div className="w-24 h-14 mt-5 text-black text-opacity-50 text-3xl font-medium">120</div>
            </div>
            <div className="w-full bg-white p-4 md:p-5 lg:p-6 rounded shadow-lg">
                <div className="h-5 text-black text-opacity-50 text-base font-medium">PLN GARDU INDUK MAROS</div>
                <div className="w-60 h-5 mt-5 text-black text-opacity-50 text-base font-medium">TOTAL:</div>
                <div className="w-24 h-14 mt-5 text-black text-opacity-50 text-3xl font-medium">239</div>
            </div>
            <div className="w-full bg-white p-4 md:p-5 lg:p-6 rounded shadow-lg">
                <div className="h-5 text-black text-opacity-50 text-base font-medium">PLN GARDU INDUK BOSOWA</div>
                <div className="w-60 h-5 mt-5 text-black text-opacity-50 text-base font-medium">TOTAL:</div>
                <div className="w-24 h-14 mt-5 text-black text-opacity-50 text-3xl font-medium">93</div>
            </div>
        </div>
      </>
    );
  };
  
  export default report;
  