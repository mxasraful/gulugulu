import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Home = ({ darkMode, darkPreference }) => {
    const [searchItem, setSearchItem] = useState(null)

    const history = useHistory()

    const handleSearch = () => {
        if (searchItem) {
            if (searchItem.length >= 1) {
                history.push("/search/" + searchItem)
            }
        }
    }

    return (
        <div className='home flex flex-col min-h-screen'>
            <main className='flex-grow'>
                <div className='pb-1 pt-1 flex flex-wrap sm:justify-between justify-center items-center grid grid-cols-4 gap-4 place-items-center'>
                    <div class="">

                    </div>
                    <div class="flex col-span-2 w-full justify-center">

                    </div>
                    <div class="">
                        <button onClick={() => darkMode()} className="dark-mode-btn dark:text-white p-3 bg-slate-200 dark:bg-slate-600 rounded-full">
                            {
                                darkPreference ?
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sun-fill" viewBox="0 0 16 16">
                                        <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                                    </svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-fill" viewBox="0 0 16 16">
                                        <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                                    </svg>
                            }
                        </button>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div style={{ textAlign: "center" }} className="md:w-2/5 sm:w-4/5 end:w-9/10">
                        <div className='text-black mt-44 dark:text-white text-4xl logo-text'>GuluGulu</div>
                        <br /><br />
                        <form onSubmit={() => handleSearch()} class="mb-6 relative flex justify-right">
                            <input onChange={(e) => setSearchItem(e.target.value)} type="text" id="large-input" placeholder='Search' class="absolute w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            <button onClick={() => handleSearch()} type='button' class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute left-0 top-0 w-22" style={{ marginLeft: "88%", marginTop: "9px" }}>
                                Button
                            </button>
                        </form>
                    </div>
                </div>
            </main>
            <footer>
                <div className="flex justify-center px-3 md:px-12 py-8">
                    <div className=" text-slate-800 dark:text-slate-100 w-3/5">Copyright © All Rights Recerved By <a href="https://asrafulweb.com" className='text-cyan-400'>AsrafulWeb</a>.</div>
                    <div className="ml-2 md:ml-1 text-slate-800 dark:text-slate-100 w-2/5"><span className='float-right'> Developed By <a href="https://mxasraful.com" className='text-cyan-400'>Mx Asraful</a>.</span></div>
                </div>
            </footer>
        </div >
    );
};

export default Home;