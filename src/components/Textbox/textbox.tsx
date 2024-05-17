import { useTheme } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { getSuggestiveEnding } from "./../../mock";

const Textbox = () => {
  const ref = useRef<any>();
  const [input, setInput] = useState("");
  const [fetching, setFetching] = useState(false);
  const [suggestiveText, setSuggestiveText] = useState("");
  const theme = useTheme();

  const setCursor = () => {
    const range = document.createRange();
    const selection: any = window.getSelection();
    range.setStart(ref.current, ref.current.childNodes.length);
    range.collapse(true);
    selection.removeAllRanges();
    selection.addRange(range);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (input.split(" ").length > 1) {
        setFetching(true);
        setSuggestiveText("fetching suggestions...");
        const response: any = await getSuggestiveEnding();
        setSuggestiveText(response);
        setFetching(false);
      }
    };
    fetchData();
  }, [input]);

  const handleInput = (e: any) => {
    setInput(e.target.innerText);
  };

  const focusOnInput = () => {
    ref.current.focus();
  };

  const handleKeyDown = (e: any) => {
    const key = e.key;
    switch (key) {
      case "Tab":
        e.preventDefault();
        if (!fetching && ref.current) {
          ref.current.innerText += suggestiveText + " ";
          setCursor();
        }
        break;
      case "Enter":
        setInput((input) => (input += "\n"));
        break;
      case "Backspace":
        break;
    }
  };

  return (
    <div
      onClick={focusOnInput}
      style={{
        border: "1px solid #212121",
        width: "48rem",
        height: "13rem",
        borderColor: "#c1c1c1",
        borderRadius: theme.shape.borderRadius,
        padding: "1rem",
      }}
    >
      <span
        style={{ paddingRight: 3 }}
        ref={ref}
        onInput={handleInput}
        onKeyDown={handleKeyDown}
        contentEditable={true}
        suppressContentEditableWarning={true}
      />
      <span style={{ color: "gray", fontStyle: "italic" }}>
        {suggestiveText + " "}
        {Boolean(suggestiveText && !fetching) && (
          <span
            style={{
              fontStyle: "normal",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <img height={20} width={20} src="/tab.png" alt="" />
          </span>
        )}
      </span>
    </div>
  );
};

export default Textbox;
