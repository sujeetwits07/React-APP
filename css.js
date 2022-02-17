import styled from "styled-components";

const Body = styled.div`
  background-image: url(https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?cs=srgb&dl=pexels-miguel-%C3%A1-padri%C3%B1%C3%A1n-255379.jpg&fm=jpg);
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Section = styled.div`
  font-family: Fantasy;
  display: flex;
  justify-content: center;
  width: 300px;
  height: 500px;
  border: 2px solid maroon;
  border-radius: 30px;
  background-image: url(https://wallpaperaccess.com/download/blur-phone-3967178);
  box-shadow: 10px 10px 10px 10px #4c4c4c;
`;

const Para = styled.div`
  color: deepskyblue;
  text-shadow: 1px 1px 2px black, 0 0 25px green, 0 0 5px lightgreen;
  padding-top: 1px;
  margin: 20px;
  border: 1px solid darkred;
  border-radius: 10px;
  background-image: url(https://wallpaperaccess.com/download/blur-phone-5246918);
`;

const Containt = styled.div`
  display: flex;
  font-family: "Outfit", sans-serif;
  flex-direction: column;
  width: 100%;
  height: 30%;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
  gap: 30px;
  div {
    display: flex;
    align-items: center;
    font-family: "Outfit", sans-serif;
    input {
      border-radius: 8px;
      background-color: gainsboro;
    }
  }
`;

const But = styled.div`
  font-family: "Outfit", sans-serif;
  display: flex;
  width: 100%;
  border-radius: 10px;
  padding-left: 70px;
  button {
    border-radius: 8px;
    background-color: steelblue;
    font-size: 13px;
    font-family: inherit;
    font-weight: bold;
    padding: 5px 5px 8px 5px;
    cursor: pointer;
  }
`;

const Nav = styled.div`
  display: flex;
  height: 10%;
  background-color: wheat;
  color: teal;
  justify-content: space-around;
  width: 100%;
`;

const List = styled.div`
  ul {
    display: flex;
    grid-gap: 50px;
    list-style-type: none;
    font-size: 14px;
    font-family: inherit;
    font-weight: bold;
    padding: 15px 0px 5px 0px;
    cursor: pointer;
    transition: 0.2s;
    -webkit-transition: 0.2s;
    -moz-transition: 0.2s;
    li:hover {
      color: red;
      transition: 0.1s;
      -webkit-transition: 0.1s;
      -moz-transition: 0.1s;
    }
  }
`;

const Logo = styled.div`
  display: flex;
  justify-content: start;
  color: steelblue;
  width: 70%;
  height: 10%;
`;
/* Footer Part */
const Foot = styled.div`
  display: flex;
  justify-content: space-around;
  height: 14.4vh;
  width: 100%;

  background-color: #070617;
`;

const Footlist = styled.div`
  ul {
    display: flex;
    grid-gap: 80px;
    list-style-type: none;
    color: #999999;
    font-size: 14px;
    font-family: inherit;
    font-weight: bold;
    padding: 40px 50px 8px 5px;
    cursor: pointer;
    transition: 0.2s;
    -webkit-transition: 0.2s;
    -moz-transition: 0.2s;
    li:hover {
      color: #ffffff;
      transition: 0.1s;
      -webkit-transition: 0.1s;
      -moz-transition: 0.1s;
    }
  }
`;

const Main = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 776px;
  background-image: url(https://unsplash.com/photos/6QnEf_b47eA/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8fHwxNjQ1MDc5OTUy&force=true);
`;
const Container = styled.div`
  margin-top: 200px;
  height: 300px;
  width: 400px;
  background-color: teal;
  h1 {
    color: lightcoral;
    margin-top: 110px;
  }
  p {
    color: lightsalmon;
  }
  box-shadow: 10px 10px 10px 10px;
`;

const Abody = styled.div`
  display: flex;
  height: 776px;
  background-image: url(https://unsplash.com/photos/yoHjVWXagHE/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjQ1MTAzMjkw&force=true);
`;

const Amain = styled.div``;

const Heading1 = styled.div`
  h1 {
    color: darkcyan;
  }
`;
const Heading2 = styled.div`
  h2 {
    display: flex;
    justify-content: left;
    color: mediumblue;
  }
`;

export {
  Body,
  Section,
  Para,
  Containt,
  But,
  Nav,
  Logo,
  List,
  Foot,
  Footlist,
  Main,
  Container,
  Abody,
  Amain,
  Heading1,
  Heading2,
};
