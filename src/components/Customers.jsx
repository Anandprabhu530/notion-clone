import scratch from "../assets/scratch.png";

const Customers = () => {
  return (
    <div className="flex flex-col items-center mt-[100px] mb-8 lg:mb-[170px] relative mx-6">
      <div className="text-4xl w-[80%] mx-auto text-center lg:text-5xl font-bold">
        Millions run on Notion every day
      </div>
      <div className="mt-4 text-lg lg:w-[27%] mx-auto text-center	">
        Powering the world’s best teams, from next-generation startups to
        established enterprises.
      </div>
      <div className="text-blue-500 mt-4">Read customer stories→</div>
      <div className="lg:w-[45%] flex justify-center	mx-auto items-center flex-wrap gap-10 mt-8">
        <img
          loading="lazy"
          alt=""
          src="https://images.ctfassets.net/spoqsaf9291f/502ApiNcRHgIwrDU8XRYTQ/c70d8752079a40241d08ec85dac5f93d/figma-logo.png"
          className="w-[90px] h-[30px]"
        />
        <img
          loading="lazy"
          alt=""
          src="https://images.ctfassets.net/spoqsaf9291f/6S40IUVrdki2SlPXQMHKKr/e02c776d183f70c84fa53e077a0f7b1a/pixar.png"
          className="w-[110px] h-[22px]"
        />
        <img
          loading="lazy"
          alt=""
          src="https://images.ctfassets.net/spoqsaf9291f/1jlyWNfa8mnYxJtmzu5lpV/4072e10330206f9057fe77ab19ce1bca/doordash.png"
          className="w-[150px] h-[20px]"
        />
        <img
          loading="lazy"
          alt=""
          src="https://images.ctfassets.net/spoqsaf9291f/2VtWKmfmToo8n3X7BY0WwA/ccdcd719ee3bc3fa76148eae11d97c51/nike.png"
          className="w-[90px] h-[30px]"
        />
        <img
          loading="lazy"
          alt=""
          src="https://images.ctfassets.net/spoqsaf9291f/6dIueLe6mDK6HhNObFq2On/a6cd5c6aa443fe0fc69386522acf7b70/amazon.png"
          className="w-[90px] h-[30px]"
        />
        <img
          loading="lazy"
          alt=""
          src="https://images.ctfassets.net/spoqsaf9291f/6WgTu82608DIXfxu9KliYL/326d36bbde762fd9c1800872db81244c/pinterest.png"
          className="w-[90px] h-[30px]"
        />
        <img
          loading="lazy"
          alt=""
          src="https://images.ctfassets.net/spoqsaf9291f/LnKYnStAE4vKs51ejLRj2/69cb3e0382538d4c925208ea24f253f5/General_Electric_logo.svg__1_.png"
          className="w-[50px] h-[50px]"
        />
        <img
          loading="lazy"
          alt=""
          src="https://images.ctfassets.net/spoqsaf9291f/3o80U1VqLr5X1nE4kWlZM5/7d1493bad9ba1bd0adf0cf21b6751dd2/uber.png"
          className="w-[90px] h-[30px]"
        />
        <img
          loading="lazy"
          alt="Plaid, Inc. logo"
          src="https://images.ctfassets.net/spoqsaf9291f/2owwRqFrnSdM98Js9Itzih/15cca0ca61fbbaadfeef6b70108ffb42/plaid.png"
          className="w-[90px] h-[35px]"
        />
        <img
          loading="lazy"
          src="https://images.ctfassets.net/spoqsaf9291f/18DMuU2Os0OAYiJxqU3aE7/3f2d9ce2c5761513c4f34f41cf85b028/Screen_Shot_2022-09-27_at_11.11_3.png"
          className="w-[100px] h-[30px]"
        />
        <img
          loading="lazy"
          alt=""
          src="https://images.ctfassets.net/spoqsaf9291f/346udUCJm76OzP8M0yI78w/81099c4f771df9286782581fe18d0efc/snowflake.png"
          className="w-[130px] h-[30px]"
        />
        <img
          loading="lazy"
          alt=""
          src="https://images.ctfassets.net/spoqsaf9291f/xDZNk5XtOxMEiqsiJ6paq/c9958ceead0fb85872449d26186d62b1/headspace__1_.png"
          className="w-[130px] h-[30px]"
        />
        <img
          loading="lazy"
          alt=""
          src="https://images.ctfassets.net/spoqsaf9291f/4r1tX1hoz2RZigBJYbFbBJ/37e1dc9aa41342497d3e35a31649b2ae/angel-list.png"
          className="w-[110px] h-[30px]"
        />
        <img
          loading="lazy"
          alt=""
          src="https://images.ctfassets.net/spoqsaf9291f/4AmP2cmuZ2kUwbeSw3ukj9/91ee33f40debced0e8188a0847cb65af/robinhood_logo.png"
          className="w-[110px] h-[30px]"
        />{" "}
      </div>
      <div className="flex">
        <div className="flex items-center flex-col lg:ml-20">
          <div className="mt-4 text-4xl lg:mt-14 lg:text-5xl font-bold">
            Consolidate tools.
          </div>
          <div className="text-4xl mt-2 lg:text-5xl font-bold">Cut costs.</div>
        </div>
        <div>
          <img
            className="hidden lg:block"
            src="https://www.notion.so/cdn-cgi/image/format=webp,width=256/front-static/pages/home/giant-pencil-illustration.png"
          />
        </div>
      </div>
      <div className="w-[40%]">
        <div className="absolute -bottom-20">
          <img
            className="hidden lg:block"
            src="https://www.notion.so/cdn-cgi/image/format=webp,width=640/front-static/pages/home/tools-before-notion-V2.png"
          />
        </div>
        <div className="hidden lg:block absolute bottom-25 ">
          <img src={scratch} />
        </div>
      </div>
    </div>
  );
};

export default Customers;
