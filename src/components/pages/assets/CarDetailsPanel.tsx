import { CarDataType } from "@/types";
import { formatIndianNumberIntl } from "@/utils/helpers";
import { Card, CardBody, Image } from "@nextui-org/react";

interface CarDetailsPanelProps {
  carDetails: CarDataType;
}

const CarDetailsPanel = ({ carDetails }: CarDetailsPanelProps) => {
  return (
    <Card
      shadow="sm"
      className="w-full min-w-[200px] max-w-[361px] min-h-[674px] items-center px-[23px] py-[31px]  rounded-[14px] bg-[#438FFE] overflow-visible"
    >
      <CardBody className="flex flex-col  items-center justify-start p-0 gap-10 overflow-visible">
        <div className="w-full h-auto flex flex-col justify-start items-center gap-[25px] ">
          <div className="w-full flex justify-between items-center">
            <div className="w-full flex flex-col justify-center items-start gap-4">
              <p className="font-medium text-[#C6DCFC]">Fuel Usage</p>
              <h4 className="text-white text-[20px] font-bold ">
                {`${carDetails?.fuelUsage || 0} Ltr`}
              </h4>
            </div>
            <div className="w-2 h-[41px] bg-[#579BFF] mx-[30px]" />
            <div className="w-full flex flex-col justify-center items-start gap-4">
              <p className="font-medium text-[#C6DCFC]">KM Driven</p>
              <h4 className="text-white text-[20px] font-bold ">
                {`${carDetails?.Driver || 0} Ltr`}
              </h4>
            </div>
          </div>
          <div className="w-full flex justify-between items-center">
            <div className="w-full flex flex-col justify-center items-start gap-4">
              <p className="font-medium text-[#C6DCFC]">Total Cost</p>
              <h4 className="text-white text-[20px] font-bold ">
                {`$${formatIndianNumberIntl(Number(carDetails?.Price) || 0)}`}
              </h4>
            </div>
            <div className="w-2 h-[41px] bg-[#579BFF] mx-[30px]" />
            <div className="w-full flex flex-col justify-center items-start gap-4">
              <p className="font-medium text-[#C6DCFC]">Top Speed</p>
              <h4 className="text-white text-[20px] font-bold ">
                {`$${carDetails?.topSpeed || 0}`}
              </h4>
            </div>
          </div>
        </div>
        <div className="w-full h-full mt-20">
          <Image
            src={carDetails?.image}
            alt="car-image"
            width={316}
            height={615}
            className="w-full -mb-[100px] rounded-none"
          />
        </div>
      </CardBody>
    </Card>
  );
};

export default CarDetailsPanel;
