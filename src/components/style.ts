import styled from "styled-components";

export const Title = styled.div`
  @font-face {
    font-family: "GMARKETSANSTTFBOLD.TTF";
    src: url("GMARKETSANSTTFBOLD.TTF") format("truetype");
  }

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 10px;
  left: 0;
  width: 30vw;
  height: 10vh;
  position: fixed;
  z-index: 10;
  font-family: "GMARKETSANSTTFBOLD.TTF";
  color: white;
  text-shadow: 0 0 20px white;

  background: rgba(22, 22, 22, 0.6);
  border-radius: 10px;
  padding: 5px;
  --webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 0 30px rgb(30, 30, 30);

  h1 {
    margin: 0;
    font-size: 30px;
  }

  @media (max-width: 800px) {
    h1 {
      font-size: 20px;
    }
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 12px;
    }
  }
`;

type IDescription = {
  title: string;
};

export const Description = styled.div<IDescription>`
  @font-face {
    font-family: "GMARKETSANSTTFBOLD.TTF";
    src: url("GMARKETSANSTTFBOLD.TTF") format("truetype");
  }

  visibility: ${({ title }) => (title === "" ? "hidden" : "visible")};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 10px;
  padding: 10px;
  top: 0;
  right: 0;
  /* width: 30vw; */
  /* height: 30vh; */
  position: fixed;
  z-index: 11;
  font-family: "GMARKETSANSTTFBOLD.TTF";
  color: white;

  background: rgba(22, 22, 22, 0.6);
  border-radius: 10px;
  padding: 5px;
  --webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 0 30px rgb(30, 30, 30);

  h1 {
    margin: 10px;
    font-size: 30px;
    text-shadow: 0 0 20px white;
  }

  p {
    width: 100%;
    margin: 3px;
    font-size: 16px;
  }

  @media (max-width: 800px) {
    h1 {
      font-size: 20px;
    }

    p {
      font-size: 12px;
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 5px;
  width: 100vw;
  height: 10vh;
  position: fixed;
  z-index: 12;
  font-family: "GMARKETSANSTTFBOLD.TTF";

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 9vh;
    background: rgba(22, 22, 22, 0.6);
    border-radius: 10px;
    padding: 5px;
    --webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    box-shadow: 0 0 30px rgb(30, 30, 30);
    color: white;

    h1 {
      margin: 10px;
      font-size: 30px;
      text-shadow: 0 0 20px white;
    }

    p {
      width: 100%;
      margin: 3px;
      font-size: 16px;
    }

    @media (max-width: 800px) {
      h1 {
        font-size: 20px;
      }

      p {
        font-size: 12px;
      }
    }
  }
`;

export const SmallTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 800;
  position: relative;
  height: 30px;
  width: 200px;

  background: rgba(22, 22, 22, 0.6);
  border-radius: 10px;
  padding: 5px;
  --webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 0 30px rgb(30, 30, 30);
  border-radius: 15px;

  p {
    font-size: 0.8rem;
    transition: all 0.3s ease-in;
    cursor: pointer;
    color: white;
  }
`;
