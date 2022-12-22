import React, {useState} from "react";
import Draggable from "react-draggable";

type props = {
  title: string
  icon: string,
  x: number,
  y: number,
  onStop: Function
}

const FolderShortcutComponent: React.FC<props> = ({
  title,
  icon,
  x,
  y,
  onStop
}) => {

  const handleDrag = (e:any, ui:any) => {
    e.preventDefault();
  }

  return (
    <Draggable
      defaultPosition={{x, y}}
      position={{x, y}}
      bounds="body"
      onDrag={handleDrag}
      onStop={(e, data) => {
        onStop(data);
      }}
    >
      <div className="flex items-center flex-col">
        <img
          src={icon}
          alt={`${title} icon`}
        />
        <div>
          {title}
        </div>
      </div>
    </Draggable>
  )
}

export default FolderShortcutComponent