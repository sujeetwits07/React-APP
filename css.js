import styled from "styled-components";

const Body = styled.div`
  background-color: aliceblue;
  display: flex;
  height: 76.6vh;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Section = styled.div`
  font-family: Fantasy
  display: flex;
  justify-content: center;
  width: 300px;
  height: 500px;
  border: 2px solid lightcoral;
  border-radius: 30px;
  background-image: url(https://wallpaperaccess.com/download/blur-phone-3967178);
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
  height: 50%;
  margin-top: 80px;
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
 family: "Outfit", sans- display: flex;
  font-serif;
  width: 100%;
  height: 50%;
  margin-top: 20px;
  border-radius: 10px;
  padding-left: 62px;
  button{
  border-radius: 8px;
  background-color: steelblue;
    font-size: 13px;
    font-family: inherit;
    font-weight: bold;
    padding: 5px 2px 5px 2px;
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

export { Body, Section, Para, Containt, But, Nav, Logo, List, Foot, Footlist };
