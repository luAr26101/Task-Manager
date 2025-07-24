import React from "react";
import "./Badge.css";

function Badge(props) {
  const getBadgeStyle = function (status) {
    let className;
    switch (status) {
      case "Todo":
        className = "badge-complete";
        break;
      case "In Progress":
        className = "badge-in-progress";
        break;
      case "Pending":
        className = "badge-pending";
        break;
      case "Complete":
        className = "badge-completed";
        break;
      default:
        className = "";
        break;
    }
    return className;
  };
  return (
    <div className={`badge ${getBadgeStyle(props.status)}`}>
      <p>{props.status}</p>
    </div>
  );
}

export default Badge;
