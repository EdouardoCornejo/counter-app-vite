import { FC } from "react";
import PropTypes from 'prop-types'

interface HelloWorldAppProps {
  message: string;
  subTitle: number;
}

const HelloWorldApp: FC<HelloWorldAppProps> = ({ message, subTitle }) => {
  return (
    <>
      <h1>{message}</h1>
      <h2>{subTitle +1}</h2>
    </>
  );
};

export default HelloWorldApp;
