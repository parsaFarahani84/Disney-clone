import React from "react";
import styled from "styled-components";

function Detail() {
  return (
    <Container>
      <BackGround>
        <img src="/bao.jpg" />
      </BackGround>
      <ImageTitle>
        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspecRatio=1.78" />
      </ImageTitle>

      <Controls>
        <PlayButton>
          <img src="/play-icon-black.png" />
          <span>PLAY</span>
        </PlayButton>

        <TrailerButton>
          <img src="/play-icon-white.png" />
          <span>Trailer</span>
        </TrailerButton>

        <AddButton>
          <span>+</span>
        </AddButton>

        <GroupWatchButton>
          <img src="/group-icon.png" />
        </GroupWatchButton>
      </Controls>
      <SubTitle>2018 . 7m . Family, Fantasy, Kids, Animation</SubTitle>
      <Description>
        A Chinese mom who's sad when her son leaves homegets another chance at
        motherhood when one of her dumplings springs to life. But she finds that
        nothing stays cute and small forever
      </Description>
    </Container>
  );
}

export default Detail;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  max-width: 760px;
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;

const AddButton = styled.button`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  background-color: rgba(0, 0, 0, 0.6);
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;

  span {
    font-size: 25px;
    color: white;
  }
`;
const GroupWatchButton = styled(AddButton)`
  background: rgb(0, 0, 0);
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  padding: 0px 24px;
  margin-right: 22px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb(249, 249, 249);
  border: none;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;

const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
  &:hover {
    color: black;
  }
`;

const ImageTitle = styled.div`
  height: 30vh;
  width: 35vh;
  min-height: 170px;
  min-width: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Container = styled.div`
  max-height: 100vw;
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const BackGround = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
