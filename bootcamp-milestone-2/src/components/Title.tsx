function Title() {
  return (
    <>
      <main>
        {/* Gradient image */}

        <img
          className="absolute top-0 right-0 opacity-60 -z-10"
          src="/gradient.png"
          alt="Gradient-img"
        />

        {/* Blur Effect */}

        <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#60ad2d] -rotate-[30deg]"></div>

        <div className="z-2000 transition-transform duration-100 ease-out w-screen h-screen bg-neutral-900">
          <h1 className="flex items-center justify-center h-screen text-6xl font-bold">
            Kyle Morgan
          </h1>
        </div>
      </main>
    </>
  );
}

export default Title;
