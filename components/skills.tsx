import { useContext, useRef } from "react";
import style from "../styles/skills.module.css";
import { ScrollContext } from "../utils/scroll-observer";

const opacityForBlock = (sectionProgress: number, blockNo: number) => {
  const progress = sectionProgress - blockNo;
  if (progress >= 0 && progress <= 1) return 1;
  return 0.2;
};

const Skills: React.FC = () => {
  const { scrollY } = useContext(ScrollContext);
  const refContainer = useRef<HTMLDivElement>(null);

  let numOfPage = 3;
  let progress = 0;

  if (refContainer.current) {
    const { clientHeight, offsetTop } = refContainer.current;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH
      ) / clientHeight;
    progress = Math.min(
      numOfPage - 0.5,
      Math.max(0.5, Math.max(0.5, percentY * numOfPage))
    );
  }

  return (
    <div ref={refContainer} className="bg-black text-white">
      <div
        className="min-h-screen max-w-5xl mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-36 
      flex flex-col justify-center items-center text-4xl md:text-6xl lg:text-7xl 
      tracking-tight font-semibold"
      >
        <div className="leading-[1.15]">
          <div
            className={style.skillText}
            style={{
              opacity: opacityForBlock(progress, 0),
            }}
          >
            We deliver the best of the best.
          </div>
          <span
            className={`${style.skillText} inline-block after:content-['_']`}
            style={{
              opacity: opacityForBlock(progress, 1),
            }}
          >
            Our team has delivered production ready hardwares in a week.
          </span>
          <span
            className={`${style.skillText} inline-block`}
            style={{
              opacity: opacityForBlock(progress, 2),
            }}
          >
            We&apos;re maintaining the best of the best in the industry.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
