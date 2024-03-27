import { useState } from "react";
import parse from "html-react-parser";
import {
  ResponseContainer,
  ResponseText,
  TextArea,
} from "./TextareaComponent.styled";

function TextareaComponent() {
  const [text, setText] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputText = event.target.value;
    if (inputText.trim() === "") {
      return;
    }

    const latinRegex = /[^a-zA-Z]/g;

    const highlightedText = inputText.replace(
      latinRegex,
      '<span style="color: #0c45ec; font-weight: 600;">$&</span>'
    );

    setText(highlightedText);
  };

  return (
    <>
      <TextArea
        name="text"
        value={text.replace(/<\/?[^>]+(>|$)/g, "")}
        maxLength={1200}
        minLength={1}
        onChange={handleInputChange}
        placeholder="Введіть текст..."
      />
      {text.length > 0 && (
        <ResponseContainer>
          <ResponseText> {parse(text)}</ResponseText>
        </ResponseContainer>
      )}
    </>
  );
}

export default TextareaComponent;
