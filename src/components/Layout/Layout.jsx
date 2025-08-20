/** @jsxImportSource @emotion/react */
import Header from "../Header/Header";
import * as s from "./styles";

// children이 Home 컴포넌트를 받고 있음.
// Header 밑에 Home 컴포넌트가 나타나게 위치함.
function Layout({ children }) {
  return (
    <div css={s.layout}>
      <Header />
      <div css={s.mainContianer}>{children}</div>
    </div>
  );
}

export default Layout;