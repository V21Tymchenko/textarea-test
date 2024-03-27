import styled from "styled-components";

export const TextArea = styled.textarea`
  display: block;
  padding: 20px;
  min-width: 800px;
  min-height: 300px;
  margin: 0 auto 20px;

  border: 1px solid #121212;
  border-radius: 16px;
  font-size: 16px;

  resize: none;

  &:hover,
  &:focus {
    border-color: #0c45ec;
    outline: none;
  }
`;

export const ResponseContainer = styled.div`
  max-width: 800px;
  padding: 20px;
  margin: 0 auto;

  border: 1px solid #121212;
  border-radius: 16px;
  background-color: #ffffff;
  font-size: 16px;
  box-shadow: 3px 3px 10px 5px #0c45ec;
`;
export const ResponseText = styled.p`
  word-break: break-all;
`;
