import Skills from "../components/Skills";

function AboutMe() {
  return (
    <div className="md:flex flex-col h-screen w-screen overflow-hidden p-20 py-30">
      <div className="flex-1 flex flex-row">
        <div className="flex flex-col flex-shrink basis-2/3 justify-center items-left flex-wrap">
          <h1 className="text-5xl md:text-6xl font-bold pl-5 mb-5">About me</h1>
          <p className="text-[20px] p-5 text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            qui sunt vitae aspernatur reiciendis hic odio labore placeat dolor,
            delectus saepe reprehenderit fugiat mollitia veritatis commodi
            incidunt quo nesciunt necessitatibus.
          </p>
        </div>
        <div className="flex-1 bg-amber-500">{/* Image Placeholder */}</div>
      </div>

      <div className="mt-10 pb-2">
        <Skills />
      </div>
    </div>
  );
}
export default AboutMe;
