import computer from "../../../assets/img-1.png";

const Banner = () => {
  const bg_image = {
    // backgroundImage: `url(${banner_bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div>
      <div
        style={bg_image}
        className={`h-[85vh] bg-computer md:bg-hero-pattern flex justify-center items-center flex-col md:flex-row py-10`}
      > 
        <div className="space-y-4 md:space-y-10 flex-1 text-center">
          <h1 className="text-4xl md:text-6xl font-bold  dar">
            50% Discount <br /> Online Shop
          </h1>
          <p className="font-semibold text-lg">
            Get Rewards Every time you Shop! <br />
            Join the VIP Club and Get 5% Cashback on Every Order.
          </p>
        </div>
        <div className="flex-1 text-center mx-auto">
          <img className="w-3/4 mx-auto" src={computer} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
