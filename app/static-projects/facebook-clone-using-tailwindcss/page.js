import React from 'react'

const page = () => {
    return (
        <div className='bg-[#e4e6eb] min-h-screen'>


            {/* < !--Navbar starting from here-- > */}
            <nav className="bg-white max-w-screen sticky top-0 h-[50px] shadow flex border-box z-[99]">

                {/* <!-- Logo and search bar --> */}
                <div className="w-[25vw] flex px-[20px] items-center">
                    {/* <!-- Logo --> */}
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="blue" className="bi bi-facebook"
                            viewBox="0 0 16 16">
                            <path
                                d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                        </svg>
                    </div>

                    {/* <!-- search bar --> */}
                    <div className="mx-5 relative w-full h-[40px] bg-[#e4e6eb] rounded-[40px]">
                        {/* <!-- search icon --> */}
                        <div className="absolute top-1/2 left-5 transform -translate-x-1/2 -translate-y-1/2">
                            <svg fill="text-slate-900" viewBox="0 0 16 16" width="1.0em" height="1.0em" className="text-slate-500">
                                <g fill-rule="evenodd" transform="translate(-448 -544)">
                                    <g fill-rule="nonzero">
                                        <path
                                            d="M10.743 2.257a6 6 0 1 1-8.485 8.486 6 6 0 0 1 8.485-8.486zm-1.06 1.06a4.5 4.5 0 1 0-6.365 6.364 4.5 4.5 0 0 0 6.364-6.363z"
                                            transform="translate(448 544)"></path>
                                        <path
                                            d="M10.39 8.75a2.94 2.94 0 0 0-.199.432c-.155.417-.23.849-.172 1.284.055.415.232.794.54 1.103a.75.75 0 0 0 1.112-1.004l-.051-.057a.39.39 0 0 1-.114-.24c-.021-.155.014-.356.09-.563.031-.081.06-.145.08-.182l.012-.022a.75.75 0 1 0-1.299-.752z"
                                            transform="translate(448 544)"></path>
                                        <path
                                            d="M9.557 11.659c.038-.018.09-.04.15-.064.207-.077.408-.112.562-.092.08.01.143.034.198.077l.041.036a.75.75 0 0 0 1.06-1.06 1.881 1.881 0 0 0-1.103-.54c-.435-.058-.867.018-1.284.175-.189.07-.336.143-.433.2a.75.75 0 0 0 .624 1.356l.066-.027.12-.061z"
                                            transform="translate(448 544)"></path>
                                        <path
                                            d="m13.463 15.142-.04-.044-3.574-4.192c-.599-.703.355-1.656 1.058-1.057l4.191 3.574.044.04c.058.059.122.137.182.24.249.425.249.96-.154 1.41l-.057.057c-.45.403-.986.403-1.411.154a1.182 1.182 0 0 1-.24-.182zm.617-.616.444-.444a.31.31 0 0 0-.063-.052c-.093-.055-.263-.055-.35.024l.208.232.207-.206.006.007-.22.257-.026-.024.033-.034.025.027-.257.22-.007-.007zm-.027-.415c-.078.088-.078.257-.023.35a.31.31 0 0 0 .051.063l.205-.204-.233-.209z"
                                            transform="translate(448 544)"></path>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <input className="w-full h-full  pl-[40px] pr-[10px] outline-none bg-transparent font-light" type="text"
                            placeholder="Search Facebook" />
                    </div>
                </div>

                {/* <!-- Manu of navbar --> */}
                <div className="w-[50vw] border-box py-[03px] px-[30px]">

                    {/* <!-- Items div that contain all the items of navbar --> */}
                    <div className="items flex w-full h-full">

                        {/* <!-- Home Item --> */}
                        <div className="flex-1 h-full items-center justify-center relative mx-2">
                            <div className="flex items-center justify-center h-full">
                                <svg fill="currentColor" viewBox="0 0 24 24" width="1.5em" height="1.5em" className="text-blue-500">
                                    <path
                                        d="M9.464 1.286C10.294.803 11.092.5 12 .5c.908 0 1.707.303 2.537.786.795.462 1.7 1.142 2.815 1.977l2.232 1.675c1.391 1.042 2.359 1.766 2.888 2.826.53 1.059.53 2.268.528 4.006v4.3c0 1.355 0 2.471-.119 3.355-.124.928-.396 1.747-1.052 2.403-.657.657-1.476.928-2.404 1.053-.884.119-2 .119-3.354.119H7.93c-1.354 0-2.471 0-3.355-.119-.928-.125-1.747-.396-2.403-1.053-.656-.656-.928-1.475-1.053-2.403C1 18.541 1 17.425 1 16.07v-4.3c0-1.738-.002-2.947.528-4.006.53-1.06 1.497-1.784 2.888-2.826L6.65 3.263c1.114-.835 2.02-1.515 2.815-1.977zM10.5 13A1.5 1.5 0 0 0 9 14.5V21h6v-6.5a1.5 1.5 0 0 0-1.5-1.5h-3z">
                                    </path>
                                </svg>
                            </div>
                            <div className="border-down w-full h-[3px] bg-blue-500 relative bottom-0"></div>
                        </div>


                        <div className="flex-1 flex hover:bg-[#e4e6eb] h-full items-center justify-center rounded-[10px] mx-2">
                            <svg fill="currentColor" viewBox="0 0 24 24" width="1.5em" height="1.5em"
                                className="x1lliihq x1k90msu x2h7rmj x1qfuztq xcza8v6 xxk0z11 xvy4d1p">
                                <path
                                    d="M8 2.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zM5.5 7a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0zm-.25 6A4.75 4.75 0 0 0 .5 17.75 3.25 3.25 0 0 0 3.75 21h8.5a3.25 3.25 0 0 0 3.25-3.25A4.75 4.75 0 0 0 10.75 13h-5.5zM2.5 17.75A2.75 2.75 0 0 1 5.25 15h5.5a2.75 2.75 0 0 1 2.75 2.75c0 .69-.56 1.25-1.25 1.25h-8.5c-.69 0-1.25-.56-1.25-1.25zM14 9.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0zM17.5 8a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm0 6.5a1 1 0 1 0 0 2h2.3a1.7 1.7 0 0 1 1.7 1.7.8.8 0 0 1-.8.8h-3.2a1 1 0 1 0 0 2h3.2a2.8 2.8 0 0 0 2.8-2.8 3.7 3.7 0 0 0-3.7-3.7h-2.3z">
                                </path>
                            </svg>
                        </div>
                        <div className="flex-1 flex hover:bg-[#e4e6eb] h-full items-center justify-center rounded-[10px] mx-2">
                            <svg fill="currentColor" viewBox="0 0 24 24" width="1.5em" height="1.5em"
                                className="x1lliihq x1k90msu x2h7rmj x1qfuztq xcza8v6 xxk0z11 xvy4d1p">
                                <path d="M10.996 8.132A1 1 0 0 0 9.5 9v4a1 1 0 0 0 1.496.868l3.5-2a1 1 0 0 0 0-1.736l-3.5-2z">
                                </path>
                                <path
                                    d="M14.573 2H9.427c-1.824 0-3.293 0-4.45.155-1.2.162-2.21.507-3.013 1.31C1.162 4.266.817 5.277.655 6.477.5 7.634.5 9.103.5 10.927v.146c0 1.824 0 3.293.155 4.45.162 1.2.507 2.21 1.31 3.012.802.803 1.813 1.148 3.013 1.31C6.134 20 7.603 20 9.427 20h5.146c1.824 0 3.293 0 4.45-.155 1.2-.162 2.21-.507 3.012-1.31.803-.802 1.148-1.813 1.31-3.013.155-1.156.155-2.625.155-4.449v-.146c0-1.824 0-3.293-.155-4.45-.162-1.2-.507-2.21-1.31-3.013-.802-.802-1.813-1.147-3.013-1.309C17.866 2 16.397 2 14.573 2zM3.38 4.879c.369-.37.887-.61 1.865-.741C6.251 4.002 7.586 4 9.5 4h5c1.914 0 3.249.002 4.256.138.978.131 1.496.372 1.865.74.37.37.61.888.742 1.866.135 1.007.137 2.342.137 4.256 0 1.914-.002 3.249-.137 4.256-.132.978-.373 1.496-.742 1.865-.369.37-.887.61-1.865.742-1.007.135-2.342.137-4.256.137h-5c-1.914 0-3.249-.002-4.256-.137-.978-.132-1.496-.373-1.865-.742-.37-.369-.61-.887-.741-1.865C2.502 14.249 2.5 12.914 2.5 11c0-1.914.002-3.249.138-4.256.131-.978.372-1.496.74-1.865zM8 21.5a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8z">
                                </path>
                            </svg>
                        </div>
                        <div className="flex-1 flex hover:bg-[#e4e6eb] h-full items-center justify-center rounded-[10px] mx-2">
                            <svg fill="currentColor" viewBox="0 0 24 24" width="1.5em" height="1.5em"
                                className="x1lliihq x1k90msu x2h7rmj x1qfuztq xcza8v6 xxk0z11 xvy4d1p">
                                <path
                                    d="M1.588 3.227A3.125 3.125 0 0 1 4.58 1h14.84c1.38 0 2.597.905 2.993 2.227l.816 2.719a6.47 6.47 0 0 1 .272 1.854A5.183 5.183 0 0 1 22 11.455v4.615c0 1.355 0 2.471-.119 3.355-.125.928-.396 1.747-1.053 2.403-.656.657-1.475.928-2.403 1.053-.884.12-2 .119-3.354.119H8.929c-1.354 0-2.47 0-3.354-.119-.928-.125-1.747-.396-2.403-1.053-.657-.656-.929-1.475-1.053-2.403-.12-.884-.119-2-.119-3.354V11.5l.001-.045A5.184 5.184 0 0 1 .5 7.8c0-.628.092-1.252.272-1.854l.816-2.719zM10 21h4v-3.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V21zm6-.002c.918-.005 1.608-.025 2.159-.099.706-.095 1.033-.262 1.255-.485.223-.222.39-.55.485-1.255.099-.735.101-1.716.101-3.159v-3.284a5.195 5.195 0 0 1-1.7.284 5.18 5.18 0 0 1-3.15-1.062A5.18 5.18 0 0 1 12 13a5.18 5.18 0 0 1-3.15-1.062A5.18 5.18 0 0 1 5.7 13a5.2 5.2 0 0 1-1.7-.284V16c0 1.442.002 2.424.1 3.159.096.706.263 1.033.486 1.255.222.223.55.39 1.255.485.551.074 1.24.094 2.159.1V17.5a2.5 2.5 0 0 1 2.5-2.5h3a2.5 2.5 0 0 1 2.5 2.5v3.498zM4.581 3c-.497 0-.935.326-1.078.802l-.815 2.72A4.45 4.45 0 0 0 2.5 7.8a3.2 3.2 0 0 0 5.6 2.117 1 1 0 0 1 1.5 0A3.19 3.19 0 0 0 12 11a3.19 3.19 0 0 0 2.4-1.083 1 1 0 0 1 1.5 0A3.2 3.2 0 0 0 21.5 7.8c0-.434-.063-.865-.188-1.28l-.816-2.72A1.125 1.125 0 0 0 19.42 3H4.58z">
                                </path>
                            </svg>
                        </div>
                        <div className="flex-1 flex hover:bg-[#e4e6eb] h-full items-center justify-center rounded-[10px] mx-2">
                            <svg fill="currentColor" viewBox="0 0 24 24" width="1.5em" height="1.5em"
                                className="x1lliihq x1k90msu x2h7rmj x1qfuztq xcza8v6 xxk0z11 xvy4d1p">
                                <path d="M12 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                                <path
                                    d="M.5 12C.5 5.649 5.649.5 12 .5S23.5 5.649 23.5 12 18.351 23.5 12 23.5.5 18.351.5 12zm2.21-2a9.537 9.537 0 0 0 0 3.993l.3.007A2 2 0 0 0 3 10h-.29zm.663-1.983a4 4 0 0 1 0 7.966 9.523 9.523 0 0 0 1.948 2.773A5.002 5.002 0 0 1 10 15.523h4a5.002 5.002 0 0 1 4.679 3.233 9.523 9.523 0 0 0 1.948-2.773 4 4 0 0 1 0-7.966A9.501 9.501 0 0 0 12 2.5a9.501 9.501 0 0 0-8.627 5.517zM21.5 12a9.55 9.55 0 0 0-.212-2.007l-.265.007H21a2 2 0 0 0-.01 4l.3-.007c.138-.643.21-1.31.21-1.993zM12 21.5a9.455 9.455 0 0 0 4.97-1.402A3 3 0 0 0 14 17.523h-4a3 3 0 0 0-2.97 2.575A9.456 9.456 0 0 0 12 21.5z">
                                </path>
                            </svg>
                        </div>
                    </div>
                </div>

                {/* <!-- Messanger notification profile menu of right --> */}
                <div className="w-[25vw] mr-3 flex items-center justify-end">
                    {/* <!-- Burger icon --> */}
                    <div className="bg-[#e4e6eb] w-[40px] h-[40px] rounded-[50%] mx-1 flex items-center justify-center">
                        <svg fill="currentColor" viewBox="0 0 24 24" width="50%" height="50%"
                            className="x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0 x1qx5ct2 xw4jnvo">
                            <path
                                d="M12 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8 16a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 17a3 3 0 1 0 0 6 3 3 0 0 0 0-6z">
                            </path>
                        </svg>
                    </div>

                    {/* <!-- Messenger icon --> */}
                    <div className="bg-[#e4e6eb] w-[40px] h-[40px] rounded-[50%] mx-1 flex items-center justify-center">
                        <svg fill="currentColor" viewBox="0 0 24 24" width="50%" height="50%"
                            className="x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0 x1qx5ct2 xw4jnvo">
                            <path
                                d="M.5 12C.5 5.649 5.649.5 12 .5S23.5 5.649 23.5 12 18.351 23.5 12 23.5c-1.922 0-3.736-.472-5.33-1.308a.63.63 0 0 0-.447-.069l-3.4.882a1.5 1.5 0 0 1-1.828-1.829l.882-3.4a.63.63 0 0 0-.07-.445A11.454 11.454 0 0 1 .5 12zm17.56-1.43a.819.819 0 0 0-1.125-1.167L14 11.499l-3.077-2.171a1.5 1.5 0 0 0-2.052.308l-2.93 3.793a.819.819 0 0 0 1.123 1.167L10 12.5l3.076 2.172a1.5 1.5 0 0 0 2.052-.308l2.931-3.793z">
                            </path>
                        </svg>
                    </div>

                    {/* <!-- Notifications icon --> */}
                    <div className="bg-[#e4e6eb] w-[40px] h-[40px] rounded-[50%] mx-1 flex items-center justify-center">
                        <svg fill="currentColor" viewBox="0 0 24 24" width="50%" height="50%"
                            className="x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0 x1qx5ct2 xw4jnvo">
                            <path
                                d="M3 9.5a9 9 0 1 1 18 0v2.927c0 1.69.475 3.345 1.37 4.778a1.5 1.5 0 0 1-1.272 2.295h-4.625a4.5 4.5 0 0 1-8.946 0H2.902a1.5 1.5 0 0 1-1.272-2.295A9.01 9.01 0 0 0 3 12.43V9.5zm6.55 10a2.5 2.5 0 0 0 4.9 0h-4.9z">
                            </path>
                        </svg>
                    </div>

                    {/* <!-- profile icon --> */}
                    <div
                        className="bg-[#e4e6eb] w-[40px] h-[40px] rounded-[50%] mx-1 flex items-center justify-center overflow-hidden">
                        <img src="/profile.png" alt="Profile" width="100%" height="100%" className="object-cover" />
                    </div>
                </div>
            </nav>
            {/* <!--Navbar ending here-- > */}

            <section className="main-content flex h-full w-full min-h-[calc(100vh-50px)]">
                {/* <!-- Left sidebar of main content --> */}
                <div className="left-sidebar flex flex-col justify-between w-[25vw] h-full fixed p-[10px]">

                    {/* <!-- left sidebar main content --> */}
                    <div className="top">
                        {/* <!-- Side menu of left sidebar --> */}
                        <div className="sideMenu">

                            {/* <!-- all the items --> */}
                            <div className="items  border-b border-slate-400 pb-5">

                                {/* <!-- Profile --> */}
                                <div className="item flex p-1 items-center gap-2 hover:bg-slate-300 rounded-[10px] mt-2">
                                    <div className="img w-[40px] h-[40px] overflow-hidden rounded-[50%]">
                                        <img src="/profile.png" alt="Profile" className="w-full h-auto" />
                                    </div>
                                    <div className="text-sm">
                                        Abdul Ghaffar Soomro
                                    </div>
                                </div>

                                {/* <!-- Find Friends --> */}
                                <div className="item flex p-1 items-center gap-2 hover:bg-slate-300 rounded-[10px]">
                                    <div className="img w-[40px] h-[40px] overflow-hidden rounded-[50%]">
                                        <i data-visualcompletion="css-img" className=""
                                            style={{ backgroundImage: "url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png?_nc_eui2=AeG6vh_U1z5XIYNXb028bUeFiXYVTRy2fzKJdhVNHLZ_Mpr7J-qemK4XdN8PTu31LEh8VsjFsAC4WX63VDqJWJkj&quot;)", backgroundPosition: " 0px -296px", backgroundSize: "auto", width: "36px", height: "36px", backgroundRepeat: "no-repeat", display: "inline-block" }}></i>
                                    </div>
                                    <div className="text-sm">
                                        Find friends
                                    </div>
                                </div>

                                {/* <!-- Feeds --> */}
                                <div className="item flex p-1 items-center gap-2 hover:bg-slate-300 rounded-[10px]">
                                    <div className="img w-[40px] h-[40px] overflow-hidden rounded-[50%]">
                                        <img draggable="false" height="36" width="36" alt=""
                                            referrerpolicy="origin-when-cross-origin"
                                            src="https://static.xx.fbcdn.net/rsrc.php/v3/yb/r/eECk3ceTaHJ.png?_nc_eui2=AeFdN8KrgLOvb6dmzb2tcuDJi9AM8exRZGeL0Azx7FFkZ7AF44jbnHBs2bGT2YMaRMocRB_gHw8xNqOexBiX-PBF" />
                                    </div>
                                    <div className="text-sm">
                                        Feeds
                                    </div>
                                </div>

                                {/* <!-- Groups --> */}
                                <div className="item flex p-1 items-center gap-2 hover:bg-slate-300 rounded-[10px]">
                                    <div className="img w-[40px] h-[40px] overflow-hidden rounded-[50%]">
                                        <i data-visualcompletion="css-img" className=""
                                            style={{ backgroundImage: "url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png?_nc_eui2=AeG6vh_U1z5XIYNXb028bUeFiXYVTRy2fzKJdhVNHLZ_Mpr7J-qemK4XdN8PTu31LEh8VsjFsAC4WX63VDqJWJkj&quot;)", backgroundPosition: " 0px -296px", backgroundSize: "auto", width: "36px", height: "36px", backgroundRepeat: "no-repeat", display: "inline-block" }}
                                        ></i>
                                    </div>
                                    <div className="text-sm">
                                        Groups
                                    </div>
                                </div>

                                {/* <!-- Marketplace --> */}
                                <div className="item flex p-1 items-center gap-2 hover:bg-slate-300 rounded-[10px]">
                                    <div className="img w-[40px] h-[40px] overflow-hidden rounded-[50%]">
                                        <i data-visualcompletion="css-img" className=""
                                            style={{ backgroundImage: "url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png?_nc_eui2=AeG6vh_U1z5XIYNXb028bUeFiXYVTRy2fzKJdhVNHLZ_Mpr7J-qemK4XdN8PTu31LEh8VsjFsAC4WX63VDqJWJkj&quot;)", backgroundPosition: " 0px -296px", backgroundSize: "auto", width: "36px", height: "36px", backgroundRepeat: "no-repeat", display: "inline-block" }}
                                        ></i>
                                    </div>
                                    <div className="text-sm">
                                        Marketplace
                                    </div>
                                </div>

                                {/* <!-- Video --> */}
                                <div className="item flex p-1 items-center gap-2 hover:bg-slate-300 rounded-[10px]">
                                    <div className="img w-[40px] h-[40px] overflow-hidden rounded-[50%]">
                                        <i data-visualcompletion="css-img" className=""
                                            style={{ backgroundImage: "url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png?_nc_eui2=AeG6vh_U1z5XIYNXb028bUeFiXYVTRy2fzKJdhVNHLZ_Mpr7J-qemK4XdN8PTu31LEh8VsjFsAC4WX63VDqJWJkj&quot;)", backgroundPosition: " 0px -296px", backgroundSize: "auto", width: "36px", height: "36px", backgroundRepeat: "no-repeat", display: "inline-block" }}
                                        ></i>
                                    </div>
                                    <div className="text-sm">
                                        Groups
                                    </div>
                                </div>

                                {/* <!-- Memories --> */}
                                <div className="item flex p-1 items-center gap-2 hover:bg-slate-300 rounded-[10px]">
                                    <div className="img w-[40px] h-[40px] overflow-hidden rounded-[50%] mt-1">
                                        <i data-visualcompletion="css-img" className=""
                                            style={{ backgroundImage: "(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png?_nc_eui2=AeG6vh_U1z5XIYNXb028bUeFiXYVTRy2fzKJdhVNHLZ_Mpr7J-qemK4XdN8PTu31LEh8VsjFsAC4WX63VDqJWJkj&quot;)", backgroundPosition: " 0px -296px", backgroundSize: "auto", width: "36px", height: "36px", backgroundRepeat: "no-repeat", display: "inline-block" }}
                                        ></i>
                                    </div>
                                    <div className="text-sm">
                                        Memories
                                    </div>
                                </div>

                                {/* <!-- Saved --> */}
                                <div className="item flex p-1 items-center gap-2 hover:bg-slate-300 rounded-[10px]">
                                    <div className="img w-[40px] h-[40px] overflow-hidden rounded-[50%] mt-1">
                                        <i data-visualcompletion="css-img" className=""
                                            style={{ backgroundImage: "(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png?_nc_eui2=AeG6vh_U1z5XIYNXb028bUeFiXYVTRy2fzKJdhVNHLZ_Mpr7J-qemK4XdN8PTu31LEh8VsjFsAC4WX63VDqJWJkj&quot;)", backgroundPosition: " 0px -296px", backgroundSize: "auto", width: "36px", height: "36px", backgroundRepeat: "no-repeat", display: "inline-block" }}
                                        ></i>
                                    </div>
                                    <div className="text-sm">
                                        Saved
                                    </div>
                                </div>

                                {/* <!-- Professional Dashboard --> */}
                                <div className="item flex p-1 items-center gap-2 hover:bg-slate-300 rounded-[10px]">
                                    <div className="img w-[40px] h-[40px] overflow-hidden rounded-[50%] mt-1">
                                        <img draggable="false" height="36" width="36" alt=""
                                            referrerpolicy="origin-when-cross-origin"
                                            src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/UcI9fM2oUUV.png?_nc_eui2=AeFsl4aRPS6F1MhdLnAI41UaXnfhz3hpqpFed-HPeGmqkW8IevyukAlWMOoZ0n4sDySeIJATfeJq16v4XGfQPUO_" />
                                    </div>
                                    <div className="text-sm">
                                        Professional dashboard
                                    </div>
                                </div>

                                {/* <!-- Pages --> */}
                                <div className="item flex p-1 items-center gap-2 hover:bg-slate-300 rounded-[10px]">
                                    <div
                                        className="img w-[40px] h-[40px] overflow-hidden rounded-[50%] mt-1 flex items-center justify-center bg-slate-400">
                                        <svg fill="currentColor" viewBox="0 0 16 16" width="1em" height="1em"
                                            className="x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0 x1qx5ct2 xw4jnvo">
                                            <g fill-rule="evenodd" transform="translate(-448 -544)">
                                                <path fill-rule="nonzero"
                                                    d="M452.707 549.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L456 552.586l-3.293-3.293z">
                                                </path>
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="text-sm">
                                        Pages
                                    </div>
                                </div>
                            </div>
                            {/* <!-- All items end here --> */}
                        </div>

                        {/* <!-- shortcuts section --> */}
                        <div className="shortcuts flex flex-col mt-2 text-slate-500">
                            <div className="heading">Your shortcuts</div>
                            <div className="shortcuts mt-2">
                                <div className="item flex p-1 items-center gap-2 hover:bg-slate-300 rounded-[10px]">
                                    <div className="img w-[40px] h-[40px] overflow-hidden rounded-[10px]">
                                        <img src="https://c8.alamy.com/comp/2K4NYNB/carrom-board-game-illustration-vector-on-a-white-background-2K4NYNB.jpg"
                                            alt="" />
                                    </div>
                                    <div className="text-sm text-black">
                                        Carrom Challenge
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Footer section of left sidebar --> */}
                    <div className="relative bottom-[50px] text-xs text-slate-500">
                        Privacy Terms Advertising Ad Choices
                        <br />
                        Cookies More Meta &copy; 2023
                    </div>
                </div>

                {/* <!-- Center content --> */}
                <div className="center-content ml-[25vw] p-8 w-[50vw] flex flex-col">
                    {/* <!-- Stories --> */}
                    <div className="top w-full h-fit">
                        <div className="stories flex h-[200px] w-full overflow-scroll">
                            {/* <!-- Add story --> */}
                            <div
                                className="add-story shadow min-w-[130px] h-full rounded-[10px] bg-white relative overflow-hidden flex flex-col items-center">
                                <div className="h-[155px] overflow-hidden">
                                    <img src="/profile.png" alt="" />
                                </div>
                                <div className="h-[45px] w-full flex flex-col items-center">
                                    <div
                                        className="icon text-xl bg-blue-500 w-[30px] h-[30px] flex items-center justify-center relative bottom-[15px] text-white rounded-[50%] border-[3px] border-white">
                                        +
                                    </div>
                                    <div className="text-sm relative bottom-2">Create story</div>
                                </div>
                            </div>

                            {/* <!-- Friends stories --> */}
                            <div className="friend-story relative ml-2 shadow rounded-[10px] overflow-hidden min-w-[130px] h-full">
                                <div className="background z-[1]">
                                    <div
                                        className="shade bg-gradient-to-t from-black via-transparent to-white w-full h-full absolute">
                                    </div>
                                    <img className="z-[1]" src="https://picsum.photos/id/24/130/200" alt="Story image" />
                                </div>
                                <div
                                    className="profile w-[40px] h-[40px] z-[3] absolute top-2 left-2 border-[3px] border-blue-500 rounded-[50%] overflow-hidden">
                                    <img src="https://picsum.photos/id/89/40/40" alt="Profile" />
                                </div>
                                <div className="name absolute bottom-2 text-white left-2 text-xs font-medium">
                                    Ali Asghar Mahar
                                </div>
                            </div>
                            <div className="friend-story relative ml-2 shadow rounded-[10px] overflow-hidden min-w-[130px] h-full">
                                <div className="background z-[1]">
                                    <div
                                        className="shade bg-gradient-to-t from-black via-transparent to-white w-full h-full absolute">
                                    </div>
                                    <img className="z-[1]" src="https://picsum.photos/id/20/130/200" alt="Story image" />
                                </div>
                                <div
                                    className="profile w-[40px] h-[40px] z-[3] absolute top-2 left-2 border-[3px] border-blue-500 rounded-[50%] overflow-hidden">
                                    <img src="https://picsum.photos/id/90/40/40" alt="Profile" />
                                </div>
                                <div className="name absolute bottom-2 text-white left-2 text-xs font-medium">
                                    Wajid Ali Soomro
                                </div>
                            </div>
                            <div className="friend-story relative ml-2 shadow rounded-[10px] overflow-hidden min-w-[130px] h-full">
                                <div className="background z-[1]">
                                    <div
                                        className="shade bg-gradient-to-t from-black via-transparent to-white w-full h-full absolute">
                                    </div>
                                    <img className="z-[1]" src="https://picsum.photos/id/28/130/200" alt="Story image" />
                                </div>
                                <div
                                    className="profile w-[40px] h-[40px] z-[3] absolute top-2 left-2 border-[3px] border-blue-500 rounded-[50%] overflow-hidden">
                                    <img src="https://picsum.photos/id/120/40/40" alt="Profile" />
                                </div>
                                <div className="name absolute bottom-2 text-white left-2 text-xs font-medium">
                                    Parvez Ahmed
                                </div>
                            </div>
                            <div className="friend-story relative ml-2 shadow rounded-[10px] overflow-hidden min-w-[130px] h-full">
                                <div className="background z-[1]">
                                    <div
                                        className="shade bg-gradient-to-t from-black via-transparent to-white w-full h-full absolute">
                                    </div>
                                    <img className="z-[1]" src="https://picsum.photos/id/240/130/200" alt="Story image" />
                                </div>
                                <div
                                    className="profile w-[40px] h-[40px] z-[3] absolute top-2 left-2 border-[3px] border-blue-500 rounded-[50%] overflow-hidden">
                                    <img src="https://picsum.photos/id/201/40/40" alt="Profile" />
                                </div>
                                <div className="name absolute bottom-2 text-white left-2 text-xs font-medium">
                                    Ayesha Haider
                                </div>
                            </div>
                            <div className="friend-story relative ml-2 shadow rounded-[10px] overflow-hidden min-w-[130px] h-full">
                                <div className="background z-[1]">
                                    <div
                                        className="shade bg-gradient-to-t from-black via-transparent to-white w-full h-full absolute">
                                    </div>
                                    <img className="z-[1]" src="https://picsum.photos/id/242/130/200" alt="Story image" />
                                </div>
                                <div
                                    className="profile w-[40px] h-[40px] z-[3] absolute top-2 left-2 border-[3px] border-blue-500 rounded-[50%] overflow-hidden">
                                    <img src="https://picsum.photos/id/231/40/40" alt="Profile" />
                                </div>
                                <div className="name absolute bottom-2 text-white left-2 text-xs font-medium">
                                    Umair Ali Malik
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- create post section --> */}
                    <div className="create-post w-full p-3 bg-white mt-4 rounded-[10px] shadow">
                        <div className="flex flex-col">

                            <div className="flex items-center gap-3 pb-3 border-b border-slate-300">
                                <div className="rounded-[50%] w-[40px] h-[40px] border border-slate-400 overflow-hidden">
                                    <img src="/profile.png" alt="Profile" />
                                </div>
                                <div className="w-full bg-slate-200 rounded-[40px] p-2">
                                    <input className="bg-transparent w-full outline-none" type="text"
                                        placeholder="What's on your mind, Abdul Ghaffar?" />
                                </div>
                            </div>

                            <div className="mt-3 flex items-center justify-between">
                                <div
                                    className="gap-2 flex-1 hover:bg-slate-200 flex items-center justify-center p-2 rounded-[10px]">
                                    {/* <!-- Icon --> */}
                                    <div>
                                        <img height="24" width="24" alt="" referrerpolicy="origin-when-cross-origin"
                                            src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/c0dWho49-X3.png?_nc_eui2=AeGTExc94lzLdqCUqebR7-ijVnUPE18ZZ-dWdQ8TXxln593hLyFF_Sw9Qmr1xi97vmX4mfK89JtWXOzibHkqYSjE" />
                                    </div>
                                    {/* <!-- Title --> */}
                                    <div>
                                        Live video
                                    </div>
                                </div>
                                <div
                                    className="gap-2 flex-1 hover:bg-slate-200 flex items-center justify-center p-2 rounded-[10px]">
                                    {/* <!-- Icon --> */}
                                    <div>
                                        <img height="24" width="24" alt="" referrerpolicy="origin-when-cross-origin"
                                            src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/Ivw7nhRtXyo.png?_nc_eui2=AeFVkcehYO3KfyBz4Erymt26PL4YoeGsw5I8vhih4azDkopvmxeLaU59aXG3IUDtrU6zGaY77NCt4A_sHii6Ges_" />
                                    </div>
                                    {/* <!-- Title --> */}
                                    <div>
                                        Photo/video
                                    </div>
                                </div>
                                <div
                                    className="gap-2 flex-1 hover:bg-slate-200 flex items-center justify-center p-2 rounded-[10px]">
                                    {/* <!-- Icon --> */}
                                    <div>
                                        <img height="24" width="24" alt="" referrerpolicy="origin-when-cross-origin"
                                            src="https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/Y4mYLVOhTwq.png?_nc_eui2=AeEo3rklQSHfZgTnULa0Yvv6vPIN-OmHLJy88g346YcsnNgnRDMYjzlmZQ1NeoPyqYNInfbhEuw-u9EfZzYet1Ae" />
                                    </div>
                                    {/* <!-- Title --> */}
                                    <div>
                                        Feeling/activity
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- all posts --> */}
                    <div className="posts mt-5 pb-[100px]">
                        <div className="post w-full h-fit bg-white rounded-[10px] shadow">
                            <div className="top p-3 flex justify-between items-center">
                                <div className="left flex items-center">
                                    <div
                                        className="profile w-[40px] h-[40px] rounded-[50%] overflow-hidden border border-slate-400">
                                        <img src="https://picsum.photos/id/234/40/40" alt="" />
                                    </div>
                                    <div className="ml-2">
                                        <div className="name font-semibold">
                                            Wajid Ali
                                        </div>
                                        <div className="time flex items-center text-xs gap-2">
                                            <div className="time">
                                                20m
                                            </div>
                                            <div className="publicity">
                                                <svg fill="currentColor" viewBox="0 0 16 16" width="1em" height="1em"
                                                    className="x1lliihq x1k90msu x2h7rmj x1qfuztq xcza8v6 x1kpxq89 xsmyaan"
                                                    title="Shared with Public">
                                                    <title>Shared with Public</title>
                                                    <g fill-rule="evenodd" transform="translate(-448 -544)">
                                                        <g>
                                                            <path
                                                                d="M109.5 408.5c0 3.23-2.04 5.983-4.903 7.036l.07-.036c1.167-1 1.814-2.967 2-3.834.214-1 .303-1.3-.5-1.96-.31-.253-.677-.196-1.04-.476-.246-.19-.356-.59-.606-.73-.594-.337-1.107.11-1.954.223a2.666 2.666 0 0 1-1.15-.123c-.007 0-.007 0-.013-.004l-.083-.03c-.164-.082-.077-.206.006-.36h-.006c.086-.17.086-.376-.05-.529-.19-.214-.54-.214-.804-.224-.106-.003-.21 0-.313.004l-.003-.004c-.04 0-.084.004-.124.004h-.037c-.323.007-.666-.034-.893-.314-.263-.353-.29-.733.097-1.09.28-.26.863-.8 1.807-.22.603.37 1.166.667 1.666.5.33-.11.48-.303.094-.87a1.128 1.128 0 0 1-.214-.73c.067-.776.687-.84 1.164-1.2.466-.356.68-.943.546-1.457-.106-.413-.51-.873-1.28-1.01a7.49 7.49 0 0 1 6.524 7.434"
                                                                transform="translate(354 143.5)"></path>
                                                            <path
                                                                d="M104.107 415.696A7.498 7.498 0 0 1 94.5 408.5a7.48 7.48 0 0 1 3.407-6.283 5.474 5.474 0 0 0-1.653 2.334c-.753 2.217-.217 4.075 2.29 4.075.833 0 1.4.561 1.333 2.375-.013.403.52 1.78 2.45 1.89.7.04 1.184 1.053 1.33 1.74.06.29.127.65.257.97a.174.174 0 0 0 .193.096"
                                                                transform="translate(354 143.5)"></path>
                                                            <path fill-rule="nonzero"
                                                                d="M110 408.5a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-1 0a7 7 0 1 0-14 0 7 7 0 0 0 14 0z"
                                                                transform="translate(354 143.5)"></path>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="right flex">
                                    <div
                                        className="dots w-[40px] h-[40px] hover:bg-slate-200 rounded-[50%] flex items-center justify-center">
                                        <svg fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"
                                            className="x1lliihq x1k90msu x2h7rmj x1qfuztq xcza8v6 x1qx5ct2 xw4jnvo">
                                            <g fill-rule="evenodd" transform="translate(-446 -350)">
                                                <path
                                                    d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0">
                                                </path>
                                            </g>
                                        </svg>
                                    </div>
                                    <div
                                        className="cross w-[40px] h-[40px] hover:bg-slate-200 rounded-[50%] flex items-center justify-center">
                                        <i data-visualcompletion="css-img" className="x1b0d499 x1d69dk1"
                                            style={{ backgroundImage: 'url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yK/r/MFvKLpsrkUg.png?_nc_eui2=AeEIhjuSiETOwDkLWyWSsIfCWkl6jMLXtQ1aSXqMwte1DY0lCkDauN2viLdK-TBOdB-8qXH7oM4N52fNTMGppzrF&quot;)', backgroundPosition: '0px -105px', backgroundSize: 'auto', width: '20px', height: '20px', backgroundRepeat: 'no-repeat', display: 'inline-block' }}></i>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- main image of post --> */}
                            <div className="w-full border-b border-t border-slate-300 text-center">
                                <img src="https://picsum.photos/id/257/800/500" alt="" />
                            </div>
                            {/* <!-- Bottom of post --> */}
                            <div className="bottom-of-post p-3">
                                <div className="w-full border-b flex items-center pb-2 border-b border-slate-300">
                                    <span className="like ">
                                        <img className="border-2 border-white rounded-[50%] relative z-[3]" height="23"
                                            role="presentation"
                                            src="data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint0_linear_15251_63610)'/%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint1_radial_15251_63610)'/%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint2_radial_15251_63610)' fill-opacity='.5'/%3E%3Cpath d='M7.3014 3.8662a.6974.6974 0 0 1 .6974-.6977c.6742 0 1.2207.5465 1.2207 1.2206v1.7464a.101.101 0 0 0 .101.101h1.7953c.992 0 1.7232.9273 1.4917 1.892l-.4572 1.9047a2.301 2.301 0 0 1-2.2374 1.764H6.9185a.5752.5752 0 0 1-.5752-.5752V7.7384c0-.4168.097-.8278.2834-1.2005l.2856-.5712a3.6878 3.6878 0 0 0 .3893-1.6509l-.0002-.4496ZM4.367 7a.767.767 0 0 0-.7669.767v3.2598a.767.767 0 0 0 .767.767h.767a.3835.3835 0 0 0 .3835-.3835V7.3835A.3835.3835 0 0 0 5.134 7h-.767Z' fill='%23fff'/%3E%3Cdefs%3E%3CradialGradient id='paint1_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(90 .0005 8) scale(7.99958)'%3E%3Cstop offset='.5618' stop-color='%230866FF' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%230866FF' stop-opacity='.1'/%3E%3C/radialGradient%3E%3CradialGradient id='paint2_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(45 -4.5257 10.9237) scale(10.1818)'%3E%3Cstop offset='.3143' stop-color='%2302ADFC'/%3E%3Cstop offset='1' stop-color='%2302ADFC' stop-opacity='0'/%3E%3C/radialGradient%3E%3ClinearGradient id='paint0_linear_15251_63610' x1='2.3989' y1='2.3999' x2='13.5983' y2='13.5993' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2302ADFC'/%3E%3Cstop offset='.5' stop-color='%230866FF'/%3E%3Cstop offset='1' stop-color='%232B7EFF'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E"
                                            width="23" />
                                    </span>
                                    <span className="love">
                                        <img className="border-2 border-white rounded-[50%] z-[2] relative right-1" height="23"
                                            role="presentation"
                                            src="data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cg clip-path='url(%23clip0_15251_63610)'%3E%3Cpath d='M15.9953 7.9996c0 4.418-3.5816 7.9996-7.9996 7.9996S-.004 12.4176-.004 7.9996 3.5776 0 7.9957 0c4.418 0 7.9996 3.5815 7.9996 7.9996Z' fill='url(%23paint0_linear_15251_63610)'/%3E%3Cpath d='M15.9973 7.9992c0 4.4178-3.5811 7.9992-7.9987 7.9992C3.5811 15.9984 0 12.417 0 7.9992S3.5811 0 7.9986 0c4.4176 0 7.9987 3.5814 7.9987 7.9992Z' fill='url(%23paint1_radial_15251_63610)'/%3E%3Cpath d='M15.9953 7.9996c0 4.418-3.5816 7.9996-7.9996 7.9996S-.004 12.4176-.004 7.9996 3.5776 0 7.9957 0c4.418 0 7.9996 3.5815 7.9996 7.9996Z' fill='url(%23paint2_radial_15251_63610)' fill-opacity='.8'/%3E%3Cpath d='M12.5278 8.1957c.4057.1104.6772.4854.623.9024-.3379 2.6001-2.5167 4.9012-5.1542 4.9012s-4.8163-2.3011-5.1542-4.9012c-.0542-.417.2173-.792.623-.9024.8708-.237 2.5215-.596 4.5312-.596 2.0098 0 3.6605.359 4.5312.596Z' fill='%234B280E'/%3E%3Cpath d='M11.5809 12.3764c-.9328.9843-2.1948 1.6228-3.5841 1.6228-1.3892 0-2.6512-.6383-3.5839-1.6225a1.5425 1.5425 0 0 0-.016-.0174c.4475-1.0137 2.2-1.3599 3.5999-1.3599 1.4 0 3.1514.3468 3.5998 1.3599l-.0157.0171Z' fill='url(%23paint3_linear_15251_63610)'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M13.3049 5.8793c.1614-1.1485-.6387-2.2103-1.7872-2.3717l-.0979-.0138c-1.1484-.1614-2.2103.6388-2.3717 1.7872l-.0163.1164a.5.5 0 0 0 .9902.1392l.0163-.1164c.0846-.6016.6408-1.0207 1.2424-.9362l.0978.0138c.6016.0845 1.0207.6407.9362 1.2423l-.0164.1164a.5.5 0 0 0 .9903.1392l.0163-.1164ZM2.6902 5.8793c-.1614-1.1485.6387-2.2103 1.7872-2.3717l.0979-.0138c1.1484-.1614 2.2103.6388 2.3717 1.7872l.0164.1164a.5.5 0 1 1-.9903.1392l-.0163-.1164c-.0846-.6016-.6408-1.0207-1.2423-.9362l-.098.0138c-.6015.0845-1.0206.6407-.936 1.2423l.0163.1164a.5.5 0 0 1-.9902.1392l-.0164-.1164Z' fill='%231C1C1D'/%3E%3C/g%3E%3Cdefs%3E%3CradialGradient id='paint1_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='matrix(0 7.9992 -7.99863 0 7.9986 7.9992)'%3E%3Cstop offset='.5637' stop-color='%23FF5758' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23FF5758' stop-opacity='.1'/%3E%3C/radialGradient%3E%3CradialGradient id='paint2_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(45 -4.5272 10.9202) scale(10.1818)'%3E%3Cstop stop-color='%23FFF287'/%3E%3Cstop offset='1' stop-color='%23FFF287' stop-opacity='0'/%3E%3C/radialGradient%3E%3ClinearGradient id='paint0_linear_15251_63610' x1='2.396' y1='2.3999' x2='13.5954' y2='13.5993' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FFF287'/%3E%3Cstop offset='1' stop-color='%23F68628'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint3_linear_15251_63610' x1='5.1979' y1='10.7996' x2='5.245' y2='14.2452' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FF60A4'/%3E%3Cstop offset='.2417' stop-color='%23FA2E3E'/%3E%3Cstop offset='1' stop-color='%23BC0A26'/%3E%3C/linearGradient%3E%3CclipPath id='clip0_15251_63610'%3E%3Cpath fill='%23fff' d='M-.002 0h16v15.9992h-16z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E"
                                            width="23" />
                                    </span>
                                    <span className="haha">
                                        <img className="border-2 border-white rounded-[50%] z-[1] relative right-2" height="23"
                                            role="presentation"
                                            src="data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cg clip-path='url(%23clip0_15251_63610)'%3E%3Cpath d='M15.9963 8c0 4.4179-3.5811 7.9993-7.9986 7.9993-4.4176 0-7.9987-3.5814-7.9987-7.9992 0-4.4179 3.5811-7.9992 7.9987-7.9992 4.4175 0 7.9986 3.5813 7.9986 7.9992Z' fill='url(%23paint0_linear_15251_63610)'/%3E%3Cpath d='M15.9973 7.9992c0 4.4178-3.5811 7.9992-7.9987 7.9992C3.5811 15.9984 0 12.417 0 7.9992S3.5811 0 7.9986 0c4.4176 0 7.9987 3.5814 7.9987 7.9992Z' fill='url(%23paint1_radial_15251_63610)'/%3E%3Cpath d='M7.9996 5.9081c-.3528-.8845-1.1936-1.507-2.1748-1.507-1.4323 0-2.4254 1.328-2.4254 2.6797 0 2.2718 2.3938 4.0094 4.0816 5.1589.3168.2157.7205.2157 1.0373 0 1.6878-1.1495 4.0815-2.8871 4.0815-5.159 0-1.3517-.993-2.6796-2.4254-2.6796-.9811 0-1.822.6225-2.1748 1.507Z' fill='%23fff'/%3E%3C/g%3E%3Cdefs%3E%3CradialGradient id='paint1_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='matrix(0 7.9992 -7.99863 0 7.9986 7.9992)'%3E%3Cstop offset='.5637' stop-color='%23E11731' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23E11731' stop-opacity='.1'/%3E%3C/radialGradient%3E%3ClinearGradient id='paint0_linear_15251_63610' x1='2.3986' y1='2.4007' x2='13.5975' y2='13.5993' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FF74AE'/%3E%3Cstop offset='.5001' stop-color='%23FA2E3E'/%3E%3Cstop offset='1' stop-color='%23FF5758'/%3E%3C/linearGradient%3E%3CclipPath id='clip0_15251_63610'%3E%3Cpath fill='%23fff' d='M-.001.0009h15.9992v15.9984H-.001z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E"
                                            width="23" />
                                    </span>
                                    <span className="text-[17px] text-slate-500">Ahmed ali and 35 others</span>
                                </div>
                                <div className="flex items-center justify-center mt-2 text-slate-600">
                                    <div className="likebtn gap-2 flex-1 flex items-center justify-center hover:bg-slate-200 p-1 rounded-[4px]">
                                        <div className="icon flex justify-center items-center">
                                            <i data-visualcompletion="css-img" className="x1b0d499 x1d69dk1"

                                                style={{ backgroundImage: 'url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/ADfoczOeItN.png?_nc_eui2=AeGuSdnxFCFq8bPROA2dR3uyoxse_gacPeijGx7-Bpw96GBBgFX3LJIkdjneuB7LskBaatxLvBi7K_RSUvEKscAw&quot;)', backgroundPosition: '0px -105px', backgroundSize: 'auto', width: '20px', height: '20px', backgroundRepeat: 'no-repeat', display: 'inline-block' }}
                                            ></i>
                                        </div>
                                        <div className="title">
                                            Like
                                        </div>
                                    </div>
                                    <div className="commentbtn gap-2 flex-1 flex items-center justify-center hover:bg-slate-200 p-1 rounded-[4px]">
                                        <div className="icon flex justify-center items-center">
                                            <i data-visualcompletion="css-img" className="x1b0d499 x1d69dk1"
                                                style={{ backgroundImage: 'url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/ADfoczOeItN.png?_nc_eui2=AeGuSdnxFCFq8bPROA2dR3uyoxse_gacPeijGx7-Bpw96GBBgFX3LJIkdjneuB7LskBaatxLvBi7K_RSUvEKscAw&quot;)', backgroundPosition: '0px -105px', backgroundSize: 'auto', width: '20px', height: '20px', backgroundRepeat: 'no-repeat', display: 'inline-block' }}
                                            ></i>
                                        </div>
                                        <div className="title">
                                            Comment
                                        </div>
                                    </div>
                                </div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Right sidebar of main content --> */}
                <div className="right-content w-[23vw] mx-5 fixed right-0">
                    {/* <!-- Sponsors section starting from here --> */}
                    <div className="sponsers flex flex-col mt-3  border-b border-slate-400 pb-3">
                        <h1 className="text-lg bolder my-3 text-slate-600">Sponsored</h1>
                        <div className="sponser flex items-center gap-2">
                            <div className="image rounded-[10px] overflow-hidden w-[120px] h-[120px]">
                                <img src="https://picsum.photos/id/26/150/150" alt="" />
                            </div>
                            <div className="text">
                                <div className="title bolder">
                                    Create an Azure account
                                </div>
                                <div className="link text-slate-500 text-xs">
                                    azure.microsoft.com
                                </div>
                            </div>
                        </div>

                        <div className="sponser flex items-center gap-2 mt-3">
                            <div className="image rounded-[10px] overflow-hidden w-[120px] h-[120px]">
                                <img src="https://picsum.photos/id/28/150/150" alt="" />
                            </div>
                            <div className="text">
                                <div className="title bolder">
                                    No more IP claims
                                </div>
                                <div className="link text-slate-500 text-xs">
                                    app.trackmyorders.com
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Sponsers End here --> */}

                    {/* <!-- Pages section starting from here --> */}
                    <div className="pages border-b border-slate-400 pb-2">
                        <div className="top flex items-center justify-between mt-2">
                            <div className="text-lg font-semibold text-slate-600">
                                Your Pages and profiles
                            </div>
                            <div
                                className="dots w-[40px] h-[40px] hover:bg-slate-400 rounded-[50%] flex items-center justify-center transition duration-300">
                                <i data-visualcompletion="css-img" className="x1b0d499 x1d69dk1"

                                    style={{ backgroundImage: "url('https://static.xx.fbcdn.net/rsrc.php/v3/yK/r/MFvKLpsrkUg.png?_nc_eui2=AeEIhjuSiETOwDkLWyWSsIfCWkl6jMLXtQ1aSXqMwte1DY0lCkDauN2viLdK-TBOdB-8qXH7oM4N52fNTMGppzrF')", backgroundPosition: '0px -105px', backgroundSize: 'auto', width: '20px', height: '20px', backgroundRepeat: 'no-repeat', display: 'inline-block' }}
                                ></i>
                            </div>
                        </div>
                        <div className="center w-full p-2 flex items-center gap-2 hover:bg-slate-300 rounded-[10px]">
                            <div className="img w-[35px] h-[35px] rounded-[50%] overflow-hidden border border-slate-500">
                                <img src="/profile.png" alt="" />
                            </div>
                            <div>
                                Abdul Ghaffar Soomro
                            </div>
                        </div>
                        <div className="bottom flex gap-2 pl-4 p-1 hover:bg-slate-300 items-center rounded-[10px]">
                            <div className="icon mt-1">
                                <i data-visualcompletion="css-img" className=""

                                    style={{ backgroundImage: "url('https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/QA_CLtk0Ayt.png?_nc_eui2=AeHEVEctKBbeo8AVlC5Un36gN1aj7k1yOTE3VqPuTXI5MU4JtEDfxQBmBwh8JyNlkwRb-TuliF207NKc4j6h4JpL')", backgroundPosition: '0px -105px', backgroundSize: 'auto', width: '20px', height: '20px', backgroundRepeat: 'no-repeat', display: 'inline-block' }}

                                ></i>
                            </div>
                            <div className="text-xs text-slate-500">
                                Create promotion
                            </div>
                        </div>
                    </div>
                    {/* <!-- Pages section end here --> */}

                    <div className="contacts">
                        <div className="top flex justify-between items-center mt-3">
                            <div className="text-slate-700 font-semibold">
                                Contacts
                            </div>
                            <div className="flex items-center gap-4">
                                <div>
                                    <svg fill="currentColor" viewBox="0 0 16 16" width="1em" height="1em"
                                        className="x1lliihq x1k90msu x2h7rmj x1qfuztq xcza8v6 xlup9mm x1kky2od">
                                        <g fill-rule="evenodd" transform="translate(-448 -544)">
                                            <g fill-rule="nonzero">
                                                <path
                                                    d="M10.743 2.257a6 6 0 1 1-8.485 8.486 6 6 0 0 1 8.485-8.486zm-1.06 1.06a4.5 4.5 0 1 0-6.365 6.364 4.5 4.5 0 0 0 6.364-6.363z"
                                                    transform="translate(448 544)"></path>
                                                <path
                                                    d="M10.39 8.75a2.94 2.94 0 0 0-.199.432c-.155.417-.23.849-.172 1.284.055.415.232.794.54 1.103a.75.75 0 0 0 1.112-1.004l-.051-.057a.39.39 0 0 1-.114-.24c-.021-.155.014-.356.09-.563.031-.081.06-.145.08-.182l.012-.022a.75.75 0 1 0-1.299-.752z"
                                                    transform="translate(448 544)"></path>
                                                <path
                                                    d="M9.557 11.659c.038-.018.09-.04.15-.064.207-.077.408-.112.562-.092.08.01.143.034.198.077l.041.036a.75.75 0 0 0 1.06-1.06 1.881 1.881 0 0 0-1.103-.54c-.435-.058-.867.018-1.284.175-.189.07-.336.143-.433.2a.75.75 0 0 0 .624 1.356l.066-.027.12-.061z"
                                                    transform="translate(448 544)"></path>
                                                <path
                                                    d="m13.463 15.142-.04-.044-3.574-4.192c-.599-.703.355-1.656 1.058-1.057l4.191 3.574.044.04c.058.059.122.137.182.24.249.425.249.96-.154 1.41l-.057.057c-.45.403-.986.403-1.411.154a1.182 1.182 0 0 1-.24-.182zm.617-.616.444-.444a.31.31 0 0 0-.063-.052c-.093-.055-.263-.055-.35.024l.208.232.207-.206.006.007-.22.257-.026-.024.033-.034.025.027-.257.22-.007-.007zm-.027-.415c-.078.088-.078.257-.023.35a.31.31 0 0 0 .051.063l.205-.204-.233-.209z"
                                                    transform="translate(448 544)"></path>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <div>
                                    <svg fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"
                                        className="x1lliihq x1k90msu x2h7rmj x1qfuztq xcza8v6 x1qx5ct2 xw4jnvo">
                                        <g fill-rule="evenodd" transform="translate(-446 -350)">
                                            <path
                                                d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0">
                                            </path>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="actives mt-2">
                            <div className="active flex items-center gap-2 relative p-2 rounded-[10px] hover:bg-slate-300">
                                <div className="relative w-[35px] h-[35px]">
                                    <div className="w-[35px] h-[35px] overflow-hidden rounded-[50%] border border-slate-400">
                                        <img src="https://picsum.photos/id/26/150/150" alt="" />
                                    </div>
                                    <div
                                        className="online rounded-[50%] w-[11px] bg-green-600 h-[11px] z-[2] border-2 border-slate-200 absolute bottom-0 right-0">
                                    </div>
                                </div>
                                <div className="text-sm font-medium tracking-wide">
                                    Fiyaz Khan Dahar
                                </div>
                            </div>
                            <div className="active flex items-center gap-2 relative p-2 rounded-[10px] hover:bg-slate-300">
                                <div className="relative w-[35px] h-[35px]">
                                    <div className="w-[35px] h-[35px] overflow-hidden rounded-[50%] border border-slate-400">
                                        <img src="https://picsum.photos/id/269/150/150" alt="" />
                                    </div>
                                    <div
                                        className="online rounded-[50%] w-[11px] bg-green-600 h-[11px] z-[2] border-2 border-slate-200 absolute bottom-0 right-0">
                                    </div>
                                </div>
                                <div className="text-sm font-medium tracking-wide">
                                    Ghulam Mustafa Soomro
                                </div>
                            </div>
                            <div className="active flex items-center gap-2 relative p-2 rounded-[10px] hover:bg-slate-300">
                                <div className="relative w-[35px] h-[35px]">
                                    <div className="w-[35px] h-[35px] overflow-hidden rounded-[50%] border border-slate-400">
                                        <img src="https://picsum.photos/id/223/150/150" alt="" />
                                    </div>
                                    <div
                                        className="online rounded-[50%] w-[11px] bg-green-600 h-[11px] z-[2] border-2 border-slate-200 absolute bottom-0 right-0">
                                    </div>
                                </div>
                                <div className="text-sm font-medium tracking-wide">
                                    Shahid Hussain
                                </div>
                            </div>
                            <div className="active flex items-center gap-2 relative p-2 rounded-[10px] hover:bg-slate-300">
                                <div className="relative w-[35px] h-[35px]">
                                    <div className="w-[35px] h-[35px] overflow-hidden rounded-[50%] border border-slate-400">
                                        <img src="https://picsum.photos/id/17/150/150" alt="" />
                                    </div>
                                    <div
                                        className="online rounded-[50%] w-[11px] bg-green-600 h-[11px] z-[2] border-2 border-slate-200 absolute bottom-0 right-0">
                                    </div>
                                </div>
                                <div className="text-sm font-medium tracking-wide">
                                    Ayesha Haider
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section >
        </div >

    )
}

export default page