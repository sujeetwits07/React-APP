import React from "react";
import { Abody, Amain, Heading1, Heading2 } from "../components/styled/css";
import Navbar from "../components/dashboard/navbar/nav";
import Footer from "../components/dashboard/footer/foot";

function About() {
  return (
    <>
      <Navbar />
      <Abody>
        <Amain>
          <Heading1>
            <h1>
              Your Technology Partner for Software Innovation and Market-Leading
              Solutions
            </h1>
            <p>
              With our brainstorming sessions, we take you through the path of
              product conceptualization, the very first blueprint to transform
              your idea into a successful digital product.
            </p>
          </Heading1>
          <Heading2>
            <h2>(1) Faker</h2>
            <p>
              The term ‘Faker’ is synonymous with mock data generation, given
              that there are numerous Faker data mocking libraries for different
              programming languages (e.g., NodeJS, Ruby, PHP, Perl). The Faker
              library featured here is the one under the Python version. Faker
              is a Python library that helps you generate fake data. From the
              documentation, we can see that it can be easily installed the
              following command: pip install Faker Once installed, we
              instantiate a Faker class object and call the various methods to
              generate the type of mock data we want:
            </p>
          </Heading2>
        </Amain>
      </Abody>
      <Footer />
    </>
  );
}
export default About;
