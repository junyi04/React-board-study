import { css } from "@emotion/react";

export const container = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const box = css`
  width: 400px;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 30px;
  gap: 25px;
`;

export const inputBox = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const btnBox = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  & > button {
    cursor: pointer;
    width: 100%;
    padding: 10px 30px;
    border: none;
    border-radius: 8px;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1E2B67;
    color: #fff;
  }
`;

export const errorBox = css`
  & > ul {
    list-style: disc;

    & > li {
      color: #dc3545;
      font-size: 13px;
    }
  }
`;