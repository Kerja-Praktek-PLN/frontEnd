import { Link } from "react-router-dom";

const ConfirForgetpass = () => {
    return (
        <>
        <div className="rounded-sm border border-stroke bg-whiteshadow-default dark:border-strokedark dark:bg-boxdark w-full h-full bg-fixed"
      style={{
      backgroundImage: 'url("/src/images/bg2.png")',
      backgroundSize: 'cover',
        }}>
            <div className="w-full h-full dark:border-strokedark xl:w-1/2 mx-auto max-w-screen-sm bg-white m-50 pb-40">
            <div className='flex w-full p-5 items-center justify-between'>
                <img src="/src/images/Logo_PLN.png" alt="background" className='h-16'></img>
                <h2 className="text-2xl text-black dark:text-white sm:text-title-xl2 font-bold">
                  Lupa Kata Sandi ?
                </h2>
                <div className="flex justify-center">
                  <p>
                    <Link to="/auth/signin" className="text-primary font-medium">
                      Kembali
                    </Link>
                  </p>
                </div>
              </div>
            <div className="h-px border border-black mx-5"/>
            <div className="w-full p-2 sm:p-5.5 xl:p-10.5">
            <span className="text-black text-opacity-40 font-medium">
                Kata sandi anda telah terganti, silahkan login kembali
            </span>
            </div>
          </div>
        </div>
        </>
    )
}

export default ConfirForgetpass;