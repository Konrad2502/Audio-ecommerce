import React from 'react'

function PrimaryButton({children, onClick}) {
  return (
    <button 
    onClick={onClick}
    className="w-[150px] h-50px bg-primary text-whiteprimary py-3 px-4 uppercase hover:bg-lightprimary hover:font-bold transition-all duration-300 rounded-sm">
      {children}
    </button>
  );
}

export default PrimaryButton;