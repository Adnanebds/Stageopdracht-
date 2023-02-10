import { FaMobileAlt, FaLaptopCode, FaBitcoin, FaJsSquare, FaDatabase, FaMoneyBillWaveAlt } from 'react-icons/fa';
const Stats = () => {


return(
    <>
<section class="py-24 bg-blueGray-50 overflow-hidden">
  <div class="container px-4 mx-auto animate__animated animate__zoomInDown">
    <h2 class="mb-5 text-6xl md:text-8xl xl:text-10xl text-center font-bold font-heading font-heading tracking-px-n leading-none">Mijn Sterke Punten </h2>
    <div class="md:max-w-6xl mx-auto">
      <div class="flex flex-wrap -m-3.5 mb-10">
        <div class="w-full md:w-1/3 p-3.5">
          <a href="#">
            <div class="relative p-6 h-full bg-white border hover:border-gray-300 rounded-xl">
              <div class="relative z-10 flex flex-col justify-between h-full">
                <div class="mb-24 flex-1">
                  <h3 class="mb-2 text-lg font-bold font-heading leading-snug">Mobile Development</h3>
                  <p class="text-sm text-gray-500 font-medium">
                    <span>React-Native JS</span>
                    <span class="px-2">&bull;</span>
            
                  </p>
                </div>
                <div class="flex-1">
                <FaMobileAlt size={70}/>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="w-full md:w-1/3 p-3.5">
          <a href="#">
            <div class="relative p-6 h-full bg-white border hover:border-gray-300 rounded-xl">
              <div class="relative z-10 flex flex-col justify-between h-full">
                <div class="mb-24 flex-1">
                  <h3 class="mb-2 text-lg font-bold font-heading leading-snug">Website Development</h3>
                  <p class="text-sm text-gray-500 font-medium">
                    <span>React JS</span>
                    <span class="px-2">&bull;</span>
              
                  </p>
                </div>
                <div class="flex-1">
                <FaLaptopCode size={70}/>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="w-full md:w-1/3 p-3.5">
          <a href="#">
            <div class="relative p-6 h-full bg-white border hover:border-gray-300 rounded-xl">
         
              <div class="relative z-10 flex flex-col justify-between h-full">
                <div class="mb-24 flex-1">
                  <h3 class="mb-2 text-lg font-bold font-heading leading-snug">Blockchain Developing</h3>
                  <p class="text-sm text-gray-500 font-medium">
                    <span>Solana Developing</span>
                    <span class="px-2">&bull;</span>
                  </p>
                </div>
                <div class="flex-1">
                 <FaBitcoin size={70}/>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="w-full md:w-1/3 p-3.5">
          <a href="#">
            <div class="relative p-6 h-full bg-white border hover:border-gray-300 rounded-xl">
            
              <div class="relative z-10 flex flex-col justify-between h-full">
                <div class="mb-24 flex-1">
                  <h3 class="mb-2 text-lg font-bold font-heading leading-snug">JS Developing</h3>
                  <p class="text-sm text-gray-500 font-medium">
                    <span>React, React-Native, Vue, Next</span>
                    <span class="px-2">&bull;</span>
                  </p>
                </div>
                <div class="flex-1">
                <FaJsSquare size={70} />
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="w-full md:w-1/3 p-3.5">
          <a href="#">
            <div class="relative p-6 h-full bg-white border hover:border-gray-300 rounded-xl shadow-9xl">
              <div class="relative z-10 flex flex-col justify-between h-full">
                <div class="mb-24 flex-1">
                  <h3 class="mb-2 text-lg font-bold font-heading leading-snug">Marketing</h3>
                  <p class="text-sm text-gray-500 font-medium">
                    <span>Verkopen van product </span>
                    <span class="px-2">&bull;</span>
                  </p>
                </div>
                <div class="flex-1">
                  <FaMoneyBillWaveAlt size={70}/>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="w-full md:w-1/3 p-3.5">
          <a href="#">
            <div class="relative p-6 h-full bg-white border hover:border-gray-300 rounded-xl">
           
              <div class="relative z-10 flex flex-col justify-between h-full">
                <div class="mb-24 flex-1">
                  <h3 class="mb-2 text-lg font-bold font-heading leading-snug">Database </h3>
                  <p class="text-sm text-gray-500 font-medium">
                    <span>MongoDB, MySQL</span>
                    <span class="px-2">&bull;</span>
                  </p>
                </div>
                <div class="flex-1">
                  <FaDatabase size={70}/>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
            </>
    
)}

export default Stats;
