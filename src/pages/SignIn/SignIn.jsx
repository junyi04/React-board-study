/** @jsxImportSource @emotion/react */
import { FcGoogle } from "react-icons/fc";
import AuthInput from "../../components/AuthInput/AuthInput";
import * as s from "./styles";
import { SiNaver } from "react-icons/si";
import { RiKakaoTalkFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SignIn() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onClickSignUpHandler = () => {
    navigate("/auth/signUp");
  };

  const onClickSignInHandler = () => {
    console.log(userName, password);
    if (userName.trim().length === 0 || password.trim().length === 0) {
      alert("아이디 또는 비밀번호를 입력해주세요.");
      return;
    } else {
      // 로그인 API 요청 보내기
    }
  }

  return (
    <div css={s.container}>
      <h1>로그인</h1>
      <div css={s.box}>
        <div css={s.inputBox}>
          <AuthInput
            type={"text"}
            placeholder={"아이디"}
            state={userName}
            setState={setUserName}
          />
          <AuthInput
            type={"password"}
            placeholder={"비밀번호"}
            state={password}
            setState={setPassword}
          />
        </div>
        <div css={s.signInBtnBox}>
          <button onClick={onClickSignUpHandler}>회원가입</button>
          <button onClick={onClickSignInHandler} style={{ backgroundColor: "#000", color: "#fff"}}>로그인</button>
        </div>
        <div css={s.oauthBtnBox}>
          <button
            className="google"
            style={{ backgroundColor: "#fff", border: "1px solid #eee"}}>
            <FcGoogle size={18} />
            <span>Google 로그인</span>
          </button>
          <button
            className="naver"
            style={{ backgroundColor: "#03C75A", color: "#fff"}}>
              <SiNaver size={13} />
              <span>네이버 로그인</span>
          </button>
          <button
            className="kakao"
            style={{ backgroundColor: "#FEE500"}}>
            <RiKakaoTalkFill size={20} />
            <span>카카오 로그인</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;