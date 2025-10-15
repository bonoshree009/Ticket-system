import React from 'react';

const CardInfo = ({Data, setdata}) => {
    return (
        <>
        <div className='col-span-2'>
            <p>Customer Tickets</p>
            <div className='grid grid-cols-2'>
                {
                    Data.map(ele => {
                        
                    })
                }

            </div>
        </div>


        <div></div>
        
        
        </>
    );
};

export default CardInfo;