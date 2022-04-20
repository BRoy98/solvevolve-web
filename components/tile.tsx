import React, { useRef } from "react";
import { ScrollContext } from "../utils/scroll-observer";

interface WrapperProp {
  numOfPages: number;
  children?: React.ReactNode;
}

interface TileContextValue {
  numOfPages: number;
  currentPage: number;
}

export const TileContext = React.createContext<TileContextValue>({
  numOfPages: 0,
  currentPage: 0,
});

export const TileWrapper: React.FC<WrapperProp> = ({
  numOfPages,
  children,
}) => {
  const { scrollY } = React.useContext(ScrollContext);
  const refContainer = React.useRef<HTMLDivElement>(null);
  let currentPage = 0;

  if (refContainer.current) {
    const { clientHeight, offsetTop } = refContainer.current;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH
      ) / clientHeight;

    currentPage = percentY * numOfPages;
  }

  return (
    <TileContext.Provider value={{ numOfPages, currentPage }}>
      <div ref={refContainer} className="relative bg-black text-white" style={{
        height: `${100 * numOfPages}vh`,
      }}>
        {children}
      </div>
    </TileContext.Provider>
  );
};

export const TileBackground: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => <div className="absolute h-full w-full">{children}</div>;

export const TileContent: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => (
  <div className="sticky top-0 h-screen overflow-hidden">{children}</div>
);

interface Props {
  page: number;
  renderContent: (props: { progress: number }) => any;
  children?: React.ReactNode;
}

const Tile: React.FC<Props> = ({ page, renderContent }) => {
  const { numOfPages, currentPage } = React.useContext(TileContext);
  const refContainer = useRef<HTMLDivElement>(null);

  const progress = Math.max(0, currentPage - page);
  let opacity = Math.min(1, Math.max(0, progress * 4));

  if (progress > 0.85 && page < numOfPages - 1) {
    opacity = Math.max(0, (1.0 - progress) * 4);
  }

  return (
    <div
      ref={refContainer}
      className="absolute top-0 w-full"
      style={{
        pointerEvents: progress >= 0 || progress >= 1 ? "none" : undefined,
        opacity,
      }}
    >
      {renderContent({ progress })}
    </div>
  );
};

export default Tile;
