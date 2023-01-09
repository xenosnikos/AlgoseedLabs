import React from "react";
import cn from "classnames";
import { Window, TitleBar } from "react-desktop/macOs";

type props = {
  title: string,
  width: number,
  height: number,
  body: React.ReactNode | HTMLElement,
  zIndex: number,
}

const WindowComponent: React.FC<props> = ({
  title,
  width,
  height,
  body,
  zIndex
}) => {
  return (
    <div
      className="absolute left-20 top-5"
      style={{zIndex: zIndex}}
    >
      <TitleBar
        controls
        title={title}
      />
      <Window
        chrome
        width={width}
        height={height}
        className="relative shadow-none overflow-x-hidden overflow-y-scroll"
      >
        {body}
      </Window>
    </div>

  )
}

export default WindowComponent