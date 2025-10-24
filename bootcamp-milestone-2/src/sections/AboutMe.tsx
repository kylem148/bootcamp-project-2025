import Skills from "../components/Skills";

function AboutMe() {
  return (
    <div id="about"className=" md:flex flex-col h-screen w-screen overflow-hidden p-5 md:p-20 py-30 scroll-mt-20">
      <div className="flex-1 flex flex-col md:flex-row">
        <div className="flex flex-col flex-shrink basis-2/3 justify-center items-center md:items-left flex-wrap">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-green-400 text-transparent bg-clip-text pl-5 mb-5">About me</h1>
          <p className="text-[20px] p-5 text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            qui sunt vitae aspernatur reiciendis hic odio labore placeat dolor,
            delectus saepe reprehenderit fugiat mollitia veritatis commodi
            incidunt quo nesciunt necessitatibus.
          </p>
        </div>
        <div className="flex items-center justify-center md:pt-6">
          <img className=" max-h-[350px] md:max-h-[450px]  rounded-2xl object-contain " src="/IMG_5318.jpeg" alt="picture of person on chair"></img>
        </div>
      </div>

      <div className="mt-10 pb-2">
        <Skills />
      </div>
    </div>
  );
}
export default AboutMe;
