const Hero = () => {
  return (
    <div className="mt-20 mx-8 flex flex-col text-4xl text-center lg:text-6xl font-bold items-center ">
      <div>Write, plan, share.</div>
      <div>With AI at your side.</div>
      <div className="text-2xl font-semibold mt-4">
        Notion is the connected workspace where better, faster work happens.
      </div>
      <button className="text-base font-semibold p-2 text-white bg-black rounded-lg mt-6">
        Get Notion free!
      </button>
      <img
        className="lg:w-[35%] mt-4"
        src="https://www.notion.so/cdn-cgi/image/format=webp,width=2048/https://images.ctfassets.net/spoqsaf9291f/3csRrNi1u82ymVlwjfo2E6/02516e52af15501acd822d3e7a03baf9/home-hero.png"
        alt="notion-img-1"
      />
    </div>
  );
};

export default Hero;
