"use client";
import { Tab, Tabs } from "@nextui-org/react";
import ProfileTab from "./ProfileTab";

const SettingsScreen = () => {
  return (
    <div className="w-full p-[30px]">
      <div className="w-full px-[34px] py-[29px] bg-white">
        <h2 className="text-3xl font-bold text-primaryDark1 mb-[30px]">
          Settings
        </h2>

        <div className="flex w-full flex-col gap-12">
          <Tabs
            aria-label="Options"
            classNames={{
              tabList:
                "gap-[34px] w-full relative rounded-none p-0 border-b border-none bg-white",
              cursor: "w-full bg-[#a162f71a] shadow-none rounded-md",
              tab: "w-max max-w-max text-grayDark2 px-[14px] py-[10px] h-[35px]",
              tabContent:
                "group-data-[selected=true]:text-primaryDark1 text-[18px] font-medium border-none",
              panel: "p-0",
            }}
          >
            <Tab key="details" title="My details" className="w-full">
              Details
            </Tab>
            <Tab key="profile" title="Profile" className="w-full">
              <ProfileTab />
            </Tab>
            <Tab key="password" title="Password" className="w-full">
              Password
            </Tab>
            <Tab key="email" title="Email" className="w-full">
              Email
            </Tab>
            <Tab key="notification" title="Notification" className="w-full">
              Password
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default SettingsScreen;
