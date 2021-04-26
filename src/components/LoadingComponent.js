import React from 'react';
import { FaSpinner } from "react-icons/fa";

export const Loading = () =>{
    return(
        <div className='col-12'>
            <span className="fa fa-pulse fa-3x fa-fw text-primary" ><FaSpinner/></span>
            <p> is Loading . . .</p>
        </div>
    );
};