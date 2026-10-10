import ProjectsSec1 from "@/components/projectssec1";
import ProjectsSec4 from "@/components/projectssec4";
import MayaModelSec from "@/components/mayaModelSec";
import ShowreelSec from "@/components/showreelSec";
import AfterEffectSec from "@/components/afterEffectSec";
import AiVideoSec from "@/components/aiVideoSec";

export default function ProjectsWrapper() {
  return (
    <div className="relative flex-1">
      <ProjectsSec1 />
      <ShowreelSec />
      <MayaModelSec variant="white" />
      <AfterEffectSec />
      <AiVideoSec />
      <ProjectsSec4 />
    </div>
  );
}