"use client";

import { useState } from "react";
import { CarDataType } from "@/types";
import CarDetailsPanel from "./CarDetailsPanel";
import CarViewPanel from "./CarViewPanel";
import AssetsListPanel from "./AssetsListPanel";
import NotesPanel from "./NotesPanel";

interface AssetsScreenProps {
  cars: CarDataType[];
}
const AssetsScreen = ({ cars }: AssetsScreenProps) => {
  const [selectedCar, setSelectedCar] = useState<CarDataType>(cars[1]);

  const handleSelectCar = (car: CarDataType) => {
    setSelectedCar(car);
  };

  return (
    <div className="w-full flex flex-col justify-start items-start gap-5 p-[30px] pb-[80px]">
      <h2 className="text-3xl font-bold text-primaryDark1">Assets</h2>
      <div className="w-full h-auto flex justify-start items-start gap-6">
        <CarDetailsPanel carDetails={selectedCar} />
        <div className="w-full flex flex-col justify-start gap-6">
          <CarViewPanel carDetails={selectedCar} />
          <div className="w-full flex justify-start items-start gap-6">
            <NotesPanel />
            <AssetsListPanel
              cars={cars}
              selectedCar={selectedCar}
              onSelectCar={handleSelectCar}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AssetsScreen;
