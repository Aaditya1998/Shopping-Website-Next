import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const ShoppingLandingPageFinal: NextPage = () => {
  const router = useRouter();

  const onFashionLogoClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onSignUpClick = useCallback(() => {
    router.push("/page2");
  }, [router]);

  return (
    <div className="relative bg-white w-full flex flex-col items-center justify-start text-left text-[2.25rem] text-black font-poppins">
      <div className="self-stretch bg-white flex flex-col items-center justify-start py-[2.19rem] px-[4.69rem] lg:pl-[3.75rem] lg:pr-[3.75rem] lg:box-border md:pl-[2.19rem] md:pr-[2.19rem] md:box-border sm:pl-[1.25rem] sm:pr-[1.25rem] sm:box-border">
        <div className="self-stretch flex flex-row items-center justify-between">
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-start gap-[0.61rem]"
            onClick={onFashionLogoClick}
          >
            <img
              className="relative w-[1.47rem] h-[1.36rem] lg:w-[1.19rem] md:w-[0.94rem]"
              alt=""
              src="/vector.svg"
            />
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-[1.88rem] tracking-[0.03em] font-black font-poppins text-black text-left inline-block lg:text-[1.56rem] md:text-[1.25rem]">
              FASHION
            </button>
          </button>
          <div className="flex flex-row items-center justify-start gap-[2.53rem] lg:gap-[0.63rem] md:gap-[0.63rem]">
            <div className="flex flex-row items-center justify-start gap-[3.05rem]">
              <div className="flex flex-row items-center justify-start gap-[3.06rem] lg:gap-[0.63rem] md:hidden">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-[1.03rem] tracking-[0.01em] font-medium font-poppins text-gray-800 text-left inline-block w-[6.33rem] h-[1.69rem] shrink-0 lg:text-[0.81rem]">
                  CATALOGUE
                </button>
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-[1.03rem] tracking-[0.01em] font-medium font-poppins text-gray-800 text-left inline-block w-[4.5rem] h-[1.55rem] shrink-0 lg:text-[0.81rem]">
                  FASHION
                </button>
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-[1.03rem] tracking-[0.01em] font-medium font-poppins text-gray-800 text-left inline-block w-[5.77rem] h-[1.55rem] shrink-0 lg:text-[0.81rem]">
                  FAVOURITE
                </button>
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-[1.03rem] tracking-[0.01em] font-medium font-poppins text-gray-800 text-left inline-block w-[4.83rem] h-[1.5rem] shrink-0 lg:text-[0.81rem]">
                  LIFESTYLE
                </button>
              </div>
              <button className="cursor-pointer [border:none] p-0 bg-gray-100 relative rounded-[13.32px] w-[4.66rem] h-[4.66rem] overflow-hidden shrink-0 hidden md:flex md:rounded-[17.68px]">
                <div className="absolute top-[1.11rem] left-[1.05rem] rounded-[5.77px] bg-white shadow-[0px_1.3316326141357422px_1.78px_0.89px_rgba(0,_0,_0,_0.25)] w-[2.52rem] h-[2.41rem]" />
                <div className="absolute top-[1.69rem] left-[1.55rem] box-border w-[1.55rem] h-[0.17rem] border-t-[2.7px] border-solid border-black" />
                <div className="absolute top-[2.25rem] left-[1.55rem] box-border w-[1.55rem] h-[0.17rem] border-t-[2.7px] border-solid border-black" />
                <div className="absolute top-[2.8rem] left-[1.55rem] box-border w-[1.55rem] h-[0.17rem] border-t-[2.7px] border-solid border-black" />
              </button>
            </div>
            <button
              className="cursor-pointer [border:none] py-[0.63rem] px-[1.06rem] bg-black rounded-[5.25px] flex flex-row items-center justify-center hover:bg-darkslategray-300"
              onClick={onSignUpClick}
            >
              <div className="relative text-[1.13rem] tracking-[-0.03em] font-medium font-poppins text-gray-100 text-left lg:text-[1rem] md:text-[0.94rem] sm:text-[0.88rem]">
                SIGN UP
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-white flex flex-col items-center justify-start pt-[0rem] px-[4.69rem] pb-[2.75rem] text-[4.5rem] md:pl-[2.5rem] md:pr-[2.5rem] md:box-border sm:pl-[1.25rem] sm:pr-[1.25rem] sm:box-border">
        <div className="self-stretch rounded-[44.26px] bg-whitesmoke-100 flex flex-row items-center justify-center pt-[3.19rem] px-[2.5rem] pb-[0.13rem] gap-[2.38rem] lg:flex-col">
          <div className="flex flex-col items-start justify-start py-[0rem] pr-[0rem] pl-[1.73rem] relative gap-[1.69rem] sm:pl-[0rem] sm:box-border">
            <div className="absolute my-0 mx-[!important] top-[12.56rem] right-[6.43rem] bg-khaki w-[23.24rem] h-[5.51rem] [transform:_rotate(-2deg)] [transform-origin:0_0] z-[0] md:max-w-[76%] md:max-h-[15%] md:top-[150] md:left-[15] sm:w-[23.19rem] sm:max-w-[75%] sm:max-h-[15%] sm:top-[105] sm:left-[20]" />
            <div className="absolute my-0 mx-[!important] top-[0.76rem] left-[-1.28rem] bg-white w-[21.79rem] h-[5.26rem] [transform:_rotate(-2deg)] [transform-origin:0_0] z-[1] md:max-w-[65%] md:max-h-[15%] md:top-[10] sm:max-w-[60%] sm:max-h-[15%] sm:top-[4] sm:left-[4]" />
            <div className="relative leading-[5.63rem] font-black z-[2] md:text-[3.13rem] md:leading-[4.38rem] sm:text-[2.5rem] sm:leading-[3.13rem]">
              <p className="m-0">LET’S</p>
              <p className="m-0">EXPLORE</p>
              <p className="m-0">UNIQUE</p>
              <p className="m-0">CLOTHES.</p>
            </div>
            <div className="relative text-[1.5rem] tracking-[-0.05em] text-gray-1000 inline-block w-[28.41rem] h-[2.72rem] shrink-0 z-[3] md:text-[1.06rem] md:w-full sm:text-[0.88rem]">
              Live for Influential and Innovative fashion!
            </div>
            <div className="flex flex-row items-center justify-start gap-[1.59rem] z-[4]">
              <img
                className="relative w-[8.91rem] h-[1.5rem] md:w-[6.25rem]"
                alt=""
                src="/vector-9.svg"
              />
              <button className="cursor-pointer [border:none] py-[0.81rem] px-[1.88rem] bg-black rounded-5xs-5 flex flex-row items-start justify-start hover:bg-darkslategray-300 sm:pl-[0.94rem] sm:pr-[0.94rem] sm:box-border">
                <div className="relative text-[1.41rem] tracking-[-0.05em] font-medium font-poppins text-white text-left md:text-[0.81rem] sm:text-[0.94rem]">
                  Shop Now
                </div>
              </button>
            </div>
          </div>
          <img
            className="relative w-[41.75rem] h-auto object-cover max-w-[false]"
            alt=""
            src="/image-1@2x.png"
          />
        </div>
      </div>
      <img
        className="self-stretch max-w-full overflow-hidden max-h-full object-cover h-auto"
        alt=""
        src="/brands@2x.png"
      />
      <div className="self-stretch bg-white flex flex-col items-center justify-center pt-[3.25rem] px-[4.88rem] pb-[4.32rem] md:pr-[4.88rem] md:box-border sm:pl-[1.25rem] sm:pr-[1.25rem] sm:box-border">
        <div className="self-stretch flex flex-col items-start justify-start gap-[4.75rem]">
          <div className="flex flex-row items-start justify-start relative gap-[0.63rem]">
            <img
              className="absolute my-0 mx-[!important] top-[0.75rem] left-[10.13rem] w-[8.72rem] h-[1.64rem] z-[0]"
              alt=""
              src="/leaf.svg"
            />
            <div className="relative tracking-[0.06em] leading-[2.34rem] font-black z-[1] md:text-[1.88rem]">
              NEW ARRIVALS
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-around gap-[5.94rem] flex-wrap text-[1.5rem] text-gray-900 lg:flex-wrap lg:justify-around">
            <div className="w-[22.69rem] h-[37.88rem] flex flex-col items-start justify-start gap-[1.31rem] sm:max-w-[95%]">
              <img
                className="self-stretch relative rounded-mini max-w-full overflow-hidden h-[33rem] shrink-0 object-cover"
                alt=""
                src="/fashionimage@2x.png"
              />
              <div className="self-stretch flex flex-row items-center justify-between">
                <div className="flex flex-col items-start justify-start gap-[0.33rem]">
                  <div className="relative tracking-[-0.04em] leading-[2.34rem] font-medium inline-block w-[15.05rem] h-[1.69rem] shrink-0">{`Hoodies & Sweetshirt`}</div>
                  <div className="relative text-[1.13rem] tracking-[-0.04em] leading-[2.34rem] font-medium text-gray-300 inline-block w-[7.08rem] h-[1.55rem] shrink-0">
                    Explore Now!
                  </div>
                </div>
                <img
                  className="relative w-[1.57rem] h-[1.04rem]"
                  alt=""
                  src="/arrow-1.svg"
                />
              </div>
            </div>
            <div className="w-[22.69rem] h-[37.74rem] flex flex-col items-start justify-start gap-[1.22rem] sm:max-w-[95%]">
              <img
                className="self-stretch relative rounded-mini max-w-full overflow-hidden h-[33rem] shrink-0 object-cover"
                alt=""
                src="/fashionimage1@2x.png"
              />
              <div className="self-stretch flex flex-row items-center justify-between">
                <div className="flex flex-col items-start justify-start gap-[0.33rem]">
                  <div className="relative tracking-[-0.04em] leading-[2.34rem] font-medium inline-block w-[10.78rem] h-[1.69rem] shrink-0">{`Coats & Parkas`}</div>
                  <div className="relative text-[1.13rem] tracking-[-0.04em] leading-[2.34rem] font-medium text-gray-300 inline-block w-[7.17rem] h-[1.5rem] shrink-0">
                    Explore Now!
                  </div>
                </div>
                <img
                  className="relative w-[1.57rem] h-[1.04rem]"
                  alt=""
                  src="/arrow-2.svg"
                />
              </div>
            </div>
            <div className="w-[22.97rem] h-[37.74rem] flex flex-col items-start justify-start gap-[1.13rem] sm:max-w-[95%]">
              <img
                className="self-stretch relative rounded-mini max-w-full overflow-hidden h-[33rem] shrink-0 object-cover"
                alt=""
                src="/fashionimage2@2x.png"
              />
              <div className="self-stretch flex flex-row items-center justify-between">
                <div className="flex flex-col items-start justify-start gap-[0.33rem]">
                  <div className="relative tracking-[-0.04em] leading-[2.34rem] font-medium inline-block w-[9.8rem] h-[1.73rem] shrink-0">{`Tees & T-Shirt`}</div>
                  <div className="relative text-[1.13rem] tracking-[-0.04em] leading-[2.34rem] font-medium text-gray-300 inline-block w-[6.75rem] h-[1.55rem] shrink-0">
                    Explore Now!
                  </div>
                </div>
                <img
                  className="relative w-[1.57rem] h-[1.04rem]"
                  alt=""
                  src="/arrow-3.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-white flex flex-col items-center justify-center py-[2.5rem] px-[4.69rem] sm:pl-[1.25rem] sm:pr-[1.25rem] sm:box-border">
        <div className="self-stretch flex flex-col items-start justify-start gap-[4.88rem] max-w-[80.63rem]">
          <div className="relative w-[25.31rem] h-[2.38rem] overflow-hidden shrink-0 md:w-[21.25rem]">
            <img
              className="absolute top-[0.43rem] left-[15rem] w-[8.91rem] h-[1.5rem] md:left-[190]"
              alt=""
              src="/vector-91.svg"
            />
            <div className="absolute top-[0rem] left-[0rem] tracking-[0.06em] leading-[2.34rem] font-black md:text-[1.88rem]">
              Young’s Favourite
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[2.19rem] text-[1.5rem] md:flex-col">
            <div className="flex-1 flex flex-col items-start justify-start gap-[1.31rem] md:flex-[unset] md:self-stretch">
              <img
                className="self-stretch relative rounded-mini max-w-full overflow-hidden h-auto shrink-0 object-cover"
                alt=""
                src="/rectangle-50@2x.png"
              />
              <div className="self-stretch flex flex-row items-center justify-between">
                <div className="flex flex-col items-start justify-start gap-[0.33rem]">
                  <div className="relative tracking-[-0.04em] leading-[2.34rem] font-medium inline-block w-[16.17rem] h-[1.69rem] shrink-0 md:text-[1.25rem]">
                    Trending on instagram
                  </div>
                  <div className="relative text-[1.13rem] tracking-[-0.04em] leading-[2.34rem] font-medium text-gray-300 inline-block w-[6.84rem] h-[1.55rem] shrink-0 md:text-[0.94rem]">
                    Explore Now!
                  </div>
                </div>
                <img
                  className="relative w-[1.57rem] h-[1.04rem]"
                  alt=""
                  src="/arrow-4.svg"
                />
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[1.31rem] md:flex-[unset] md:self-stretch">
              <img
                className="self-stretch relative rounded-mini max-w-full overflow-hidden h-auto shrink-0 object-cover"
                alt=""
                src="/rectangle-49@2x.png"
              />
              <div className="self-stretch flex flex-row items-center justify-between">
                <div className="flex flex-col items-start justify-start gap-[0.33rem]">
                  <div className="relative tracking-[-0.04em] leading-[2.34rem] font-medium inline-block w-[9.38rem] h-[1.64rem] shrink-0 md:text-[1.25rem] sm:text-[0.94rem]">
                    All Under $40
                  </div>
                  <div className="relative text-[1.13rem] tracking-[-0.04em] leading-[2.34rem] font-medium text-gray-300 inline-block w-[6.7rem] h-[1.55rem] shrink-0">
                    Explore Now!
                  </div>
                </div>
                <img
                  className="relative w-[1.57rem] h-[1.04rem]"
                  alt=""
                  src="/arrow-5.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-white flex flex-row items-center justify-center pt-[4.44rem] px-[10.25rem] pb-[5.88rem] gap-[11rem] lg:flex-col md:flex-col">
        <div className="flex flex-col items-start justify-start">
          <div className="flex flex-col items-start justify-start gap-[3.05rem]">
            <div className="flex flex-col items-start justify-start gap-[1.92rem]">
              <div className="relative tracking-[0.06em] leading-[150%] font-black md:text-[1.88rem] sm:text-[1.56rem]">
                <p className="m-0">{`DOWNLOAD APP &`}</p>
                <p className="m-0">GET THE VOUCHER!</p>
              </div>
              <div className="relative text-[1.13rem] tracking-[-0.04em] leading-[1.64rem] font-medium text-gray-400 inline-block w-[19.64rem] h-[2.86rem] shrink-0 md:text-[0.88rem] sm:text-[0.75rem]">
                <p className="m-0">Get 30% off for first transaction using</p>
                <p className="m-0">Rondovision mobile app for now.</p>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[0.89rem]">
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-start justify-start">
                <img
                  className="relative rounded-5xs-5 w-[9.56rem] h-[3.33rem] object-cover"
                  alt=""
                  src="/rectangle-55@2x.png"
                />
              </button>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-start justify-start">
                <img
                  className="relative rounded-5xs-5 w-[9.56rem] h-[3.33rem] object-cover"
                  alt=""
                  src="/rectangle-18@2x.png"
                />
              </button>
            </div>
          </div>
        </div>
        <img
          className="relative w-[33.01rem] h-auto object-cover max-w-[false] md:min-w-[25rem] md:max-w-[90%] sm:min-w-[21.88rem]"
          alt=""
          src="/image-2@2x.png"
        />
      </div>
      <div className="self-stretch bg-goldenrod flex flex-col items-center justify-center py-[6.94rem] px-[21.33rem] text-center text-[2.58rem] text-white lg:pl-[12.5rem] lg:pr-[12.5rem] lg:box-border md:pl-[3.44rem] md:pr-[3.44rem] md:box-border sm:pl-[1.25rem] sm:pr-[1.25rem] sm:box-border">
        <div className="self-stretch flex flex-col items-center justify-start gap-[1.13rem]">
          <div className="self-stretch flex flex-col items-center justify-center gap-[1.75rem]">
            <div className="self-stretch relative tracking-[0.03em] leading-[3.28rem] font-black md:text-[2.19rem] md:leading-[2.5rem] sm:text-[1.88rem] sm:leading-[1.88rem]">
              JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
            </div>
            <div className="self-stretch relative text-[1.5rem] tracking-[0.03em] leading-[1.64rem] text-snow md:text-[0.94rem] sm:text-[0.81rem] sm:leading-[1rem]">
              Type your email down below and be young wild generation
            </div>
          </div>
          <div className="rounded-5xs-5 bg-white w-[26.24rem] h-[4.06rem] flex flex-row items-center justify-start py-[0.5rem] px-[0.63rem] box-border gap-[1.25rem] md:w-full">
            <input
              className="[border:none] font-poppins text-[1.13rem] bg-[transparent] flex-1 relative tracking-[0.03em] leading-[1.64rem] text-gray-700 text-left focus:[outline:none] md:text-[0.94rem] md:w-[calc(100%_-_120px);]"
              placeholder="Add your email here"
              type="text"
            />
            <button className="cursor-pointer [border:none] py-[0.69rem] px-[1.63rem] bg-black rounded-md flex flex-row items-center justify-center sm:pl-[0.63rem] sm:pr-[0.63rem] sm:box-border">
              <div className="relative text-[1.55rem] tracking-[0.03em] leading-[1.64rem] capitalize font-medium font-poppins text-white text-left md:text-[1.25rem]">
                SEND
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-black flex flex-col items-center justify-start pt-[5.56rem] px-[4.69rem] pb-[6.88rem] text-[1.13rem] text-white font-roboto sm:pl-[1.88rem] sm:pr-[1.88rem] sm:box-border">
        <div className="self-stretch flex flex-row items-start justify-between lg:flex-col lg:gap-[3.13rem]">
          <div className="flex flex-col items-start justify-center gap-[1.5rem]">
            <div className="relative text-[1.88rem] tracking-[0.03em] font-black font-poppins inline-block w-[9rem] h-[2.46rem] shrink-0">
              FASHION
            </div>
            <div className="relative tracking-[0.02em] leading-[1.88rem] text-gray-200 inline-block w-[19.46rem]">
              Complete your style with awesome clothes from us.
            </div>
            <div className="flex flex-row items-start justify-start gap-[0.66rem] text-black">
              <div className="relative w-[2.44rem] h-[2.44rem]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[11.25px] bg-khaki" />
                <img
                  className="absolute h-[48.08%] w-[25.75%] top-[25%] right-[37.71%] bottom-[26.92%] left-[36.54%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector1.svg"
                />
              </div>
              <div className="relative w-[2.44rem] h-[2.44rem]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[11.25px] bg-khaki" />
                <img
                  className="absolute h-[42.08%] w-[42.09%] top-[28.85%] right-[29.06%] bottom-[29.07%] left-[28.85%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector2.svg"
                />
              </div>
              <div className="relative w-[2.44rem] h-[2.44rem]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[11.25px] bg-khaki" />
                <img
                  className="absolute h-[39.05%] w-[48.08%] top-[30.77%] right-[21.15%] bottom-[30.18%] left-[30.77%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector3.svg"
                />
              </div>
              <div className="relative w-[2.44rem] h-[2.44rem]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[11.25px] bg-khaki" />
                <b className="absolute h-[53.85%] w-[44.23%] top-[11.54%] left-[30.77%] tracking-[0.02em] leading-[1.88rem] inline-block">
                  in
                </b>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[8.81rem] text-gray-200 md:flex-col md:gap-[3.13rem]">
            <div className="flex flex-col items-start justify-start gap-[1.56rem]">
              <div className="relative tracking-[0.02em] leading-[1.88rem] text-gainsboro inline-block w-[4.94rem] h-[1.31rem] shrink-0">
                Company
              </div>
              <div className="relative tracking-[0.02em] leading-[1.88rem] inline-block w-[3.13rem] h-[1.31rem] shrink-0">
                About
              </div>
              <div className="relative tracking-[0.02em] leading-[1.88rem] inline-block w-[6.44rem] h-[1.31rem] shrink-0">
                Contact us
              </div>
              <div className="relative tracking-[0.02em] leading-[1.88rem] inline-block w-[4.13rem] h-[1.31rem] shrink-0">
                Support
              </div>
              <div className="relative tracking-[0.02em] leading-[1.88rem] inline-block w-[4.06rem] h-[1.31rem] shrink-0">
                Careers
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[1.56rem] text-gray-500">
              <div className="relative tracking-[0.02em] leading-[1.88rem] text-gainsboro inline-block w-[5.44rem] h-[1.31rem] shrink-0">
                Quick Link
              </div>
              <div className="relative tracking-[0.02em] leading-[1.88rem] inline-block w-[7.81rem] h-[1.31rem] shrink-0">
                Share Location
              </div>
              <div className="relative tracking-[0.02em] leading-[1.88rem] inline-block w-[8.25rem] h-[1.31rem] shrink-0">
                Orders Tracking
              </div>
              <div className="relative tracking-[0.02em] leading-[1.88rem] inline-block w-[5.5rem] h-[1.31rem] shrink-0">
                Size Guide
              </div>
              <div className="relative tracking-[0.02em] leading-[1.88rem] inline-block w-[2.69rem] h-[1.31rem] shrink-0">
                FAQs
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[1.5rem] text-whitesmoke-200">
              <div className="relative tracking-[0.02em] leading-[1.88rem] inline-block w-[2.81rem] h-[1.31rem] shrink-0">
                Legal
              </div>
              <div className="relative tracking-[0.02em] leading-[1.88rem] text-gray-200 inline-block w-[10.06rem] h-[1.31rem] shrink-0">{`Terms & conditions`}</div>
              <div className="relative tracking-[0.02em] leading-[1.88rem] text-gray-600 inline-block w-[7.25rem] h-[1.31rem] shrink-0">
                Privacy Policy
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingLandingPageFinal;
