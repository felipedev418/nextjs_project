import React from "react";
import DiscordBig from "@/public/assets/svg/discordbig.svg";
import TwitterBig from "@/public/assets/svg/twitterbig.svg";
import Link from "next/link";

const ComingSoon = () => {
  return (
    <div className="pt-60 flex flex-col justify-center align-middle items-center">
      <img src="./assets/icons/logo2.png" alt="logo"  />
      <h2 className="font-fredoka mt-[31px] tracking-wide font-medium text-[24px] text-[#7F7F7F]">Coming Soon...</h2>
      <div className="flex items-center mt-[18px] gap-[14px] ">
        <Link href={"/"}>
          <div className="flex justify-center w-[40px] items-center px-[10px] py-[12px] border border-[#272625] bg-[#1A1A19] rounded-xl">
              <TwitterBig />
          </div>
        </Link>
        <Link href={"/"}>
          <div className="flex justify-center w-[44px] h-[44px] items-center px-[10px] py-[12px] border border-[#272625] bg-[#1A1A19] rounded-xl">
            <DiscordBig />
          <img src="./assets/images/light.png" alt="light" className="absolute top-24" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ComingSoon;