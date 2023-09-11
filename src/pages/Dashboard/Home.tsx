import CardFour from '../../components/CardFour.tsx';
import CardOne from '../../components/CardOne.tsx';
import CardThree from '../../components/CardThree.tsx';
import CardTwo from '../../components/CardTwo.tsx';
import ChartOne from '../../components/ChartOne.tsx';
import ChartThree from '../../components/ChartThree.tsx';
import ChartTwo from '../../components/ChartTwo.tsx';
import ChatCard from '../../components/ChatCard.tsx';
import MapOne from '../../components/MapOne.tsx';
import TableOne from '../../components/TableOne.tsx';

const Home = () => {
  return (
    <>
      <div className="text-black text-opacity-70 text-xl font-medium">
        ULTG Maros
      </div>
      <div className='w-full h-full bg-white mt-7 p-5 drop-shadow-lg'>
         <span className='text-black text-lg font-medium'>Selamat Datang di Portal </span>
         <span className='text-black text-lg font-medium text-[#469AA7]'>Perusahaan Listrik Negara</span><br/><br/>
         <span className='text-black text-lg font-medium'>PLN memiliki visi untuk menjadi Perusahaan Listrik Terkemuka se-Asia Tenggara dan #1 Pilihan Pelanggan untuk Solusi Energi. </span> <br/><br/>
         <span className='text-black text-lg font-medium'>Dalam mewujudkan visi tersebut, PLN mengemban misi untuk menjalankan bisnis kelistrikan dan bidang lain yang terkait, berorientasi pada kepuasan pelanggan, anggota perusahaan dan pemegang saham. PLN juga bertekad untuk menjadikan tenaga listrik sebagai media meningkatkan kualitas kehidupan masyarakat serta mengupayakan agar tenaga listrik menjadi pendorong kegiatan ekonomi. Dalam kesehariannya PLN selalu berupaya menjalankan kegiatan usaha yang berwawasan lingkungan</span>
      </div>
    </>
  );
};

export default Home;
