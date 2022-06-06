import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './Header.css'

const Header = ({ darkMode, darkPreference }) => {
    const [searchItem, setSearchItem] = useState(null)

    const history = useHistory()
    const params = useParams()

    const handleSearch = () => {
        history.push("/search/"+searchItem)
    }

    useEffect(() => {
        setSearchItem(params.q)
    }, [])

    return (
        <div className='pb-1 pt-1 flex flex-wrap dark:bg-slate-700 sm:justify-between justify-center items-center border-b dark:border-gray-700 grid grid-cols-4 gap-4 place-items-center'>
            <div class="">
                <Link to='/'>
                    <h2 className='text-black dark:text-white text-2xl logo-text'>Gulu</h2>
                </Link>
            </div>
            <div class="flex col-span-2 w-full justify-center">
                <div className="mt-2 mb-2 dark:bg-slate-400 relative rounded-md shadow-sm w-3/4">
                    <input
                        type="text"
                        name="Search"
                        id="headerSearchBox"
                        onChange={(e) => setSearchItem(e.target.value)}
                        className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-20 sm:text-sm border-gray-300 rounded-md"
                        placeholder="Search"
                        value={searchItem}
                    />
                    <button onClick={() => handleSearch()} className="absolute inset-y-0 right-0 flex items-center p-3 text-white rounded-r-md click:text-current bg-indigo-500">
                        Search
                    </button>
                </div>
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
    );
};

export default Header;