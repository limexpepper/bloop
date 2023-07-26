import { useEffect } from "react";

function Summary({ filteredItem }) {
  return (
    <div>
      <div className="tag-wrapper">
        <div className="type">{filteredItem.type.charAt(0).toUpperCase() + filteredItem.type.slice(1)}</div>
      {/*         
        - The + operator is used to concatenate two strings
        - filteredItem.type.charAt(0): This part extracts the first character of the filteredItem.type string.
        - .toUpperCase(): This method is used to convert the first character to uppercase. For example, if the first character is 'a', it becomes 'A'.
        - filteredItem.type.slice(1): This part extracts the rest of the string starting from the second character. It effectively removes the first character from the original string.
        
        As such, the result is from "mall" to "Mall" */}
        
        
        <div
          className={
            filteredItem.avgToiletRating === "bronze"
              ? "rating-tag-bronze"
              : filteredItem.avgToiletRating === "silver"
              ? "rating-tag-silver"
              : filteredItem.avgToiletRating === "gold"
              ? "rating-tag-gold"
              : "rating-tag-null"
          }
        >
          {filteredItem.avgToiletRating === "NULL"
            ? "Not yet rated"
            : filteredItem.avgToiletRating}
        </div>
      </div>
      <div className="summaryInfo">
        <h1>{filteredItem.location}</h1>
        <p>{filteredItem.address}</p>
      </div>
    </div>
  );
}

export default Summary;
