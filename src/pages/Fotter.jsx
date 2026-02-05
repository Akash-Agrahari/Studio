import React from 'react'

function Fotter() {
  return (
    <div className='bg-black overflow-hidden relative -z-2 w-full h-[50vh] md:h-[80vh] grid grid-cols-12 grid-rows-6 py-4 md:py-10 border-t border-[#333]'>

      {/* --- Absolute Elements --- */}
      <p className='text-[#aaaaaa] text-[clamp(.4rem,2.5vw,1.2rem)] 2xl:text-[2rem] absolute bottom-1 right-3 md:right-10 lg:right-1/10'>
        Estd.2026
      </p>

      <h1 className='text-white text-[clamp(.8rem,4vw,3rem)] 2xl:text-[3rem] lg:text-xl font-medium fut-medium top-4 left-4 md:top-10 md:left-10 absolute'>
        Let's talk.
      </h1>


      {/* --- ROW 1: Tagline --- */}
      {/* LG: Wapas Center-Right shift kiya (col-start-5) */}
      <h1 className='row-span-1 md:mt-[8vh] lg:mt-5 row-start-1 mt-5  2xl:text-[2rem] text-white col-start-4 col-span-6 md:col-start-3 md:col-span-6 lg:col-start-4 lg:col-span-4 text-[clamp(.7rem,4vw,1.7rem)] lg:text-xl font-normal text-center self-start'>
        "Editorial And Expensive"
      </h1>


      {/* --- ROW 2: Independent Label --- */}
      {/* LG: Wapas Col-Start-3 par set kiya */}
      <p className='row-start-2 col-start-2 md:col-start-3 lg:col-start-3 2xl:text-[2rem] col-span-3 text-[#aaaaaa] text-[clamp(.5rem,3vw,2rem)] lg:text-lg font-light fut-light self-center'>
        Independent
      </p>

      {/* --- ROW 2: Contact Info --- */}
      {/* LG: Wapas Col-Start-9 par set kiya */}
      <div className='row-start-2 col-span-4 md:col-span-2 lg:col-span-2 items-center text-center col-start-9 md:col-start-9 lg:col-start-9 flex flex-col justify-center'>
        <h1 className='text-white text-[clamp(.5rem,3vw,2rem)] 2xl:text-[2rem] lg:text-xl font-medium fut-medium whitespace-nowrap'>Start A Conversation</h1>
        <p className='text-[#aaaaaa] text-[clamp(.4rem,2.5vw,1rem)]  2xl:text-[1.5rem] font-light fut-light'>contact@skadoosh.com</p>
      </div>


      {/* --- ROW 3 & 4: HERO TEXT & IMAGE --- */}
      {/* LG: Row-Span-2 wapas laya taaki text bada ho sake aur image overlap kare */}
      <div className='row-start-3 row-span-1 lg:row-span-2 mt-5 col-span-12 relative flex items-center justify-center'>
        
        {/* LG: Text size wapas massive [15vw] kar diya */}
        <h1 className='text-white font-semibold  text-[clamp(3.7rem,18vw,8rem)] md:text-[9rem] lg:text-[15vw] leading-none z-0 tracking-tighter'>
          SKADOOSH
        </h1>
        
        {/* LG: Image Height wapas [170%] kar di taaki wo text ko vertically cut kare */}
        <img 
          src='/media/frame-table.webp' 
          alt='Editorial Cut'
          className='select-none img-tex absolute h-[20vh] lg:h-[190%] w-auto grayscale-100 z-1 object-contain pointer-events-none' 
        />
      </div>


      {/* --- ROW 5: Designing Obsession --- */}
      {/* LG: Isko wapas Row-5 aur Col-Start-7 par bheja (First code layout) */}
      <div className='row-start-4 lg:row-start-5 mt-1 md:mt-2 col-start-8 lg:col-start-7 col-span-6 text-center pt-4 md:pt-10 flex flex-col justify-center'>
        <p className='text-[#aaaaaa] 2xl:text-[2rem] text-[clamp(.5rem,2.5vw,2rem)] lg:text-lg font-light fut-light'>Designing Obsession</p>
      </div>


      {/* --- ROW 6: Location (Kanpur) --- */}
      {/* LG: Wapas Row-6 aur Col-Start-2 par bheja */}
      <div className='row-start-5 lg:row-start-6 mt-2 md:mt-5 col-start-1 lg:col-start-2 flex flex-col items-center justify-center col-span-5 lg:col-span-3'>
        <h1 className='text-white 2xl:text-[2rem] text-[clamp(.5rem,3vw,2rem)] lg:text-lg font-medium fut-medium text-center leading-tight'>From India To Worldwide</h1>
        <p className='text-[#aaaaaa] 2xl:text-[1.5rem] text-[clamp(.4rem,2.5vw,1rem)] lg:text-sm font-light fut-light mt-1'>26°27′00″N 80°19′55″E</p>
      </div>

      {/* --- ROW 6: Brand Quote --- */}
      {/* LG: Wapas Row-6 aur Col-Start-6 par bheja */}
      <div className='row-start-5 lg:row-start-6 mt-2 md:mt-5 col-start-6 md:col-start-6 col-span-6 lg:col-span-4 flex items-center justify-center'>
        <h1 className='text-white 2xl:text-[2rem] text-[clamp(.5rem,2.5vw,2rem)] lg:text-base font-normal text-center leading-tight opacity-80'>
          “Creating Brands Identity Beyond <br className='hidden md:block' /> Imaginations, Experiments Through Design”
        </h1>
      </div>

    </div>
  )
}

export default Fotter