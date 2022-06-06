import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Result = () => {

    const [loading, setLoading] = useState(true)
    const [searchResult, setSearchResult] = useState(null)
    const [resultError, setResultError] = useState(null)
    const [resultErrorMsg, setResultErrorMsg] = useState(null)

    const params = useParams()

    // Option for RapidApi Vadidation
    const options = {
        method: 'GET',
        headers: {
            'X-User-Agent': 'desktop',
            'X-Proxy-Location': 'EU',
            'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
            'X-RapidAPI-Key': '049f5170e7msh9e17d35b8beaaddp11fe29jsn9f2ba2af2ae5'
        }
    };

    // Get Search result from RapidAPI
    useEffect(() => {
        setLoading(true)
        fetch(`https://google-search3.p.rapidapi.com/api/v1/search/q=${params.q}`, options)
            .then(response => response.json())
            .then(res => {
                const data = res.results
                setSearchResult(data)
                setLoading(false)
                setResultError(false)
            })
            .catch(err => {
                setResultError(true)
                setResultErrorMsg(err.message)
                setLoading(false)
            });
    }, [params])

    console.log(searchResult, resultError)


    return (
        <div className="resultPageMain mb-8">
            {
                loading ?
                    <div className='container mx-auto'>
                        <div className="flex flex-row">
                            <div className="w-2/3">
                                <div class=" rounded-md p-4 w-full mb-6 mt-12">
                                    <div class="animate-pulse flex space-x-4">
                                        <div class="flex flex-row w-full">
                                            <div class="h-2 w-2/12 bg-slate-700 mr-2 rounded"></div>
                                            <div class="h-2 w-2/12 bg-slate-700 mr-2 rounded"></div>
                                            <div class="h-2 w-2/12 bg-slate-700 mr-2 rounded"></div>
                                            <div class="h-2 w-2/12 bg-slate-700 mr-2 rounded"></div>
                                            <div class="h-2 w-2/12 bg-slate-700 mr-2 rounded"></div>
                                            <div class="h-2 w-2/12 bg-slate-700 mr-2 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class=" rounded-md p-4  mb-6 w-full">
                                    <div class="animate-pulse flex space-x-4">
                                        <div class="rounded-full bg-slate-700 h-10 w-10"></div>
                                        <div class="flex-1 space-y-6 py-1">
                                            <div class="h-2 bg-slate-700 rounded"></div>
                                            <div class="space-y-3">
                                                <div class="grid grid-cols-3 gap-4">
                                                    <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                                                    <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                                                </div>
                                                <div class="h-2 bg-slate-700 rounded"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class=" rounded-md p-4 mb-6  w-full">
                                    <div class="animate-pulse flex space-x-4">
                                        <div class="rounded-full bg-slate-700 h-10 w-10"></div>
                                        <div class="flex-1 space-y-6 py-1">
                                            <div class="h-2 bg-slate-700 rounded"></div>
                                            <div class="space-y-3">
                                                <div class="grid grid-cols-3 gap-4">
                                                    <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                                                    <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                                                </div>
                                                <div class="h-2 bg-slate-700 rounded"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class=" rounded-md p-4 mb-6 w-full">
                                    <div class="animate-pulse flex space-x-4">
                                        <div class="rounded-full bg-slate-700 h-10 w-10"></div>
                                        <div class="flex-1 space-y-6 py-1">
                                            <div class="h-2 bg-slate-700 rounded"></div>
                                            <div class="space-y-3">
                                                <div class="grid grid-cols-3 gap-4">
                                                    <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                                                    <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                                                </div>
                                                <div class="h-2 bg-slate-700 rounded"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class=" rounded-md p-4 mb-6 w-full">
                                    <div class="animate-pulse flex space-x-4">
                                        <div class="rounded-full bg-slate-700 h-10 w-10"></div>
                                        <div class="flex-1 space-y-6 py-1">
                                            <div class="h-2 bg-slate-700 rounded"></div>
                                            <div class="space-y-3">
                                                <div class="grid grid-cols-3 gap-4">
                                                    <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                                                    <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                                                </div>
                                                <div class="h-2 bg-slate-700 rounded"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/3 mt-16">
                                <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                                    <div class="animate-pulse">
                                        <div className="flex">
                                            <div class="rounded-md bg-slate-700 h-36 w-40 mb-6 mr-6"></div>
                                            <div class="rounded-md bg-slate-700 h-36 w-40 mb-6"></div>
                                        </div>
                                        <div class="flex-1 space-y-6 py-1">
                                            <div class="h-2 bg-slate-700 rounded"></div>
                                            <div class="space-y-3">
                                                <div class="grid grid-cols-3 gap-4">
                                                    <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                                                    <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                                                </div>
                                                <div class="h-2 bg-slate-700 rounded"></div>
                                                <div class="h-1 bg-slate-700 rounded"></div>
                                                <div class="h-1 bg-slate-700 rounded"></div>
                                                <div class="h-1 bg-slate-700 rounded"></div>
                                                <div class="h-1 bg-slate-700 rounded"></div>
                                                <div class="h-1 bg-slate-700 rounded"></div>
                                                <div class="grid grid-cols-3 gap-4 mt-6">
                                                    <div class="h-6 w-20 bg-slate-700 rounded"></div>
                                                    <div class="h-6 w-20 ml-4 bg-slate-700 rounded"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className='resultPage container mx-auto flex'>
                        <div className="result-items basis-2/3">
                            <div className="tab-items flex gap-4 mt-3 mb-4 border-b pb-2 border-sky-400">
                                <button className='result-tab-item px-3 py-2 focus:border-b-2 focus:border-sky-600 border-transparent dark:text-white'>All</button>
                                <button className='result-tab-item px-3 py-2 focus:border-b-2 focus:border-sky-600 border-transparent dark:text-white'>Images</button>
                                <button className='result-tab-item px-3 py-2 focus:border-b-2 focus:border-sky-600 border-transparent dark:text-white'>Videos</button>
                            </div>
                            <span className="dark:text-white"> 47 results (0.46 seconds) </span>
                            {
                                resultError === null || false ?
                                    <div className='flex justify-center'>
                                        <div className="mt-44">
                                            <h5>We Found Error</h5>
                                        </div>
                                    </div>
                                    :
                                    <>
                                        {
                                            searchResult?.map(dt => (
                                                <div className="mt-3 result-item">
                                                    <div className="mt-2 p-3">
                                                        <a href={dt.link} target="_blank" className="">
                                                            <p className='mb dark:text-white'>{dt.link}</p>
                                                            <h4 className='text-xl text-emerald-500 hover:underline hover:cursor-pointer dark:text-teal-400	'> {dt.title}</h4>
                                                            <span className='dark:text-gray-200'>{dt.description}</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </>
                            }
                        </div>
                        {
                            params?.q === "Mx Asraful" || "Asraful" || "asraful" || "mxasraful" || "" ?
                                <div className="knowledge-panel basis-1/3 pl-7 pt-5 pb-24">
                                    <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                        <section class="">
                                            <div class="container px-5 py-2 mx-auto">
                                                <div class="flex flex-wrap -m-1 md:-m-2">
                                                    <div class="flex flex-wrap">
                                                        <div className='h-28 flex'>
                                                            <div class="w-1/3 p-1 md:p-2">
                                                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg" src="https://mxasraful.com/static/media/mx_asraful_2.27226f52.jpg" />
                                                            </div>
                                                            <div class=" p-1 md:p-2">
                                                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg" src="https://mxasraful.com/static/media/Asrafuls_phopto.ee6e9357.png" />
                                                            </div>
                                                        </div>
                                                        <div class="w-full p-1 md:p-2">
                                                            <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg" src="https://avatars.githubusercontent.com/u/62379845?v=4" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        <div class="p-5">
                                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Asarful Islam</h5>
                                            <span className='dark:text-gray-100 font-medium'>Founder & CEO, AsrafulWeb</span>
                                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                            <a href="https://mxasraful.com" target="blank" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                Website
                                                <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                            </a>
                                            <a className='dark:text-orange-500 hover:underline hover:underline-offset-1 ml-3' href="https://mxasraful.com" target="blank">https://mxasraful.com</a>
                                        </div>
                                        <div className="right-social">
                                            <h5 class="text-xl ml-5 font-bold text-gray-900 dark:text-white ">Social Links</h5>
                                            <div class="p-4">
                                                <a target="blank" href="https://fb.com/asrafulfb">
                                                    <button class="inline-flex items-center justify-center w-9 h-9 mr-2 text-pink-100 transition-colors duration-150 bg-pink-700 rounded-full focus:shadow-outline hover:bg-pink-800 social-item-fb">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                                        </svg>
                                                    </button>
                                                </a>
                                                <a target="blank" href="https://twitter.com/mxasraful">
                                                    <button class="inline-flex items-center justify-center w-9 h-9 mr-2 text-pink-100 transition-colors duration-150 bg-pink-700 rounded-full focus:shadow-outline hover:bg-pink-800 social-item-twitter">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                                                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                                        </svg>
                                                    </button>
                                                </a>
                                                <a target="blank" href="https://www.instagram.com/mx_asraful/">
                                                    <button class="inline-flex items-center justify-center w-9 h-9 mr-2 text-pink-100 transition-colors duration-150 bg-pink-700 rounded-full focus:shadow-outline hover:bg-pink-800 social-item-insta">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                                                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                                        </svg>
                                                    </button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                :
                                <></>
                        }
                    </div>
            }
        </div>
    );
};

export default Result;