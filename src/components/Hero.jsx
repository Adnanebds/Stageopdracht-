import 'animate.css';

const Hero = () => {
 
    return (
        <>
       
        <div class="pt-24">
        <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">

          <div class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
            <p class="uppercase tracking-loose w-full animate__animated animate__backInRight">Stage Opdracht</p>
            <h1 class="my-4 text-5xl font-bold leading-tight animate__animated animate__backInRight">
             Welkom op mijn website
            </h1>
            <p class="leading-normal text-2xl mb-8 animate__animated animate__backInRight">
              Deze website is gemaakt door Adnane Bady-Soussi als opdracht!
            </p>
            <button class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out animate__animated animate__backInRight">
              <a href='/overmij'>Over Mij </a>
            </button>
          </div>
          <div class="w-full md:w-3/5 py-6 text-center">
            <img class="w-full md:w-4/5 z-50 animate__animated animate__backInRight" src={require("../assets/hero.png")} />
          </div>
        </div>
      </div>
      <br></br>
      <section class="a _a cb b ja sm:wc md:bd xl:ld sm:pc xl:kd">
            <div class="g y z aa ha lg:nc lg:oc lg:id animate__animated animate__backInLeft">
                <div class="p lg:fd">
                    <img class="p rounded-full w-96 h-100" src={require("../assets/test.jpg")} alt="" />
                </div>
                <div class="p lg:fd">
                    <div class="ka sm:ha">
                        <h3 class="kb qb md:ib">Programmeren</h3>
                        <p class="p lb sm:lc">
                            Ik ben hiermee sinds de eerste klas in mijn opleiding. Ik was hier eigenlijk niet in geinterriseerd, ook wou ik stoppen in het begin, maar na een tijdje begon het leuk te worden, vooral als het werkt
                        </p>
                        <button class="wa hover:bg-emerald-700 zb cc ab.5 bb oa rb qb g la.5">
                        <a href='/overmij'>Bekijk meer </a>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="q k" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                  </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="g y z aa ha lg:hd lg:oc lg:id animate__animated animate__backInRight">
                <div class="p lg:fd">
                    <img class="p rounded-full w-96 h-100" src={require("../assets/gym.jpg")} alt=""  />
                </div>
                <div class="p lg:fd">
                    <div class="ka sm:ha">
                        <h3 class="kb qb md:ib">Gymmen</h3>
                        <p class="p lb sm:lc">
                            Ik ben begonnen met serieus gymmen op 17. Ik was een voetballer, maar door vele inspiritaties had ik besloten om voetbal achter te laten en naar de gym te gaan. 
                        </p>
                        <button class="wa hover:xa zb cc ab.5 bb oa rb qb g la.5">
                        <a href='/overmij'>Bekijk meer </a>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="q k" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                  </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="g y z aa ha lg:nc lg:oc lg:id animate__animated animate__backInLeft">
                <div class="p lg:fd">
                    <img class="p " src={require("../assets/boxing.avif")} alt="" />
                </div>
                <div class="p lg:fd">
                    <div class="ka sm:ha">
                        <h3 class="kb qb md:ib">Boksen</h3>
                        <p class="p lb sm:lc">
                            Ik ben eigenlijk gestart met boksen door een anime genaamd Hajime No Ippo. Ik vond het zo leuk dat ik voetbal had verlaten en dit te doen naast de gym.
                        </p>
                        <button class="wa hover:xa zb cc ab.5 bb oa rb qb g la.5">
                        <a href='/overmij'>Bekijk meer </a>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="q k" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                  </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </section>

    



          
      </>

        
    )
}

export default Hero;