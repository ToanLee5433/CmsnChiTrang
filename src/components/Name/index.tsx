import { SetStateAction, forwardRef, useCallback, useEffect } from "react";

interface InputProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  shareMode: boolean;
  playing: boolean;
  run: boolean;
  showBackground?: boolean;
}

export const Name: React.FC<React.HTMLProps<HTMLInputElement> & InputProps> =
  forwardRef(
    (
      { name, setName, shareMode, playing, run, showBackground, ...rest }: InputProps,
      ref: React.LegacyRef<HTMLInputElement>
    ) => {
      console.log("🚀 ~ playing:", playing);
      console.log("🚀 ~ shareMode:", shareMode);
      const onChange = useCallback(
        (e: { target: { value: SetStateAction<string> } }) => {
          setName(e.target.value);
          window.history.pushState({}, "", `?name=${e.target.value}`);
        },
        [setName]
      );

      useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const nameParam = urlParams.get("name");
        if (nameParam !== null) {
          setName(nameParam);
        }
      }, [setName]);

      return (
        <div
          style={{
            position: "absolute",
            top: "25%",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            justifyContent: "center",
            width: "100dvw",
            zIndex: 40,
          }}
        >
          <input
            id="name"
            {...{
              ref,
              style: {
                fontFamily: "Montserrat",
                fontWeight: "bold",
                fontSize: "2rem",
                color: "#f0e4d0",
                opacity: 0.9,
                border: 0,
                outline: 0,
                backgroundColor: "#000000",
                width: 400,
                              ...(shareMode || playing || showBackground
                ? {
                    appearance: "none",
                    backgroundColor: "transparent",
                    textAlign: "center",
                    display: name.length > 0 ? "block" : "none",
                    fontSize: "3rem",
                    color: "#FFD700",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                    fontWeight: "bold",
                  }
                : {}),
              },
              value: name,
              onChange,
              disabled: shareMode || playing || run || showBackground,
              readOnly: shareMode || playing || run || showBackground,
              spellCheck: false,
              autoFocus: true,
              placeholder: "Enter your name",
              ...rest,
            }}
          />
        </div>
      );
    }
  );
