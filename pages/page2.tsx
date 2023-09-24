import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const Page2: NextPage = () => {
  const router = useRouter();

  const onFashionLogoClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onSignUpClick = useCallback(() => {
    router.push("/page2");
  }, [router]);

  return (
    <div className="relative bg-white w-full flex flex-col items-center justify-start text-center text-[2.58rem] text-white font-poppins">
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
      <div className="self-stretch bg-goldenrod flex flex-col items-center justify-center py-[6.94rem] px-[21.33rem] lg:pl-[12.5rem] lg:pr-[12.5rem] lg:box-border md:pl-[3.44rem] md:pr-[3.44rem] md:box-border">
        <div className="self-stretch flex flex-col items-center justify-start gap-[1.13rem]">
          <div className="self-stretch flex flex-col items-center justify-center gap-[1.75rem]">
            <div className="self-stretch relative tracking-[0.03em] leading-[3.28rem] font-black md:text-[2.19rem] md:leading-[2.5rem] sm:text-[1.88rem] sm:leading-[1.88rem]">
              Create An Account
            </div>
            <div className="self-stretch relative text-[1.5rem] tracking-[0.03em] leading-[1.64rem] text-snow md:text-[0.94rem] sm:text-[0.81rem] sm:leading-[1rem]">
              Create an account with us to enjoy all our services and perks!
            </div>
          </div>
          <div className="rounded-5xs-5 bg-white w-[26.24rem] h-[4.06rem] flex flex-row items-center justify-start py-[0.5rem] px-[0.63rem] box-border md:w-full">
            <input
              className="[border:none] font-poppins text-[1.13rem] bg-[transparent] flex-1 relative tracking-[0.03em] leading-[1.64rem] text-gray-700 text-left focus:[outline:none] md:text-[0.94rem]"
              placeholder="Email Address"
              type="text"
            />
          </div>
          <div className="rounded-5xs-5 bg-white w-[26.24rem] h-[4.06rem] flex flex-row items-center justify-start py-[0.5rem] px-[0.63rem] box-border md:w-full">
            <input
              className="[border:none] font-poppins text-[1.13rem] bg-[transparent] flex-1 relative tracking-[0.03em] leading-[1.64rem] text-gray-700 text-left focus:[outline:none] md:text-[0.94rem]"
              placeholder="Password"
              type="password"
            />
          </div>
          <button className="cursor-pointer [border:none] py-[0.69rem] px-[1.63rem] bg-black rounded-md w-[26.44rem] flex flex-row items-center justify-center box-border md:w-full">
            <div className="relative text-[1.55rem] tracking-[0.03em] leading-[1.64rem] capitalize font-medium font-poppins text-white text-left md:text-[1.25rem]">
              CREATE ACCOUNT
            </div>
          </button>
        </div>
      </div>
      <div className="self-stretch bg-black flex flex-col items-center justify-start pt-[5.56rem] px-[4.69rem] pb-[6.88rem] text-left text-[1.13rem] font-roboto sm:pl-[1.88rem] sm:pr-[1.88rem] sm:box-border">
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
                  src="/vector4.svg"
                />
              </div>
              <div className="relative w-[2.44rem] h-[2.44rem]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[11.25px] bg-khaki" />
                <img
                  className="absolute h-[42.08%] w-[42.09%] top-[28.85%] right-[29.06%] bottom-[29.07%] left-[28.85%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector5.svg"
                />
              </div>
              <div className="relative w-[2.44rem] h-[2.44rem]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[11.25px] bg-khaki" />
                <img
                  className="absolute h-[39.05%] w-[48.08%] top-[30.77%] right-[21.15%] bottom-[30.18%] left-[30.77%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector6.svg"
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
          <div className="w-[41.54rem] flex flex-row items-start justify-start gap-[8.81rem] text-gray-200 md:flex-col md:gap-[3.13rem]">
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

export default Page2;
