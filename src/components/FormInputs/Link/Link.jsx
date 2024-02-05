import React, { useEffect } from "react";
import { ExportOutlined } from "@ant-design/icons";

const Link = ({ row, link }) => {
  return (
    <td>
      <a
        href={
          "https://xn--d1aqebdq.xn--p1ai" +
          link +
          "proekt-topdom-" +
          row.floor +
          "-" +
          row.number +
          "-" +
          row.sq +
          "-kv-m"
        }
        target="_blank"
        className="custom-table__action-btn"
      >
        <ExportOutlined style={{ fontSize: "13px", color: "#646464" }} />
      </a>
    </td>
  );
};

export default Link;
