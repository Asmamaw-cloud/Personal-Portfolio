import library from "../assets/library.jpeg";
import attorney from "../assets/attorney.jpg";
import guess from "../assets/guess.webp";


const Projects = () => {
    return ( 
        <div id="projects" className="p-20 flex flex-col items-center justify-center">
            <h1 data-aos='fade-right' className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500">Projects</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-around gap-10">
                <img data-aos='fade-up' height={250} width={250} className="text-[26px] flex items-center justify-center rounded-3xl h-36 <p-1></p-1> border-2 border-fuchsia-800 b_glow" src={library} alt="" /> 
                <img data-aos='fade-down' height={250} width={250} className="text-[26px] flex items-center justify-center rounded-3xl h-36 <p-1></p-1> border-2 border-fuchsia-800 b_glow" src={attorney} alt="" />
                <img data-aos='fade-up' height={250} width={250} className="text-[26px] flex items-center justify-center rounded-3xl h-36 <p-1></p-1> border-2 border-fuchsia-800 b_glow" src={guess} alt="" />

            </div>
        </div>
     );
}
 
export default Projects;