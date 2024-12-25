"use client";

import { BillIcon, SearchIcon } from "@/icons";
import { Image, Input } from "@nextui-org/react";

const Header = () => {
  return (
    <div className="w-full flex justify-between items-center gap-6 px-[31px] py-[15px] bg-white">
      <Input
        startContent={<SearchIcon />}
        variant="faded"
        size="lg"
        color="primary"
        placeholder="Search or type"
        className="max-w-[358px] bg-grayLightBg"
        classNames={{
          mainWrapper: "bg-white",
          innerWrapper: "bg-[#F5F4F6] overflow-hidden",
          input: "rounded-[10px] bg-grayLightBg",
        }}
      />
      <div className="flex justify-end items-center gap-10">
        <BillIcon />
        <div className="relative w-[50px] h-[50px] rounded-full">
          <Image
            src="/assets/avatar.png"
            alt="user profile picture"
            className="w-[50px] h-[50px] object-cover"
            classNames={{
              wrapper: "w-16 h-16",
              img: "object-cover",
            }}
            radius="full"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
