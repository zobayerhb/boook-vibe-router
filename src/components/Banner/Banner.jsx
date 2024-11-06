import bannerImg from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="hero bg-gray-700 min-h-screen rounded-3xl">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={bannerImg} className="max-w-sm rounded-lg shadow-2xl" />
        <div className="w-2/4">
          <h1 className="text-6xl font-bold leading-[84px]">
            Books to freshen up your bookshelf
          </h1>
          <button className="  text-white bg-[#23BE0A] font-bold px-7 py-5 rounded-lg text-xl">
            View The List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
