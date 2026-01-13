import React from 'react'

function HowWeWork() {
  return (
    <div className='bg-black overflow-hidden relative grid-rows-6  w-full h-[80vh] grid grid-cols-12 py-10 ' >

    <p className='text-[#aaaaaa] text-sm absolute bottom-2 right-1/10' >Estd.2026</p>

    <h1 className='text-white text-xl font-medium top-10 left-10 absolute' >Let's talk.</h1>

      <h1 className=' row-span-1 mt-5 row-start-1 text-white col-start-5 col-span-4 text-xl font-normal ' >"Editorial And Expensive"</h1>

        <p className='row-start-2 col-start-3 text-[#aaaaaa] text-lg font-light self-center'>
          Independent
        </p>
  
      <div className='row-start-2 col-span-2  items-center  text-center col-start-9' >  
        <h1 className='text-white text-xl font-medium' >Start A Conversation</h1>
        <p className='text-[#aaaaaa] font-light' >contact@skadoosh.com</p>
      </div>


      <div className='row-start-3 row-span-2 col-span-12 relative flex items-center justify-center'>
    <h1 className='text-white font-semibold text-[15vw] leading-none z-0'>SKADOOSH</h1>
    <img src='/Prada-stoking.svg' className=' select-none absolute h-[170%] w-auto grayscale z-10' />
  </div>

  {/* ROW 5: Designing Obsession (Ab ye SKADOOSH ke niche aayega) */}
  <div className='row-start-5 mt-2 col-start-7 col-span-6 text-center pt-10'>
        <p className='text-[#aaaaaa] row-start-2 col-start-10 font-light' >Designing Obsession</p>
  </div>

  <div></div>
  
    <div className='row-start-6 mt-5 col-start-2 flex flex-col items-center col-span-3 '>
    <h1 className='text-white text-lg font-medium'>From India To Worldwide</h1>
    <p className='text-[#aaaaaa] text-sm font-light'>26°27′00″N 80°19′55″E</p>
  </div>
  
      <div className='row-start-6 mt-5 col-start-6 col-span-4' >
        <h1 className='text-white font-normal text-center  ' >“Creating Brands Identity Beyond <br /> Imaginations, Experiments Through Design”</h1>
        </div>

    </div>

  )
}

export default HowWeWork

