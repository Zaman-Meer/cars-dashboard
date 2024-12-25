import { CarDataType } from "@/types";
import { Card, CardBody, Image } from "@nextui-org/react";

interface CarViewPanelProps {
  carDetails: CarDataType;
}

const CarViewPanel = ({ carDetails }: CarViewPanelProps) => {
  return (
    <Card
      shadow="sm"
      className="w-full min-w-[200px]  min-h-[387px]  max-h-[387px] items-center px-[43px] py-[25px]  rounded-[14px] bg-white"
    >
      <CardBody className="w-full flex flex-col justify-center items-start p-0">
        <h2 className="text-3xl font-bold text-primaryDark1">
          {carDetails?.modal}
        </h2>
        <div className="relative w-full flex justify-center items-center pl-6">
          <Image
            src="/assets/bg-1.png"
            alt="bg"
            width={0}
            height={300}
            sizes="100vw"
            className="w-full h-auto"
          />
          <div className="absolute top-0 left-[50%] rounded-none transform -translate-x-[50%] w-full max-w-[400px] min-h-[250px] flex justify-center items-center z-10">
            <Image
              src={carDetails?.image}
              alt="bg"
              width={0}
              height={200}
              sizes="100vw"
              className="w-full min-w-[300px] h-auto animate-slideIn rounded-none"
            />
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default CarViewPanel;
