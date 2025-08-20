import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Write from "../../pages/Write/Write";
import AuthRouter from "../AuthRouter/AuthRouter";
import Board from "../../pages/Board/Board";

// Home 페이지와 Write 페이지를 설정
// router를 통해 페이지를 넘어감
function MainRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/board" element={<Board />} />
        <Route path="/write" element={<Write />} />
        {/* 중첩 라우터를 통해 로그인 로그아웃 구현 */}
        <Route path="/auth/*" element={<AuthRouter />} />
      </Routes>
    </>
  );
}

export default MainRouter;