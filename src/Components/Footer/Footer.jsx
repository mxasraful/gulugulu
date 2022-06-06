import React from 'react';

const Footer = () => {
    return (
        <div className='footerMain bg-slate-200 dark:bg-slate-800'>
            <div className="container mx-auto py-8">
                <div className="flex">
                    <div className="text-lg text-slate-800 dark:text-slate-100 w-3/5">Copyright © All Rights Recerved By <a href="https://asrafulweb.com" className='text-cyan-400'>AsrafulWeb</a>.</div>
                    <div className="text-lg text-slate-800 dark:text-slate-100 w-2/5"><span className='float-right'> Developed By <a href="https://mxasraful.com" className='text-cyan-400'>Mx Asraful</a>.</span></div>
                </div>
            </div>
        </div>
    );
};

export default Footer;