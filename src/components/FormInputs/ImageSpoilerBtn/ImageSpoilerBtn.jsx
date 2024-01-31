import React from "react";
import { FileImageOutlined } from "@ant-design/icons";

const ImageSpoilerBtn = ({ imageSpoilerStatus, setImageSpoilerStatus }) => {
  const handleImageSpoiler = () => {
    if (imageSpoilerStatus) {
      setImageSpoilerStatus(false);
    } else {
      setImageSpoilerStatus(true);
    }
  };
  return (
    <td>
      <button
        onClick={() => handleImageSpoiler()}
        className="custom-table__action-btn"
        //disabled={!editedRow}
      >
        <FileImageOutlined style={{ fontSize: "13px", color: "#646464" }} />
      </button>
    </td>
  );
};

export default ImageSpoilerBtn;
