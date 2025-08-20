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
  border: 1px solid #dbdbdb;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 30px;
  border-radius: 8px;
`;

export const inputBox = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  & > input {
    outline: none;
    border: 1px solid #dbdbdb;
    border-radius: 8px;
    padding: 10px 15px;
    font-size: 16px;
    color: #333;
    box-sizing: border-box;
  }
`;