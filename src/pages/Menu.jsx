import React, { useState } from 'react'

function Menu() {

    const [showMenu, setShowMenu] = useState(false)

    return (
        <>
            <div onClick={() => setShowMenu(prev => !prev)} className=' fixed cursor-pointer z-20 p-2 w-10 h-10 rounded-full right-5 top-5 bg-[#212721]' >
                
            </div>
            
            {showMenu && (
                <div className='w-full h-screen fixed z-10  bg-[#fafafa]'>
                    <div className=" font-['Raflesia'] text-7xl  gap-5 text-[#212721] w-full h-screen flex flex-col items-center justify-center">
                        <a  className='hover:italic select-none hover:scale-120 cursor-pointer ' >HOME</a>
                        <a  className='hover:italic select-none hover:scale-120 cursor-pointer ' >WORK</a>
                        <a  className='hover:italic select-none hover:scale-120 cursor-pointer ' >CONTACT</a>
                        <a  className='hover:italic select-none hover:scale-120 cursor-pointer ' >ABOUT</a>
                        <a  className='hover:italic select-none hover:scale-120 cursor-pointer ' >JOIN US</a>
                    </div>
                </div>
            )}

        </>
    )
}

export default Menu

