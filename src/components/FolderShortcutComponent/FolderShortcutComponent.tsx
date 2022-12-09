import React, {useState} from "react";
import Draggable from "react-draggable";

type props = {
  title: string
  icon: string,
}

const FolderShortcutComponent: React.FC<props> = ({
  title,
  icon
}) => {
  return (
    <Draggable
      defaultPosition={{x: 0, y: 0}}
      bounds="body"
      onDrag={event=>event.preventDefault()}
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