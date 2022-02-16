import styled from "styled-components";

const Body = styled.div`
  background-color: aliceblue;
  display: flex;
  height: 90vh;
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
      border-radius:8px;
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
  background-color: skyblue;
  color:crimson
  boxsize: 30px 20px;
  }
`;

export { Body, Section, Para, Containt, But };
