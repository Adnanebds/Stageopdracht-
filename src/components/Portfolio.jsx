import Navbar from './Navbar'
import Footer from './Footer'


const Projects = () => {
    return(
        <>
     <Navbar />
          <div id="works" class="py-40 dark:bg-slate-900 animate__animated animate__backInRight">
      <div class="container mx-auto">
        <div class="flex flex-col gap-3 items-center">
          <h1 class="text-indigo-600 font-bold">PORTFOLIO</h1>
          <h1 class="text-3xl dark:text-white">Mijn Werk</h1>
          <p class="w-1/2 text-center text-gray-400">
         Alle Projecten die ik tot nu toe heb gebouwd voor school en voor mijzelf
          </p>
        </div>
      
        <div class="p-5 sm:p-0 flex flex-wrap justify-between">
      
          <div
            class="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110"
          >
            <a href='https://github.com/Adnanebds/ExamensFrontEnd'>
            <h1 class="text-indigo-600 font-bold animate__animated animate__backInRight">
             Examen Opdracht
            </h1>
            <img  src={require("../assets/hero.png")}/>
            </a>
          </div>
          
          <div
            class="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110"
          >
            <a href='https://github.com/Adnanebds/Frontend-Course'>
            <h1 class="text-indigo-600 font-bold animate__animated animate__backInRight">
             Course Cast Klant
            </h1>
            <img  src={require("../assets/hero.png")}/>
            </a>
          </div>
          
          <div
            class="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110"
          >
            <a href='https://github.com/Adnanebds/reisbureau-compleet'>
            <h1 class="text-indigo-600 font-bold animate__animated animate__backInRight">
             Booking.com Clone
            </h1>
            <img  src={require("../assets/hero.png")}/>
            </a>
          </div>
          
          <div
            class="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110"
          >
            <img  src={require("../assets/hero.png")}/>
          </div>
        
          <div
            class="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110"
          >
            <img  src={require("../assets/hero.png")}/>
          </div>
       
          <div
            class="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110"
          >
           <img  src={require("../assets/hero.png")}/>
          </div>
     
          <div
            class="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110"
          >
            <img  src={require("../assets/hero.png")}/>
          </div>
          <div
            class="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110"
          >
           <img  src={require("../assets/hero.png")}/>
          </div>
        </div>
      </div>
      </div>
      <Footer />
      </>
        
    )
}

export default Projects;