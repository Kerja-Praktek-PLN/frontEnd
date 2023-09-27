import { Link } from "react-router-dom";

const Forgetpass = () => {
    return (
        <>
        <div className="rounded-sm border border-stroke bg-whiteshadow-default dark:border-strokedark dark:bg-boxdark w-full h-full bg-fixed"
      style={{
      backgroundImage: 'url("/src/images/bg2.png")',
      backgroundSize: 'cover',
        }}>
            <div className="w-full dark:border-strokedark xl:w-1/2 mx-auto max-w-screen-sm bg-white m-50">
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
                Masukkan email Anda dibawah ini. Kami akan mengirimkan pesan kode verifikasi untuk reset kata sandi Anda
            </span>
              <form>
                <div className="my-4">
                  <div className="relative bg-[#E5E5E5] rounded-md">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />

                    <span className="absolute right-4 top-4">
                      <svg
                        className="fill-current"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.5">
                          <path
                            d="M19.2516 3.30005H2.75156C1.58281 3.30005 0.585938 4.26255 0.585938 5.46567V16.6032C0.585938 17.7719 1.54844 18.7688 2.75156 18.7688H19.2516C20.4203 18.7688 21.4172 17.8063 21.4172 16.6032V5.4313C21.4172 4.26255 20.4203 3.30005 19.2516 3.30005ZM19.2516 4.84692C19.2859 4.84692 19.3203 4.84692 19.3547 4.84692L11.0016 10.2094L2.64844 4.84692C2.68281 4.84692 2.71719 4.84692 2.75156 4.84692H19.2516ZM19.2516 17.1532H2.75156C2.40781 17.1532 2.13281 16.8782 2.13281 16.5344V6.35942L10.1766 11.5157C10.4172 11.6875 10.6922 11.7563 10.9672 11.7563C11.2422 11.7563 11.5172 11.6875 11.7578 11.5157L19.8016 6.35942V16.5688C19.8703 16.9125 19.5953 17.1532 19.2516 17.1532Z"
                            fill=""
                          />
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>


                <div className="mb-5">
                {/* <Link to="/auth/ConfirForgetpass"> */}
                  <input
                    type="submit"
                    value="Reset"
                    className="w-full cursor-pointer rounded-lg bg-[#9BDBE3] p-4 text-[#2B2B2B] font-bold transition hover:bg-opacity-90 break-words"
                  />
                  {/* </Link> */}
                </div>
              </form>
            </div>
          </div>
        </div>
        </>
    )
}

export default Forgetpass;