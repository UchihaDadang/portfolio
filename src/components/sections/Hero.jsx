import myProfile from "/src/assets/images/profile.jpg";

export default function HeroSection() {
    return (
        <section id="home" className="w-full pt-40 md:pt-25 [@media(min-width:990px)]:pt-[8rem] px-10 xl:px-0">
            <div className="mx-auto flex max-w-7xl justify-center items-center flex-col md:flex-row gap-8 md:gap-20 px-6 md:py-9 2xl:py-12">
                <div className="md:w-6/10 order-2 md:order-1">
                    <h1 className="text-white font-medium text-2xl md:text-6xl 2xl:text-8xl md:text-start text-center mb-6 mt-2 2xl:mb-8">Hi, I'm Muhammad Yusri</h1>
                    <p className="md:text-2xl 2xl:text-3xl text-slate-200 text-center md:text-start">
                       I'm Muhammad Yusri, a web developer passionate about building modern and responsive digital experiences. Every project is an opportunity for me to learn, refine my skills, and deliver the best results.
                    </p>
                </div>
                    <div className="md:w-4/10 order-1 md:order-2 flex justify-center items-center">
                    <img 
                        src={myProfile} 
                        alt="profile" 
                        className="w-32 h-32 md:w-50 md:h-72 xl:w-60 xl:h-80 2xl:w-70 2xl:h-100 rounded-full object-cover"
                    />
                    </div>
            </div>
            <div className="flex justify-center items-center md:justify-start md:px-6 py-8 md:py-3 xl:py-10 max-w-7xl mx-auto  [@media(min-width:1107px)]:py-5">
                <button type="" className="px-10 py-3 md:px-15 md:py-5 bg-amber-400 rounded-3xl">Contact Me</button>
            </div>
        </section>
    )
}