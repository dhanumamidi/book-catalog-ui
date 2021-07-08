import React, { FunctionComponent } from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  margin: 15px 0;
  position: relative;

  & > input {
    border: 1px solid #eee;
    border-radius: 0.25rem;
    background-color: transparent;
    outline: none;
    padding: 12px 3px 12px 15px;
    font-size: 16px;
    transition: all 0.2s ease;
    z-index: 500;
  }
  & > label {
    color: #757575;
    position: absolute;
    top: 15px;
    left: 15px;
    transition: all 0.2s ease;
    z-index: 500;
  }
`;

interface Props {
  value: string | number | readonly string[] | undefined;
  type: string | undefined;
  label: string | null | undefined;
  onChange: (arg0: string) => void;
}

const Input: FunctionComponent<Props> = ({ value, type, label, onChange }) => {
  const renderLabel = () => label && <label>{label}</label>;

  return (
    <InputContainer>
      {renderLabel()}
      <input
        value={value}
        type={type}
        onChange={(e) => onChange(e.target.value)}
      />
    </InputContainer>
  );
};

export default Input;
