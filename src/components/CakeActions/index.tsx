import { Fragment } from "react/jsx-runtime";
import {
  TbFlame,
} from "react-icons/tb";
import { useCallback } from "react";

const buttonStyle = {
  color: "#ffffff",
  opacity: 0.9,
  borderWidth: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#FF6B35",
  width: "60px",
  height: "60px",
  borderRadius: "50%",
  fontSize: "2rem",
  boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
  cursor: "pointer",
  transition: "all 0.3s ease",
};

export const CakeActions = ({
  start,
  candleVisible,
}: // eslint-disable-next-line @typescript-eslint/no-explicit-any
any) => {
  const actions = useCallback(() => {
    return (
      <Fragment>
        {!candleVisible ? (
          <div style={{ textAlign: "center" }}>
            <button id="start" style={buttonStyle} onClick={start}>
              {/* Light Candle */}
              <TbFlame />
            </button>
            <div style={{ 
              color: "#ffffff", 
              marginTop: "8px", 
              fontSize: "14px",
              textShadow: "1px 1px 2px rgba(0,0,0,0.8)"
            }}>
              Thắp nến
            </div>
          </div>
        ) : null}
      </Fragment>
    );
  }, [candleVisible, start]);

  return <div style={{ display: "flex", gap: "10px" }}>{actions()}</div>;
};
