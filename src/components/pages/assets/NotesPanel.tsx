import { AlertIcon, CommentIcon, WrenchIcon } from "@/icons";
import { Card, CardBody, CardHeader } from "@nextui-org/react";

const NotesPanel = () => {
  return (
    <Card
      shadow="sm"
      className="w-full min-w-[311px]  items-center px-[18px] py-[20px] rounded-[14px] bg-white"
    >
      <CardHeader className="p-0 mb-4">
        <h3 className="text-[20px] font-bold text-primaryDark1">Notes</h3>
      </CardHeader>

      <CardBody className="flex flex-col  items-center justify-start p-0 gap-10">
        <div className="w-full flex justify-start items-start gap-[14px]">
          <div className="rounded-[30px] bg-white shadow-md shadow-[rgba(147,144,144,0.20)] p-[10px]">
            <CommentIcon />
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <p className="text-[13px] text-black font-medium ">
              Monday, 6th Apirl 2020
            </p>
            <p className="text-grayDark3 text-[11px]">
              Book for General Service
            </p>
            <div className="px-[10px] py-[1px] bg-[#70CF97] rounded-[4px] text-[10px] text-white font-bold">
              COMPLETED
            </div>
          </div>
        </div>
        <div className="w-full flex justify-start items-start gap-[14px]">
          <div className="rounded-[30px] bg-white shadow-md shadow-[rgba(147,144,144,0.20)] p-[10px]">
            <AlertIcon />
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <p className="text-[13px] text-black font-medium ">
              Thursday, 24th October 2021
            </p>
            <p className="text-grayDark3 text-[11px]">
              Vehicle LV 001 has been marked for recall.
            </p>
            <div className="px-[10px] py-[1px] bg-[#ECEEF0] rounded-[4px] text-[10px] text-white font-bold">
              14:07-21/11/2021
            </div>
          </div>
        </div>
        <div className="w-full flex justify-start items-start gap-[14px]">
          <div className="rounded-[30px] bg-white shadow-md shadow-[rgba(147,144,144,0.20)] p-[10px]">
            <WrenchIcon />
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <p className="text-[13px] text-black font-medium ">
              Monday, 13th August 2018
            </p>
            <p className="text-grayDark3 text-[11px]">
              Maintenance Completed, Collect
            </p>
            <div className="px-[10px] py-[1px] bg-[#ECEEF0] rounded-[4px] text-[10px] text-white font-bold">
              14:07-21/11/2021
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default NotesPanel;
