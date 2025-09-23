import aboutProfile from '/src/assets/images/about-foto.png';
import { useState } from 'react';
import { BrowserIcon, DatabaseIcon, BrainIcon } from '@phosphor-icons/react';

export default function AboutSection() {
  const [activeId, setActiveId] = useState(null)

  const aboutSkills = [
    {
      id: 1,
      title: 'Frontend Developer',
      detail: 'Saya frontend developer tersertifikasi!',
      icon: BrowserIcon,
    },
    {
      id: 2,
      title: 'Backend Developer',
      detail: 'Saya backend developer tersertifikasi!',
      icon: DatabaseIcon,
    },
    {
      id: 3,
      title: 'IoT',
      detail:'Saya juga memiliki pengalaman dalam membangun prototype micro controller berbasis IoT',
      icon: BrainIcon,
    },
  ]

  const handleClick = (id) => {
    setActiveId(id)
    setTimeout(() => {
      setActiveId(null)
    }, 1000)
  }

  return (
    <section id="about" className="w-full py-16 md:py-24 px-10">
      <div className="max-w-7xl mx-auto p-6 2xl:py-15 md:px-10 md:py-8 bg-white/50 backdrop-blur-md backdrop-saturate-150 rounded-2xl">
        <h2 className="text-3xl md:text-3xl 2xl:text-4xl font-semibold text-white font-poppins text-center md:text-left">
          About
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 2xl:mt-10">
          <div className="hidden md:flex md:w-2/5 justify-center">
            <img
              src={aboutProfile}
              alt="Foto profil saya"
              className="w-80 h-80 object-cover rounded-full shadow-lg border border-white/10 p-2"
            />
          </div>

          <div className="w-full md:w-3/5 space-y-5 px-2 py-5 md:py-0 md:px-0">
            {aboutSkills.map((item) => (
              
              <article
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={`
                  relative overflow-hidden
                  p-5 md:p-6
                  flex items-center gap-4
                  bg-primary/50 backdrop-blur-sm rounded-xl
                  transition-all duration-500 ease-out
                  bg-gradient-to-r from-[rgba(212,234,242,0.42)] to-transparent
                  bg-[length:0%_100%] bg-no-repeat
                  hover:bg-[length:100%_100%]
                  cursor-pointer
                  ${
                    activeId === item.id
                      ? 'bg-[length:100%_100%]'
                      : 'bg-[length:0%_100%]'
                  }
                `}
              >
                <div className="flex-shrink-0 2xl:w-12 2xl:h-10 w-10 h-8 flex items-center justify-center rounded-md">
                  <item.icon size={45} className='text-white bg-white/50 backdrop-blur-md backdrop-saturate-150 shadow rounded-lg'/>
                </div>

                <div className="flex-1">
                  <h4 className="font-poppins text-white text-lg md:text-xl 2xl:text-3xl font-medium mb-1">
                    {item.title}
                  </h4>
                  <p className="text-slate-300 font-inter text-sm md:text-base 2xl:text-2xl leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}