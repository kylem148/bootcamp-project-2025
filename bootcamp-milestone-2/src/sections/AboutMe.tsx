import Skills from "../components/Skills";

function AboutMe() {
  return (
    <div id="about"className="bg-neutral-950 md:flex flex-col h-screen w-screen overflow-hidden p-5 md:p-20 py-30 scroll-mt-20">
      <div className="flex-1 flex flex-col md:flex-row">
        <div className="flex flex-col flex-shrink basis-2/3 justify-center items-center md:items-left flex-wrap">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-green-400 text-transparent bg-clip-text pl-5 mb-5">About me</h1>
          <p className="text-[10px] md:text-[20px] p-5 text-left">
            Hello! I'm Kyle Morgan, a passionate computer science student with a
            strong interest in software development and technology. I love
            exploring new programming languages and frameworks, and I'm always
            eager to take on new challenges that allow me to grow my skills. My
            goal is to leverage technology to create innovative solutions that
            make a positive impact on people's lives.
          </p>
        </div>
        <div className="flex items-center justify-center md:pt-6">
          <img className="max-h-[300px] md:max-h-[450px]  rounded-2xl object-contain " src="/IMG_5318.jpeg" alt="picture of person on chair"></img>
        </div>
      </div>

      <div className="mt-10 pb-2">
        <Skills />
      </div>
    </div>
  );
}
export default AboutMe;
