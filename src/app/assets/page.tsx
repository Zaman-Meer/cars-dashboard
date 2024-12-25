import AssetsScreen from "@/components/pages/assets/AssetsScreen";
import { carsData } from "@/utils/dummyCarsData";

export default function AssetsPage() {
  return <AssetsScreen cars={carsData} />;
}
