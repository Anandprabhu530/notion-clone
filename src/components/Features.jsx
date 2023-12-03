import image_03 from "../assets/image_03.png";

const Features = () => {
  return (
    <div className="mx-6">
      <div className="flex justify-center text-5xl font-bold pb-10">
        Every team, side-by-side
      </div>
      <div className="flex flex-col gap-8 items-center">
        <div className="flex flex-wrap justify-center gap-6">
          <div className="flex flex-col items-center border-2 border-[#e2e2e2] cursor-pointer hover:bg-white p-2 lg:p-4 px-6 rounded-lg bg-[#eaeaea]">
            <img
              className="w-[0%] lg:w-[90%]"
              src="https://www.notion.so/cdn-cgi/image/format=auto,width=96,quality=100/front-static/pages/home/persona-carousel/icons/engineering-v2.png"
            />
            <div className="font-semibold">Engineering</div>
          </div>
          <div className="flex flex-col items-center border-2 border-[#e2e2e2] cursor-pointer hover:bg-white p-2 lg:p-4 px-6 rounded-lg bg-[#eaeaea]">
            <img
              className="w-[0%] lg:w-[90%]"
              src="https://www.notion.so/cdn-cgi/image/format=auto,width=96,quality=100/front-static/pages/home/persona-carousel/icons/design-v2.png"
            />
            <div className="font-semibold">Design</div>
          </div>
          <div className="flex flex-col items-center border-2 border-[#e2e2e2] cursor-pointer hover:bg-white p-2 lg:p-4 px-6 rounded-lg bg-[#eaeaea]">
            <img
              className="w-[0%] lg:w-[90%]"
              src="https://www.notion.so/cdn-cgi/image/format=auto,width=96,quality=100/front-static/pages/home/persona-carousel/icons/product.png"
            />
            <div className="font-semibold">Product</div>
          </div>
          <div className="flex flex-col items-center border-2 border-[#e2e2e2] cursor-pointer hover:bg-white p-2 lg:p-4 px-6 rounded-lg bg-[#eaeaea]">
            <img
              className="w-[0%] lg:w-[90%]"
              src="https://www.notion.so/cdn-cgi/image/format=auto,width=96,quality=100/front-static/pages/home/persona-carousel/icons/marketing.png"
            />
            <div className="font-semibold">Marketing</div>
          </div>
          <div className="flex flex-col items-center border-2 border-[#e2e2e2] cursor-pointer hover:bg-white p-2 lg:p-4 px-6 rounded-lg bg-[#eaeaea]">
            <img
              className="w-[0%] lg:w-[90%]"
              src="https://www.notion.so/cdn-cgi/image/format=auto,width=96,quality=100/front-static/pages/home/persona-carousel/icons/operations.png"
            />
            <div className="font-semibold">Operations</div>
          </div>
          <div className="flex flex-col items-center border-2 border-[#e2e2e2] cursor-pointer hover:bg-white p-2 lg:p-4 px-6 rounded-lg bg-[#eaeaea]">
            <img
              className="w-[0%] lg:w-[90%]"
              src="https://www.notion.so/cdn-cgi/image/format=auto,width=96,quality=100/front-static/pages/home/persona-carousel/icons/hr-v2.png"
            />
            <div className="font-semibold">HR </div>
          </div>
        </div>
        <div className="pb-32">
          <img
            className="border-2 border-[#e5e4e4] rounded-xl drop-shadow-2xl"
            src={image_03}
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
