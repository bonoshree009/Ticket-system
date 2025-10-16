import React from 'react';

const TaskStatus = ({selectedCard,setSelectedCard,key}) => {
   
    //console.log(selectedCard)
  
    return (<>

            {selectedCard.length === 0 ? ( <p>Select a ticket to add to Task Status</p>):
           (
            selectedCard.map(card => (<div className='border-amber-300 border-2 bg-gray-100 p-3 rounded-xl mb-3 md:p-5'> 
            <p className='font-bold text-[8px] md:text-xl text-center'> {card.title}-{card.customer}</p>
                  <button className='w-full bg-green-800 p-2 text-white my-3'> complete</button></div>))
            )
    
            }
            </>
        
    );
};

export default TaskStatus;