import React from "react";
import { Link } from "react-router-dom";
import { Body, Section, Para, Content, But } from "./styled/css";
const Login = () => {
  return (
    <>
      <Body>
        <Section>
          <form action="">
            <Para>
              <h1>WIL</h1>
            </Para>
            <Content>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter your Email"
                  required
                  autoComplete="off"
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="text"
                  name="password"
                  id="password"
                  placeholder="Enter Your Password"
                  required
                  autoComplete="off"
                />
              </div>
            </Content>
            <But>
              <button type="reset">Reset</button>
              <Link to="/main">
                <button type="submit">Login</button>
              </Link>
            </But>
          </form>
        </Section>
      </Body>
    </>
  );
};

export default Login;


