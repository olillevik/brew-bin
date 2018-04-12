import React, { Fragment } from "react";
import "./Heading.css";
import logo from "../logo.svg";
import { Header, Image } from "semantic-ui-react";
import withLogging from "../withLogging";

const Heading = props => (
  <Fragment className="heading">
    <Header className="App-header" inverted as="h1">
      <Image src={logo} className="App-logo" alt="logo" />
      Brew bin
    </Header>
  </Fragment>
);

export default withLogging(Heading);
