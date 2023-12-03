const Review_one = () => {
  return (
    <div className="flex flex-col items-center mx-6">
      <div className="flex flex-wrap items-center flex-col  text-3xl">
        <div className="lg:w-[55%] text-center">
          “We got rid of nearly a dozen different tools because of what Notion
          does for us.”
        </div>
        <div className="flex items-center justify-center p-8 lg:pb-[150px] gap-8">
          <div>
            <img src="https://www.notion.so/cdn-cgi/image/format=webp,width=128/front-static/shared/logos/color/metalab.png" />
          </div>
          <div className="flex flex-col">
            <div className="font-bold text-base">Justin Watt</div>
            <div className="text-base	">
              Director of Ops & Marketing, MetaLab
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-[55%] lg:flex gap-3 items-center  ">
        <img src="https://www.notion.so/cdn-cgi/image/format=auto,width=256,quality=100/front-static/shared/illustrations/blocks/topPeekI.png" />
        <div className="text-4xl lg:text-5xl font-bold">
          Powerful building blocks
        </div>
      </div>
    </div>
  );
};

export default Review_one;
