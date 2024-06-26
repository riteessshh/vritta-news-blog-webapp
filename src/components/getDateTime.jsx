import React from "react";

function GetDateTime({ dateTimeString }) {
  //   const dateTimeString = "2024-06-18T17:46:54Z";

  const dateObject = new Date(dateTimeString);

  const formattedDate = dateObject.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const formattedTime = dateObject.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true, // Use 12-hour format (optional)
  });

  if (dateTimeString) {
    return (
      <div>
        <p>
          Dated on: {formattedDate} {formattedTime}
        </p>
      </div>
    );
  }
}

export default GetDateTime;
