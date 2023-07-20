import { useEffect } from "react";

function Summary({ filteredItem }) {
  return (
    <div>
      <div
        className={
          filteredItem.avgToiletRating === "bronze"
            ? "rating-tag-bronze"
            : filteredItem.avgToiletRating === "silver"
            ? "rating-tag-silver"
            : filteredItem.avgToiletRating === "gold"
            ? "rating-tag-gold"
            : "rating-tag-null" // default class name if none of the conditions match
        }
      >
        {filteredItem.avgToiletRating}
      </div>
      <div className="summaryInfo">
        <h1>{filteredItem.location}</h1>
        <p>{filteredItem.address}</p>
      </div>
    </div>
  );
}

export default Summary;
