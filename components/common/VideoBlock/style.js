import styled from 'styled-components'

export const VideoSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30.94em;
  height: 17.03em;
  background-color: #9b9b9b;
  font-size: 2em;
  margin: 1.56em auto 0;
  position: relative;
  z-index: 1;
  &__play {
    width: 2.5em;
    height: 2.5em;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -1.25em;
    margin-left: -1.25em;
    img {
        width: 100%;
    }
}
  @media (max-width: 900px) {
    width: 100%;
  }
  @media (max-width: 480px) {
    width: 100%;
    font-size: 1em;
  }
  iframe {
    width: 100% !important;
    height: 100% !important;
  }
`;