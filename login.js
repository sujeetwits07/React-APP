import React from "react";
import { Body, Section, Para, Containt, But } from "./styled/login";
const Login = () => {
  return (
    <>
      <Body>
        <Section>
          <form action="">
            <Para>
              <h1>WIL</h1>
            </Para>
            <Containt>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter your Email"
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="text"
                  name="password"
                  id="password"
                  placeholder="Enter Your Password"
                />
              </div>
            </Containt>
            <But>
              <button type="reset">Reset</button>
              <button type="submit">Login</button>
            </But>
          </form>
        </Section>
      </Body>
    </>
  );
};

export default Login;
