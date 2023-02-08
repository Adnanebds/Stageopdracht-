import Footer from "./Footer"
import Navbar from "./Navbar"
import TimeLine from "./TimeLine"

const About = () => {
    return (
        <>  
        <Navbar />
        <div id="about" class="px-10 dark:bg-slate-900 animate__animated animate__backInRight ">
        <div
          class="container mx-auto py-40 flex flex-col-reverse lg:flex-row items-center gap-20"
        >
          <div class="relative">
            <div class="h-full rounded-full overflow-hidden">
              <img src={require("../assets/test.jpg")} alt="" />
            </div>
          </div>
      
          <div class="my-auto flex flex-col gap-3">
            <h1 class="text-indigo-600 font-bold">Over Mij</h1>
            <h1 class="text-3xl font-medium dark:text-white">Betere Design</h1>
            <h1 class="text-3xl font-medium dark:text-white">
              Betere Ervaringen
            </h1>
            <p class="text-gray-400">
             Ik ben Adnane Bady-Soussi en programmeer graag. Mijn Favoeriete stack is React, NodeJS en MongoDB. In mijn vrije tijd ga ik graag naar de Gym, programmeer ik of lees ik boeken. ik vind geschiedenis interresant en kijk daarom veel videos over bijvoorbeeld hoe venezuele is gevallen
            </p>
            <p class="text-gray-400">
                Ook vind ik verschillende culturen leuk en wil ik graag de wereld zien. Hopelijk ga ik dat kunnen doen door een eigen bedrijf te starten.
            </p>
            <h2 class="text-gray-400 font-medium">HTML</h2>
            <div class="w-full bg-gray-200 h-1.5 rounded-md">
              <div class="w-full bg-indigo-600 h-1.5 rounded-md"></div>
            </div>
            <h2 class="text-gray-400 font-medium">Javascript</h2>
            <div class="w-full bg-gray-200 h-1.5 rounded-md">
              <div class="w-5/6 bg-indigo-600 h-1.5 rounded-md"></div>
            </div>
            <h2 class="text-gray-400 font-medium">PHP</h2>
            <div class="w-full bg-gray-200 h-1.5 rounded-md">
              <div class="w-4/6 bg-indigo-600 h-1.5 rounded-md"></div>
            </div>
            <h2 class="text-gray-400 font-medium">React</h2>
            <div class="w-full bg-gray-200 h-1.5 rounded-md">
              <div class="w-5/6 bg-indigo-600 h-1.5 rounded-md"></div>
            </div>
            <h2 class="text-gray-400 font-medium">Vue</h2>
            <div class="w-full bg-gray-200 h-1.5 rounded-md">
              <div class="w-5/6 bg-indigo-600 h-1.5 rounded-md"></div>
            </div>
            <h2 class="text-gray-400 font-medium">MongoDB/Node.js</h2>
            <div class="w-full bg-gray-200 h-1.5 rounded-md">
              <div class="w-5/6 bg-indigo-600 h-1.5 rounded-md"></div>
            </div>
            <h2 class="text-gray-400 font-medium">MySQL</h2>
            <div class="w-full bg-gray-200 h-1.5 rounded-md">
              <div class="w-4/6 bg-indigo-600 h-1.5 rounded-md"></div>
            </div>
            <h2 class="text-gray-400 font-medium">CSS</h2>
            <div class="w-full bg-gray-200 h-1.5 rounded-md">
              <div class="w-5/6 bg-indigo-600 h-1.5 rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
      <TimeLine />
      <Footer />
      </>
    )
}

export default About