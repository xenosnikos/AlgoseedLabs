import React from "react";
import cn from "classnames";
import { Window, TitleBar } from "react-desktop/macOs";
import useScreenSize from "../../hooks/screenSize";

type props = {
  title: string,
  width: number,
  height: number,
  isFullWindow: boolean,
  body: React.ReactNode | HTMLElement,
  zIndex: number,
  onCloseClick: Function,
  onMinimizeClick: Function,
  onResizeClick: Function
}

const WindowComponent: React.FC<props> = ({
  title,
  width,
  height,
  isFullWindow,
  body,
  zIndex,
  onCloseClick,
  onMinimizeClick,
  onResizeClick
}) => {
  const [screenWidth, screenHeight] = useScreenSize();

  return (
    <div
      className={cn("absolute", isFullWindow ? "left-0 top-0" : `left-[${(screenWidth - width) / 2}px]`)}
      style={{
        zIndex: zIndex,
        left: isFullWindow ? 0 : (screenWidth - width) / 2,
        top: isFullWindow ? 0 : (screenHeight - height) / 2
      }}
    >
      <TitleBar
        controls
        title={title}
        onCloseClick={onCloseClick}
        onMinimizeClick={onMinimizeClick}
        onResizeClick={onResizeClick}
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