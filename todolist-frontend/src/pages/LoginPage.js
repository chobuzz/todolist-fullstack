import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import api from "../utils/api";

import { Link } from "react-router-dom";

const LoginPage = ({ user, setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      if (email === "" || password === "") {
        setError("이메일과 비밀번호를 모두 입력하세요.");
      } else {
        //여기에서 로그인 로직 구현. 성공하면 다음 페이지로 리디렉션.
        //실패하면 다른 오류 메세지 설정.
        const response = await api.post("/user/login", { email, password });
        console.log("rrrrr", response);
        if (response.status === 200) {
          //유저정보 저장
          setUser(response.data.user);
          //sessionStorage에 토큰 저장
          sessionStorage.setItem("token", response.data.token);
          //토큰값을 api헤더에 저장하기 (api.body는 post에서만 유효하고 get에서는 활용하지 못하기 때문)
          api.defaults.headers["authorization"] =
            "Bearer " + response.data.token;
          setError("");
          navigate("/");
        } else {
          setError(response.message);
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <div className="display-center">
      {error && <div className="red-error">{error}</div>}
      <Form className="login-box" onSubmit={handleLogin}>
        <h1>로그인</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </Form.Group>
        <div className="button-box">
          <Button type="submit" className="button-primary">
            Login
          </Button>
          <span>
            계정이 없다면? <Link to="/register">회원가입 하기</Link>
          </span>
        </div>
      </Form>
    </div>
  );
};

export default LoginPage;
