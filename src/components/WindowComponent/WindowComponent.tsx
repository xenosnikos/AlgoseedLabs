import React from "react";
import { Window, TitleBar } from "react-desktop/macOs";

type props = {
  title: string,
  width: number,
  height: number,
  zIndex: number,
}

const WindowComponent: React.FC<props> = ({
  title,
  width,
  height,
  zIndex
}) => {
  return (
    <Window
      chrome
      width={width}
      height={height}
      className="absolute left-0 top-0 shadow-none"
      style={{zIndex: zIndex}}
    >
      <TitleBar
        controls
        title={title}
      />
    </Window>
  )
}

export default WindowComponent