const Contact = () => {
  return (
    <div className="pt-24 border-b border-slate-400">
      <div className="flex flex-col items-center gap-4">
        <div className="text-5xl text-center font-bold">
          Get started for free
        </div>
        <div className="text-lg text-center">
          Play around with it first. Pay and add your team later.
        </div>
        <div className="flex gap-6 items-center mb-12">
          <button className="bg-black text-white font-bold py-2 px-4 rounded-md">
            Try Notion free
          </button>
          <div className="text-blue-500 hover:underline underline-offset-1 cursor-pointer">
            Request a demo→
          </div>
        </div>
        <img src="https://www.notion.so/cdn-cgi/image/format=webp,width=750/front-static/pages/home/notion-parade.png" />
      </div>
    </div>
  );
};

export default Contact;
