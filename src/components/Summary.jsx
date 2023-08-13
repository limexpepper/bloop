import supabase from "../supabase";
import { useEffect, useState } from "react";

function Summary({ filteredItem }) {
  
  return (
    <div>
      <div className="type">
          {filteredItem.type.charAt(0).toUpperCase() +
            filteredItem.type.slice(1)}
      </div>
      <div className="stars-wrapper">
        {/*         
        - The + operator is used to concatenate two strings
        - filteredItem.type.charAt(0): This part extracts the first character of the filteredItem.type string.
        - .toUpperCase(): This method is used to convert the first character to uppercase. For example, if the first character is 'a', it becomes 'A'.
        - filteredItem.type.slice(1): This part extracts the rest of the string starting from the second character. It effectively removes the first character from the original string.
        
        As such, the result is from "mall" to "Mall" */}
        {/* <div className="rating-tag-bronze">Bronze</div>
        <div className="rating-tag-silver">Silver</div>
        <div className="rating-tag-gold">Gold</div> */}
        {/* <div
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
        </div> */}
        
        <div className="stars">{filteredItem.averagestars} stars</div>
        <div className="reviewCount">based on {filteredItem.totalreviews} reviews</div>
      </div>
      <div className="summaryInfo">
        <h1>{filteredItem.place}</h1>
        <p className="address">{filteredItem.address}</p>
      </div>
    </div>
  );
}

export default Summary;
