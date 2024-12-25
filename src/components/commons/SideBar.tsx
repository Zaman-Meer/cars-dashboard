"use client";
import { useParams, usePathname } from "next/navigation";
import { SideBarLinks } from "@/utils/constant";
import Link from "next/link";
import { Button, tv } from "@nextui-org/react";
import { SignOutIcon, SettingsIcon, CompanyLogo } from "@/icons";

const sidebarLink = tv({
  base: "w-full flex justify-start items-center text-[14px] font-medium text-grayDark2 gap-2 px-2 py-[7px] rounded-md hover:bg-grayLightBg",
  variants: {
    active: {
      true: "bg-grayLightBg",
      false: "bg-transparent",
    },
  },
});

const SideBar = () => {
  const params = useParams();

  const pathname = usePathname();

  return (
    <div className="w-full min-w-[248px] max-w-[248px] h-screen min-h-screen flex flex-col justify-between items-start px-6 py-[30px] bg-white border-r-1 border-r-gray-300 border-box font-medium">
      <div className="w-full h-full flex-1 flex flex-col justify-start items-start overflow-hidden">
        <div className="w-full h-auto flex justify-start items-center gap-3 text-2xl text-grayDark font-bold mb-[35px]">
          <CompanyLogo /> Test
        </div>
        <div className="w-full h-full flex-1 flex flex-col justify-start items-start overflow-auto gap-[10px]">
          {SideBarLinks?.map((navItem, index) => {
            return (
              <Link
                key={index}
                href={
                  params?.userRoleId
                    ? `/${params?.userRoleId}/${navItem.href}`
                    : navItem?.href
                }
                className={sidebarLink({
                  active: navItem?.subMenu
                    ? false
                    : navItem?.href === "/" &&
                      (pathname?.length === 2 || pathname?.length === 1)
                    ? true
                    : navItem?.href !== "/" &&
                      !!pathname.includes(navItem?.href),
                })}
              >
                {navItem?.icon && <span>{<navItem.icon />}</span>}
                <span>{navItem?.label}</span>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="w-full flex flex-col justify-end items-start gap-6 bg-white pt-6">
        <Link
          href="/settings"
          className={sidebarLink({
            active:
              pathname === "/settings" ||
              pathname === `/${params?.userRoleId}/settings`,
          })}
        >
          <SettingsIcon />
          <span>Settings</span>
        </Link>
        <Button
          fullWidth
          color="primary"
          variant="light"
          className="w-full h-[35px] flex justify-start items-center text-[14px] font-medium text-grayDark2 gap-2 px-2 py-[7px] rounded-md hover:bg-grayLightBg data-[hover=true]:bg-grayLightBg"
          startContent={<SignOutIcon className="min-h-5" />}
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default SideBar;
