import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useRequest from "../../hooks/useRequest";
import { Button, Input } from "../Generic";
import { Content } from "./style";
import { message } from "antd";

export const Signin = () => {
  const request = useRequest();
  const [body, setBody] = useState({});
  const navigate = useNavigate();

  const onChange = ({ target: { value, placeholder } }) => {
    setBody({
      ...body,
      [placeholder]: value,
    });
  };

  const info = () => {
    message.info("Successfully logged in");
  };

  const onSubmit = async () => {
    // fetch(`${REACT_APP_BASE_URL}/public/auth/login`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(body),
    // })
    //   .then((res) => res.json())
    //   .then((res) => console.log(res, "err"));

    request({ url: `/public/auth/login`, method: "POST", body, me: true }).then(
      (res) => {
        if (res?.authenticationToken) {
          navigate("/home");
          localStorage.setItem("token", res?.authenticationToken);
        }
        info();
      }
    );
  };

  return (
    <Content>
      <div className="subTitle">Sign in</div>
      <Input onChange={onChange} placeholder="email" type="email" />
      <Input onChange={onChange} placeholder="password" type="password" />
      <Button onClick={onSubmit} width="%">
        Log in
      </Button>
    </Content>
  );
};

export default Signin;
