import React from 'react';

function Popup({el,isPopupOpen,setIsPopupOpen}) {
//   


  return (
    <div>
      {isPopupOpen && (
        <div className="fixed top-0 left-0 h-full w-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg">
           <div>
            <p>Id :{el.id}</p>
            <p>Last Update: {el.last_update}</p>
            <p>Land Landing: {el.land_landings}</p>
            <p>Serial : {el.serial}</p>
            <p>Type: {el.type}</p>
            <p>Status: {el.status} </p>
            <p>Water Landing :{el.water_landings}</p>
           </div>
            <button className="bg-red-500 text-white p-2 rounded-lg" onClick={() => setIsPopupOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Popup;

