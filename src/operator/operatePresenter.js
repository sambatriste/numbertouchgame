import React from "react";

export function OperatePresenter(props) {
  return (
    <>
      <button onClick={props.onGameStart}>start</button>
      <button onClick={props.onRestartGame}>retry</button>
    </>
  );
}
