import Aos from "aos";
import { useEffect } from "react";

const Services = () => {

    useEffect(() => {
        Aos.init({ 
            easing: 'ease-out-quart',
            delay: 0,
            duration: 750
        });
    }, [])

    return ( 
        <div id="services" className="p-2 flex flex-col items-center justify-center">
            <h1 className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500">Services</h1>
            <div data-aos='fade-right' className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20">
                <h2 data-aos='fade-up' className="text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow">CSS(Tailwindcss)</h2>
                <h2 data-aos='fade-down' className="text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow">HTML5</h2>
                <h2 data-aos='fade-up' className="text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow">Javascript</h2>
                <h2 data-aos='fade-down' className="text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow">React</h2>
                <h2 data-aos='fade-up' className="text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow">C++</h2>
                <h2 data-aos='fade-down' className="text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow">PHP</h2>
                <h2 data-aos='fade-up' className="text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow">Next.JS</h2>
                <h2 data-aos='fade-down' className="text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow">Java</h2>
            </div>
        </div>
     );
}
 
export default Services;