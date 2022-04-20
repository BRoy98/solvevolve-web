import Tile, { TileBackground, TileContent, TileWrapper } from "./tile";
import { WorkBackground, WorkContainer, WorkLeft, WorkRight } from "./work";

const Works: React.FC = () => {
  return (
    <TileWrapper numOfPages={3}>
      <TileBackground>
        <WorkBackground />
      </TileBackground>
      <TileContent>
        <Tile
          page={0}
          renderContent={({ progress }) => (
            <WorkContainer>
              <WorkLeft progress={progress}>
                <div className="text-xl">We built</div>
                <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                  The Reckorner
                </div>
              </WorkLeft>
              <WorkRight progress={progress}>
                <span>Foo {progress}</span>
              </WorkRight>
            </WorkContainer>
          )}
        ></Tile>
        <Tile
          page={1}
          renderContent={({ progress }) => (
            <WorkContainer>
              <WorkLeft progress={progress}>
                <div className="text-xl">We helped tracking</div>
                <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                  Human Posture
                </div>
              </WorkLeft>
              <WorkRight progress={progress}>
                <span>Bar {progress}</span>
              </WorkRight>
            </WorkContainer>
          )}
        ></Tile>
        <Tile
          page={2}
          renderContent={({ progress }) => (
            <WorkContainer>
              <WorkLeft progress={progress}>
                <div className="text-xl">We made</div>
                <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                  The FirmFriend
                </div>
              </WorkLeft>
              <WorkRight progress={progress}>
                <span>Zee {progress}</span>
              </WorkRight>
            </WorkContainer>
          )}
        ></Tile>
      </TileContent>
    </TileWrapper>
  );
};

export default Works;
