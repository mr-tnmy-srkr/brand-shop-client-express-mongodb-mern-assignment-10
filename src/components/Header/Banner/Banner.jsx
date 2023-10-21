import banner_bg from "../../../assets/banner-bg.png";
import computer from "../../../assets/img-1.png";

/* const Banner = () => {
  return (
    <div className="">
      <div className="relative hidden md:block">
        <img
        //   src="https://i.ibb.co/4ZkcXrY/791.jpg"
        src={banner_bg}
          alt=""
          className="w-full h-[90vh]"
        />
        {/* <div className="absolute inset-0 bg-black opacity-70"></div> */
// < className="absolute inset-0 flex items-center justify-center">
<p className="text-white text-2xl font-semibold ">
  <div className="flex justify-evenly item-center">
    <div className="flex-1">
      <h1>50%disc</h1>
      <p>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration
      </p>
    </div>
    <div className="flex-1">
      <img src={computer} alt="" />
    </div>
  </div>
</p>;
// <//div>
//   </div>

{
  /* <img
        className="md:hidden"
        src="https://i.ibb.co/ypL5Zny/26680.jpg"
        alt=""
      /> */
}
// </div>
//   );
// };

// export default Banner; */

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
