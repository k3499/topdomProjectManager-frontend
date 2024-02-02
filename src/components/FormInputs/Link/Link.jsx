import React, { useEffect } from "react";
import { ExportOutlined } from "@ant-design/icons";

let floorCategory;

const Link = ({ row }) => {
  useEffect(() => {
    row.floor === 1
      ? (floorCategory =
          "/stroitelstvo-dvuhehtazhnyh-domov-pod-klyuch-proekty-i-ceny/")
      : (floorCategory =
          "/stroitelstvo-odnoehtazhnyh-domov-pod-klyuch-proekty-i-ceny/");
  });
  return (
    <td>
      <a
        href={
          "https://xn--d1aqebdq.xn--p1ai" +
          floorCategory +
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
