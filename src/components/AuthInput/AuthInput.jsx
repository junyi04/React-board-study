/** @jsxImportSource @emotion/react */
import * as s from "./styles";

function AuthInput({ type, placeholder, state, setState }) {
  const handleChange = (e) => {
    setState(e.target.value);
  };

  return (
    <>
      <input
        css={s.input}
        type={type}
        placeholder={placeholder}
        value={state}
        onChange={handleChange} />
    </>
  );
}

export default AuthInput;