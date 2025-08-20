/** @jsxImportSource @emotion/react */
import { LuLogIn, LuUserRoundPlus } from "react-icons/lu";
import * as s from "./styles";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const onClickNavHandler = (path) => {
    navigate(path)
  };

  return (
    <div css={s.header}>
      <div onClick={() => onClickNavHandler("/")}>
        BOARD
      </div>
      <div>
        <ul>
          <li>
            {/* 게시판을 클릭하면 Board 페이지로 넘어감 */}
            <Link to={"/board"}>게시판</Link>
          </li>
          <li>
            {/* 글쓰기를 클릭하면 Write 페이지로 넘어감 */}
            <Link to={"/write"}>글쓰기</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li
            css={s.headerIcon}
            onClick={() => onClickNavHandler("/auth/signIn")}>
            <LuLogIn />
          </li>
          <li
            css={s.headerIcon}
            onClick={() => onClickNavHandler("/auth/signUp")}>
            <LuUserRoundPlus />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;