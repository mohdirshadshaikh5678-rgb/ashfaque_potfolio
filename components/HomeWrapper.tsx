import HomeSec1 from "@/components/homesec1";
import HomeSec2 from "@/components/homesec2";
import HomeSec3 from "@/components/homesec3";
import MayaModelSec from "@/components/mayaModelSec";
import AimodelvidSec from "@/components/AimodelvidSec";

export default function HomeWrapper() {
  return (
    <div className="relative flex-1">
      <HomeSec1 />
      <HomeSec2 />
      <HomeSec3 />
      <MayaModelSec />
      <AimodelvidSec />
    </div>
  );
}