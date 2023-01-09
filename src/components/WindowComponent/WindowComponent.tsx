import React, {useEffect} from "react";
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
    <Window
      chrome
      width={width}
      height={height}
      className="absolute left-0 top-0 shadow-none overflow-y-scroll"
      style={{zIndex: zIndex}}
    >
      <TitleBar
        controls
        title={title}
      />
      {body}
    </Window>
  )
}

export default WindowComponent