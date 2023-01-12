import React from 'react';

function Popup({el,isPopupOpen,setIsPopupOpen}) {
//   
console.log(el)

  return (
    <div>
      {isPopupOpen && (
        <div className="fixed top-0 left-0 h-full w-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg">
           <div>
            <p>Capsule_Id: {el.capsule_serial}</p>
            <p>Capsule Serial: {el.capsule_serial}</p>
            <p>Details: {el.details}</p>
            <p>Landing: {el.landings}</p>
            <p>Mission{el.missions[0].name}</p>
            <p>Original_launch: {el.original_launch?.split("T")[0]}</p>
            <p>Type: {el.type}</p>
            <p>Status: {el.status} </p>
           </div>
            <button className="bg-red-500 text-white p-2 rounded-lg" onClick={() => setIsPopupOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Popup;

