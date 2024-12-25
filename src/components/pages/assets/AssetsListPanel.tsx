import { useState } from "react";
import { AnalyzeIcon, DownArrowIcon } from "@/icons";
import { CarDataType } from "@/types";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Checkbox,
} from "@nextui-org/react";

interface AssetsListPanelProps {
  cars: CarDataType[];
  selectedCar: CarDataType;
  onSelectCar: (car: CarDataType) => void;
}

const AssetsListPanel = ({
  cars,
  selectedCar,
  onSelectCar,
}: AssetsListPanelProps) => {
  const [seeAll, setSeeAll] = useState(false);

  const handleSeeAll = () => {
    setSeeAll(!seeAll);
  };
  const data = cars?.slice(0, seeAll ? undefined : 5) || [];
  return (
    <Card
      shadow="sm"
      className="w-full min-w-[311px] items-center px-[18px] py-[20px] rounded-[14px] bg-white"
    >
      <CardHeader className="w-full flex justify-between items-center gap-6 p-0 mb-5 pb-5 border-b border-b-[#F3F3F34">
        <h4 className="text-[18px] font-medium text-primaryDark1 ">
          Available Cars
        </h4>
        <Button endContent={<DownArrowIcon />} variant="light" size="sm">
          Assets
        </Button>
      </CardHeader>

      <CardBody className="w-full flex flex-col justify-start items-start p-0 gap-5">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          {data?.map((car, index) => (
            <div
              key={index}
              className={`w-full flex justify-between items-center gap-6 ${
                selectedCar?.modal === car?.modal
                  ? "text-[#D43B3B]"
                  : "text-[#72767C]"
              }`}
            >
              <Checkbox
                isSelected={selectedCar?.modal === car?.modal}
                onValueChange={() => onSelectCar(car)}
                color="primary"
                classNames={{
                  label: `text-[13px] front-medium ${
                    selectedCar?.modal === car?.modal
                      ? "text-[#D43B3B]"
                      : "text-[#72767C]"
                  }`,
                }}
              >
                <span
                  className={`mr-1 ${
                    selectedCar?.modal === car?.modal
                      ? "text-[#D43B3B]"
                      : "text-primaryDark1"
                  } `}
                >
                  {car?.modal}
                </span>{" "}
                ({Number(car?.Driver) / 1000}km)
              </Checkbox>
              <AnalyzeIcon />
            </div>
          ))}
        </div>
        {cars?.length > 5 && (
          <Button
            onPress={handleSeeAll}
            size="sm"
            color="primary"
            className="bg-[#FF6370] text-white rounded-[5px] mr-auto"
          >
            {seeAll ? "See Less" : "See More"}
          </Button>
        )}
      </CardBody>
    </Card>
  );
};

export default AssetsListPanel;
