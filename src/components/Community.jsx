import image_04 from "../assets/image_04.png";

const Community = () => {
  return (
    <div className="mx-6">
      <div className="flex flex-wrap text-5xl font-bold text-center justify-center">
        <div className="lg:w-[30%]">
          Join a global movement. Unleash your creativity.
        </div>
      </div>
      <div className="flex flex-col flex-wrap gap-6 items-center mt-4 text-center">
        <div className="lg:w-[32%]">
          Our vibrant community produces content, teaches courses, and leads
          events all over the world.
        </div>
        <div className="text-blue-500 font-semibold cursor-pointer">
          Learn more →
        </div>
        <div>
          <img src="https://www.notion.so/cdn-cgi/image/format=webp,width=1080/front-static/pages/home/avatars.png" />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex lg:flex-row flex-col lg:w-[55%] gap-4">
          <div className="flex flex-col lg:basis-1/3 p-4 rounded-xl bg-[#f6f4f5]">
            <div className="text-5xl font-bold text-blue-500">1M+</div>
            <div className="font-semibold">community members</div>
          </div>
          <div className="flex flex-col lg:basis-1/3 p-4 rounded-xl bg-[#f6f4f5]">
            <div className="text-5xl font-bold text-blue-500">150+</div>
            <div className="font-semibold">community groups</div>{" "}
          </div>
          <div className="flex flex-col basis-1/3 p-4 rounded-xl bg-[#f6f4f5]">
            <div className="text-5xl font-bold text-blue-500">50+</div>
            <div className="font-semibold">countries represented</div>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col gap-10 lg:w-[55%] mx-auto justify-between mt-8 ">
        <div className="rounded-2xl flex flex-col lg:basis-1/2 bg-[#f6f4f5] pt-6 pl-6 pr-4">
          <div className="font-bold text-xl pt-2">
            An always-on support network
          </div>
          <div className="text-lg	">
            Swap setups and share tips in over 149 online communities.
          </div>
          <img
            className="w-[60%]"
            src="https://www.notion.so/cdn-cgi/image/format=webp,width=384/front-static/pages/home/community-icons-V2.png"
          />
        </div>
        <div className="rounded-2xl flex flex-col basis-1/2 bg-[#f6f4f5] pt-6 pl-6 relative pr-4">
          <div className="font-bold text-xl pt-2">Choose your language</div>
          <div className="text-lg">
            Notion currently supports English, Korean, Japanese, French, German,
            Spanish, and Portuguese. With more to come!
          </div>
          <img
            className="absolute bottom-0 right-0 lg:w-[90%] "
            src="https://www.notion.so/cdn-cgi/image/format=webp,width=1080/front-static/pages/home/welcome-to-notion.png"
          />
        </div>
      </div>
      <div className="flex lg:flex-row flex-col gap-10 lg:w-[55%] mx-auto justify-between mt-8 ">
        <div className="rounded-2xl flex flex-col basis-2/3 bg-[#f6f4f5] p-6">
          <img src={image_04} />
        </div>
        <div className="basis-1/3 flex flex-col gap-4">
          <div className="basis-1/3 p-4 flex flex-col bg-[#f6f4f5] rounded-xl gap-4">
            <div className="flex gap-4 ">
              <img
                className="lg:w-[15%] h-[95%]"
                src="https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/front-static/pages/home/avatars/twitter-avatar-deborah.png"
              />
              <div>
                <div className="font-bold text-base">Deborah Mecca</div>
                <div>@DebMecca</div>
              </div>
            </div>
            <div>
              I used to HATE documenting things. And then I started using
              @NotionHQ and I document a lot. A LOT A LOT. Now I just realize
              that it wasn&apos;t that I hated documenting, I just hated Google
              Docs.
            </div>
          </div>
          <div className="basis-1/3 p-4 flex flex-col bg-[#f6f4f5] rounded-xl gap-4">
            <div className="flex gap-4 ">
              <img
                className="w-[15%] h-[95%]"
                src="https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/front-static/pages/home/avatars/twitter-avatar-andre.png"
              />
              <div>
                <div className="font-bold text-base">André Blackman</div>
                <div>@mindofandre</div>
              </div>
            </div>
            <div>
              One of the most incredible things about @NotionHQ is the dynamic
              community being built - creating and sharing at its best.
            </div>
          </div>
          <div className="basis-1/3 p-4 flex flex-col bg-[#f6f4f5] rounded-xl gap-4">
            <div className="flex gap-4 ">
              <img
                className="w-[15%] h-[95%]"
                src="https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/front-static/pages/home/avatars/twitter-avatar-oliver.png"
              />
              <div>
                <div className="font-bold text-base">Oliver Peyre</div>
                <div>@opeyre</div>
              </div>
            </div>
            <div>
              @NotionHQ Truly impressed by the velocity and quality of your
              work. Making using Notion even more fun week after week!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
