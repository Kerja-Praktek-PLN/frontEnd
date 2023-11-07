import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
// import Logo from '../images/logo/logo.svg';
import SidebarLinkGroup from './SidebarLinkGroup';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded');
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-center bg-[#9BDBE3] gap-2 px-6 py-5.5 lg:py-6.5">
        <NavLink to="/home">
          <img src="/src/images/Logo_PLN.png" alt="Logo" className='w-20 h-28' />
        </NavLink>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          {/* <!-- Menu Group --> */}
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
              MENU
            </h3>

            <ul className="mb-6 flex flex-col gap-1.5">
              {/* <!-- Menu Item Dashboard --> */}
              <SidebarLinkGroup
                activeCondition={
                  pathname === '/' || pathname.includes('dashboard')
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                       {/* <!-- Menu Item Home --> */}
                      <li>
                        <NavLink
                          to="/home"
                          className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                            pathname.includes('home') &&
                            'bg-graydark dark:bg-meta-4'
                          }`}
                        >
                           <svg
                              className="fill-current"
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                            d="M6.10322 0.956299H2.53135C1.5751 0.956299 0.787598 1.7438 0.787598 2.70005V6.27192C0.787598 7.22817 1.5751 8.01567 2.53135 8.01567H6.10322C7.05947 8.01567 7.84697 7.22817 7.84697 6.27192V2.72817C7.8751 1.7438 7.0876 0.956299 6.10322 0.956299ZM6.60947 6.30005C6.60947 6.5813 6.38447 6.8063 6.10322 6.8063H2.53135C2.2501 6.8063 2.0251 6.5813 2.0251 6.30005V2.72817C2.0251 2.44692 2.2501 2.22192 2.53135 2.22192H6.10322C6.38447 2.22192 6.60947 2.44692 6.60947 2.72817V6.30005Z"
                            fill=""
                            />
                            <path
                              d="M15.4689 0.956299H11.8971C10.9408 0.956299 10.1533 1.7438 10.1533 2.70005V6.27192C10.1533 7.22817 10.9408 8.01567 11.8971 8.01567H15.4689C16.4252 8.01567 17.2127 7.22817 17.2127 6.27192V2.72817C17.2127 1.7438 16.4252 0.956299 15.4689 0.956299ZM15.9752 6.30005C15.9752 6.5813 15.7502 6.8063 15.4689 6.8063H11.8971C11.6158 6.8063 11.3908 6.5813 11.3908 6.30005V2.72817C11.3908 2.44692 11.6158 2.22192 11.8971 2.22192H15.4689C15.7502 2.22192 15.9752 2.44692 15.9752 2.72817V6.30005Z"
                              fill=""
                            />
                            <path
                              d="M6.10322 9.92822H2.53135C1.5751 9.92822 0.787598 10.7157 0.787598 11.672V15.2438C0.787598 16.2001 1.5751 16.9876 2.53135 16.9876H6.10322C7.05947 16.9876 7.84697 16.2001 7.84697 15.2438V11.7001C7.8751 10.7157 7.0876 9.92822 6.10322 9.92822ZM6.60947 15.272C6.60947 15.5532 6.38447 15.7782 6.10322 15.7782H2.53135C2.2501 15.7782 2.0251 15.5532 2.0251 15.272V11.7001C2.0251 11.4188 2.2501 11.1938 2.53135 11.1938H6.10322C6.38447 11.1938 6.60947 11.4188 6.60947 11.7001V15.272Z"
                              fill=""
                            />
                            <path
                              d="M15.4689 9.92822H11.8971C10.9408 9.92822 10.1533 10.7157 10.1533 11.672V15.2438C10.1533 16.2001 10.9408 16.9876 11.8971 16.9876H15.4689C16.4252 16.9876 17.2127 16.2001 17.2127 15.2438V11.7001C17.2127 10.7157 16.4252 9.92822 15.4689 9.92822ZM15.9752 15.272C15.9752 15.5532 15.7502 15.7782 15.4689 15.7782H11.8971C11.6158 15.7782 11.3908 15.5532 11.3908 15.272V11.7001C11.3908 11.4188 11.6158 11.1938 11.8971 11.1938H15.4689C15.7502 11.1938 15.9752 11.4188 15.9752 11.7001V15.272Z"
                              fill=""
                            />
                            </svg>
                          Home
                        </NavLink>
                      </li>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* <!-- Menu Item Dashboard --> */}

              {/* <!-- Menu Item Report --> */}
              <li>
                <NavLink
                  to="/report"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes('report') &&
                    'bg-graydark dark:bg-meta-4'
                  }`}
                >
                  <svg
                    className="fill-current"
                    width="18"
                    height="18"
                    viewBox="0 0 36 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.8571 3.42857C12.8571 1.53571 14.5848 0 16.7143 0H19.2857C21.4152 0 23.1429 1.53571 23.1429 3.42857V28.5714C23.1429 30.4643 21.4152 32 19.2857 32H16.7143C14.5848 32 12.8571 30.4643 12.8571 28.5714V3.42857ZM0 17.1429C0 15.25 1.72768 13.7143 3.85714 13.7143H6.42857C8.55804 13.7143 10.2857 15.25 10.2857 17.1429V28.5714C10.2857 30.4643 8.55804 32 6.42857 32H3.85714C1.72768 32 0 30.4643 0 28.5714V17.1429ZM29.5714 4.57143H32.1429C34.2723 4.57143 36 6.10714 36 8V28.5714C36 30.4643 34.2723 32 32.1429 32H29.5714C27.442 32 25.7143 30.4643 25.7143 28.5714V8C25.7143 6.10714 27.442 4.57143 29.5714 4.57143Z"
                      fill=""
                      fillOpacity="0.8"
                    />
                  </svg>
                  Report
                </NavLink>
              </li>
              {/* <!-- Menu Item Report --> */}

             {/* <!-- Menu Item Master Data --> */}
             <SidebarLinkGroup
                activeCondition={
                  pathname === '/Master Data' || pathname.includes('masterdata')
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <NavLink
                        to="#"
                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                          (pathname === '/masterdata' ||
                            pathname.includes('masterdata')) &&
                          'bg-graydark dark:bg-meta-4'
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <svg
                          className="fill-current"
                          width="18"
                          height="18"
                          viewBox="0 0 36 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M36 5V8C36 10.7625 27.9402 13 18 13C8.05982 13 0 10.7625 0 8V5C0 2.2375 8.05982 0 18 0C27.9402 0 36 2.2375 36 5ZM31.5964 13.4187C33.2679 12.9563 34.8027 12.3625 36 11.6313V18C36 20.7625 27.9402 23 18 23C8.05982 23 0 20.7625 0 18V11.6313C1.19732 12.3688 2.73214 12.9563 4.40357 13.4187C8.01161 14.4187 12.817 15 18 15C23.183 15 27.9884 14.4187 31.5964 13.4187ZM0 21.6313C1.19732 22.3687 2.73214 22.9563 4.40357 23.4188C8.01161 24.4188 12.817 25 18 25C23.183 25 27.9884 24.4188 31.5964 23.4188C33.2679 22.9563 34.8027 22.3625 36 21.6313V27C36 29.7625 27.9402 32 18 32C8.05982 32 0 29.7625 0 27V21.6313Z"
                            fill=""
                            fillOpacity="0.7"
                          />
                        </svg>
                        Master Data
                        <svg
                          className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                            open && 'rotate-180'
                          }`}
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                            fill=""
                          />
                        </svg>
                      </NavLink>
                      {/* <!-- Dropdown Menu Start --> */}
                      <div
                        className={`translate transform overflow-hidden ${
                          !open && 'hidden'
                        }`}
                      >
                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                          <li>
                            <NavLink
                              to="/masterdata/transmisi"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')
                              }
                            >
                              Transmisi
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/masterdata/mwtransmisi"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')
                              }
                            >
                              Mw Transmisi
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/masterdata/mvartransmisi"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')
                              }
                            >
                              Mvar Transmisi
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* <!-- Menu Item Forms --> */}

              {/* <!-- Menu Monitoring Row --> */}
              <li>
                <NavLink
                  to="/monitoringrow"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes('monitoringrow') &&
                    'bg-graydark dark:bg-meta-4'
                  }`}
                >
                  <svg
                    className="fill-current"
                    width="18"
                    height="18"
                    viewBox="0 0 37 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.5 6.9375C21.275 6.9375 23.826 7.91309 25.8205 9.54629L23.4646 11.9021C23.1322 12.2346 23.0383 12.7332 23.2117 13.1596C23.3852 13.5859 23.8115 13.875 24.2812 13.875H32.375C33.0109 13.875 33.5312 13.3547 33.5312 12.7188V4.625C33.5312 4.15527 33.2494 3.73613 32.8158 3.55547C32.3822 3.3748 31.8836 3.47598 31.5584 3.8084L29.1014 6.26543C26.2613 3.80117 22.5541 2.3125 18.5 2.3125C17.7123 2.3125 16.9463 2.37031 16.1875 2.47871V7.16875C16.9318 7.01699 17.7051 6.9375 18.5 6.9375ZM9.54629 11.1795L11.9021 13.5354C12.2346 13.8678 12.7332 13.9617 13.1596 13.7883C13.5859 13.6148 13.875 13.1885 13.875 12.7188V4.625C13.875 3.98906 13.3547 3.46875 12.7188 3.46875H4.625C4.15527 3.46875 3.73613 3.75059 3.55547 4.18418C3.3748 4.61777 3.47598 5.11641 3.8084 5.4416L6.26543 7.89863C3.80117 10.7387 2.3125 14.4459 2.3125 18.5C2.3125 19.2877 2.37031 20.0537 2.47871 20.8125H7.16875C7.01699 20.0682 6.9375 19.2949 6.9375 18.5C6.9375 15.725 7.91309 13.174 9.54629 11.1795ZM34.5213 16.1875H29.8312C29.983 16.9318 30.0625 17.7051 30.0625 18.5C30.0625 21.275 29.0869 23.826 27.4537 25.8205L25.0979 23.4646C24.7654 23.1322 24.2668 23.0383 23.8404 23.2117C23.4141 23.3852 23.125 23.8115 23.125 24.2812V32.375C23.125 33.0109 23.6453 33.5312 24.2812 33.5312H32.375C32.8447 33.5312 33.2639 33.2494 33.4445 32.8158C33.6252 32.3822 33.524 31.8836 33.1916 31.5584L30.7346 29.1014C33.1988 26.2613 34.6875 22.5541 34.6875 18.5C34.6875 17.7123 34.6297 16.9463 34.5213 16.1875ZM18.5 30.0625C15.725 30.0625 13.174 29.0869 11.1795 27.4537L13.5354 25.0979C13.8678 24.7654 13.9617 24.2668 13.7883 23.8404C13.6148 23.4141 13.1885 23.125 12.7188 23.125H4.625C3.98906 23.125 3.46875 23.6453 3.46875 24.2812V32.375C3.46875 32.8447 3.75059 33.2639 4.18418 33.4445C4.61777 33.6252 5.11641 33.524 5.4416 33.1916L7.89863 30.7346C10.7387 33.1988 14.4459 34.6875 18.5 34.6875C19.2877 34.6875 20.0537 34.6297 20.8125 34.5213V29.8312C20.0682 29.983 19.2949 30.0625 18.5 30.0625Z"
                      fill=""
                    />
                  </svg>
                  Monitoring Row
                </NavLink>
              </li>
              {/* <!-- Menu Monitoring Row --> */}

              {/* <!-- Menu Berita Acara--> */}
              <li>
                <NavLink
                  to="/beritaacara"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes('beritaacara') &&
                    'bg-graydark dark:bg-meta-4'
                  }`}
                >
                  <svg
                    className="fill-current"
                    width="18"
                    height="18"
                    viewBox="0 0 37 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.125 7.125C7.125 4.50508 9.25508 2.375 11.875 2.375H33.25C35.8699 2.375 38 4.50508 38 7.125V30.875C38 33.4949 35.8699 35.625 33.25 35.625H5.9375C2.65703 35.625 0 32.968 0 29.6875V9.5C0 8.18633 1.06133 7.125 2.375 7.125C3.68867 7.125 4.75 8.18633 4.75 9.5V29.6875C4.75 30.3406 5.28438 30.875 5.9375 30.875C6.59062 30.875 7.125 30.3406 7.125 29.6875V7.125ZM11.875 8.90625V14.8438C11.875 15.8309 12.6691 16.625 13.6562 16.625H21.9688C22.9559 16.625 23.75 15.8309 23.75 14.8438V8.90625C23.75 7.91914 22.9559 7.125 21.9688 7.125H13.6562C12.6691 7.125 11.875 7.91914 11.875 8.90625ZM27.3125 8.3125C27.3125 8.96562 27.8469 9.5 28.5 9.5H32.0625C32.7156 9.5 33.25 8.96562 33.25 8.3125C33.25 7.65938 32.7156 7.125 32.0625 7.125H28.5C27.8469 7.125 27.3125 7.65938 27.3125 8.3125ZM27.3125 15.4375C27.3125 16.0906 27.8469 16.625 28.5 16.625H32.0625C32.7156 16.625 33.25 16.0906 33.25 15.4375C33.25 14.7844 32.7156 14.25 32.0625 14.25H28.5C27.8469 14.25 27.3125 14.7844 27.3125 15.4375ZM11.875 22.5625C11.875 23.2156 12.4094 23.75 13.0625 23.75H32.0625C32.7156 23.75 33.25 23.2156 33.25 22.5625C33.25 21.9094 32.7156 21.375 32.0625 21.375H13.0625C12.4094 21.375 11.875 21.9094 11.875 22.5625ZM11.875 29.6875C11.875 30.3406 12.4094 30.875 13.0625 30.875H32.0625C32.7156 30.875 33.25 30.3406 33.25 29.6875C33.25 29.0344 32.7156 28.5 32.0625 28.5H13.0625C12.4094 28.5 11.875 29.0344 11.875 29.6875Z"
                      fill=""
                    />
                  </svg>
                  Berita Acara
                </NavLink>
              </li>
              {/* <!-- Menu Berita Acara --> */}

              {/* <!-- Menu help & Feedback--> */}
              <li>
                <NavLink
                  to="/helpfeedback"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes('helpfeedback') &&
                    'bg-graydark dark:bg-meta-4'
                  }`}
                >
                  <svg
                    className="fill-current"
                    width="18"
                    height="18"
                    viewBox="0 0 37 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 32C22.7739 32 27.3523 30.3143 30.7279 27.3137C34.1036 24.3131 36 20.2435 36 16C36 11.7565 34.1036 7.68687 30.7279 4.68629C27.3523 1.68571 22.7739 0 18 0C13.2261 0 8.64773 1.68571 5.27208 4.68629C1.89642 7.68687 0 11.7565 0 16C0 20.2435 1.89642 24.3131 5.27208 27.3137C8.64773 30.3143 13.2261 32 18 32ZM11.9391 10.3313C12.4945 8.9375 13.9852 8 15.6516 8H19.7508C22.2047 8 24.1875 9.76875 24.1875 11.9438C24.1875 13.3563 23.3367 14.6625 21.9586 15.3687L19.6875 16.525C19.6734 17.3375 18.9211 18 18 18C17.0648 18 16.3125 17.3312 16.3125 16.5V15.6562C16.3125 15.1187 16.6359 14.625 17.1633 14.3562L20.2781 12.7688C20.6086 12.6 20.8125 12.2875 20.8125 11.95C20.8125 11.425 20.3344 11.0063 19.7508 11.0063H15.6516C15.4125 11.0063 15.2016 11.1375 15.1242 11.3375L15.0961 11.4125C14.7867 12.1938 13.8164 12.6 12.9445 12.325C12.0727 12.05 11.6086 11.1875 11.918 10.4125L11.9461 10.3375L11.9391 10.3313ZM15.75 22C15.75 21.4696 15.9871 20.9609 16.409 20.5858C16.831 20.2107 17.4033 20 18 20C18.5967 20 19.169 20.2107 19.591 20.5858C20.0129 20.9609 20.25 21.4696 20.25 22C20.25 22.5304 20.0129 23.0391 19.591 23.4142C19.169 23.7893 18.5967 24 18 24C17.4033 24 16.831 23.7893 16.409 23.4142C15.9871 23.0391 15.75 22.5304 15.75 22Z"
                      fill=""
                    />
                  </svg>
                  Help & Feedback
                </NavLink>
              </li>
              {/* <!-- Menu Help & Feedback --> */}

              {/* <!-- Menu Item Calendar --> */}
              <li>
                <NavLink
                  to="/calendar"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes('calendar') &&
                    'bg-graydark dark:bg-meta-4'
                  }`}
                >
                  <svg
                    className="fill-current"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.7499 2.9812H14.2874V2.36245C14.2874 2.02495 14.0062 1.71558 13.6405 1.71558C13.2749 1.71558 12.9937 1.99683 12.9937 2.36245V2.9812H4.97803V2.36245C4.97803 2.02495 4.69678 1.71558 4.33115 1.71558C3.96553 1.71558 3.68428 1.99683 3.68428 2.36245V2.9812H2.2499C1.29365 2.9812 0.478027 3.7687 0.478027 4.75308V14.5406C0.478027 15.4968 1.26553 16.3125 2.2499 16.3125H15.7499C16.7062 16.3125 17.5218 15.525 17.5218 14.5406V4.72495C17.5218 3.7687 16.7062 2.9812 15.7499 2.9812ZM1.77178 8.21245H4.1624V10.9968H1.77178V8.21245ZM5.42803 8.21245H8.38115V10.9968H5.42803V8.21245ZM8.38115 12.2625V15.0187H5.42803V12.2625H8.38115ZM9.64678 12.2625H12.5999V15.0187H9.64678V12.2625ZM9.64678 10.9968V8.21245H12.5999V10.9968H9.64678ZM13.8374 8.21245H16.228V10.9968H13.8374V8.21245ZM2.2499 4.24683H3.7124V4.83745C3.7124 5.17495 3.99365 5.48433 4.35928 5.48433C4.7249 5.48433 5.00615 5.20308 5.00615 4.83745V4.24683H13.0499V4.83745C13.0499 5.17495 13.3312 5.48433 13.6968 5.48433C14.0624 5.48433 14.3437 5.20308 14.3437 4.83745V4.24683H15.7499C16.0312 4.24683 16.2562 4.47183 16.2562 4.75308V6.94683H1.77178V4.75308C1.77178 4.47183 1.96865 4.24683 2.2499 4.24683ZM1.77178 14.5125V12.2343H4.1624V14.9906H2.2499C1.96865 15.0187 1.77178 14.7937 1.77178 14.5125ZM15.7499 15.0187H13.8374V12.2625H16.228V14.5406C16.2562 14.7937 16.0312 15.0187 15.7499 15.0187Z"
                      fill=""
                    />
                  </svg>
                  Calendar
                </NavLink>
              </li>
              {/* <!-- Menu Item Calendar --> */}

              {/* <!-- Menu Item Profile --> */}
              <li>
                <NavLink
                  to="/profile"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes('profile') && 'bg-graydark dark:bg-meta-4'
                  }`}
                >
                  <svg
                    className="fill-current"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.0002 7.79065C11.0814 7.79065 12.7689 6.1594 12.7689 4.1344C12.7689 2.1094 11.0814 0.478149 9.0002 0.478149C6.91895 0.478149 5.23145 2.1094 5.23145 4.1344C5.23145 6.1594 6.91895 7.79065 9.0002 7.79065ZM9.0002 1.7719C10.3783 1.7719 11.5033 2.84065 11.5033 4.16252C11.5033 5.4844 10.3783 6.55315 9.0002 6.55315C7.62207 6.55315 6.49707 5.4844 6.49707 4.16252C6.49707 2.84065 7.62207 1.7719 9.0002 1.7719Z"
                      fill=""
                    />
                    <path
                      d="M10.8283 9.05627H7.17207C4.16269 9.05627 1.71582 11.5313 1.71582 14.5406V16.875C1.71582 17.2125 1.99707 17.5219 2.3627 17.5219C2.72832 17.5219 3.00957 17.2407 3.00957 16.875V14.5406C3.00957 12.2344 4.89394 10.3219 7.22832 10.3219H10.8564C13.1627 10.3219 15.0752 12.2063 15.0752 14.5406V16.875C15.0752 17.2125 15.3564 17.5219 15.7221 17.5219C16.0877 17.5219 16.3689 17.2407 16.3689 16.875V14.5406C16.2846 11.5313 13.8377 9.05627 10.8283 9.05627Z"
                      fill=""
                    />
                  </svg>
                  Profile
                </NavLink>
              </li>
              {/* <!-- Menu Item Profile --> */}
            </ul>
          </div>

          {/* <!-- Others Group --> */}
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
              OTHERS
            </h3>

            <ul className="mb-6 flex flex-col gap-1.5">

              {/* <!-- Menu Item Auth Pages --> */}
              <SidebarLinkGroup
                activeCondition={
                  pathname === '/auth' || pathname.includes('auth')
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <NavLink
                        to="#"
                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                          (pathname === '/auth' || pathname.includes('auth')) &&
                          'bg-graydark dark:bg-meta-4'
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <svg
                          className="fill-current"
                          width="18"
                          height="19"
                          viewBox="0 0 18 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_130_9814)">
                            <path
                              d="M12.7127 0.55835H9.53457C8.80332 0.55835 8.18457 1.1771 8.18457 1.90835V3.84897C8.18457 4.18647 8.46582 4.46772 8.80332 4.46772C9.14082 4.46772 9.45019 4.18647 9.45019 3.84897V1.88022C9.45019 1.82397 9.47832 1.79585 9.53457 1.79585H12.7127C13.3877 1.79585 13.9221 2.33022 13.9221 3.00522V15.0709C13.9221 15.7459 13.3877 16.2802 12.7127 16.2802H9.53457C9.47832 16.2802 9.45019 16.2521 9.45019 16.1959V14.2552C9.45019 13.9177 9.16894 13.6365 8.80332 13.6365C8.43769 13.6365 8.18457 13.9177 8.18457 14.2552V16.1959C8.18457 16.9271 8.80332 17.5459 9.53457 17.5459H12.7127C14.0908 17.5459 15.1877 16.4209 15.1877 15.0709V3.03335C15.1877 1.65522 14.0627 0.55835 12.7127 0.55835Z"
                              fill=""
                            />
                            <path
                              d="M10.4346 8.60205L7.62207 5.7333C7.36895 5.48018 6.97519 5.48018 6.72207 5.7333C6.46895 5.98643 6.46895 6.38018 6.72207 6.6333L8.46582 8.40518H3.45957C3.12207 8.40518 2.84082 8.68643 2.84082 9.02393C2.84082 9.36143 3.12207 9.64268 3.45957 9.64268H8.49395L6.72207 11.4427C6.46895 11.6958 6.46895 12.0896 6.72207 12.3427C6.83457 12.4552 7.00332 12.5114 7.17207 12.5114C7.34082 12.5114 7.50957 12.4552 7.62207 12.3145L10.4346 9.4458C10.6877 9.24893 10.6877 8.85518 10.4346 8.60205Z"
                              fill=""
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_130_9814">
                              <rect
                                width="18"
                                height="18"
                                fill="white"
                                transform="translate(0 0.052124)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        Authentication
                        <svg
                          className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                            open && 'rotate-180'
                          }`}
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                            fill=""
                          />
                        </svg>
                      </NavLink>
                      {/* <!-- Dropdown Menu Start --> */}
                      <div
                        className={`translate transform overflow-hidden ${
                          !open && 'hidden'
                        }`}
                      >
                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                          <li>
                            <NavLink
                              to="/auth/signin"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')
                              }
                            >
                              Sign In
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/auth/signup"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')
                              }
                            >
                              Sign Up
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* <!-- Menu Item Auth Pages --> */}
            </ul>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
