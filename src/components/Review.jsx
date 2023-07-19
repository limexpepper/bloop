import React, { useState } from "react";
import supabase from "../supabase";

function Review(filteredItem) {
  // Define the options and their initial state
  const options = [
    { id_quality: "q1", quality: "auto-tap", selected: false },
    { id_quality: "q2", quality: "auto-soap", selected: false },
    { id_quality: "q3", quality: "dry", selected: false },
    { id_quality: "q4", quality: "odorless", selected: false },
    { id_quality: "q5", quality: "grime-free", selected: false },
    { id_quality: "q6", quality: "spacious cubicle", selected: false },
    { id_quality: "q7", quality: "no entrance door", selected: false },
    { id_quality: "q8", quality: "paper towels", selected: false },
    { id_quality: "q9", quality: "air-conditioned", selected: false },
    { id_quality: "q10", quality: "mirror", selected: false },
    { id_quality: "q11", quality: "music", selected: false },
    { id_quality: "q12", quality: "scent", selected: false }
  ];

  const [qualities, setQualities] = useState(options);

  const handleOptionClick = (id_quality) => {
    const selectedQualities = qualities.map((option) =>
      id_quality === option.id_quality
        ? { ...option, selected: !option.selected }
        : option
    );
    setQualities(selectedQualities);
  };

  const [submitReview, setSubmitReview] = useState(false);
  const handleFormSubmit = async () => {
    setSubmitReview(!submitReview);
    // Prepare the data to be inserted into the database
    const dataToInsert = {};
    qualities.forEach((option) => {
      dataToInsert[option.quality] = option.selected;
      /* 
      Each option is an object that has two properties: name and selected 
      In javascript, objects can be thought of as simple implementations of a key-value store, similar to a map data structure. 
      To set a key-value pair, use these [] brackets
      As such, [option.name] is the key and its value is option.selected
      */
    });

    // Insert the data into the Supabase database
    const { error } = await supabase.from("reviews-toilets").insert({
      id_entity: filteredItem.id_entity,
      rating: null, 
      autoTap: dataToInsert["auto-tap"],
      autoSoap: dataToInsert["auto-soap"],
      dry: dataToInsert.dry,
      odourless: dataToInsert.odorless,
      grimefree: dataToInsert["grime-free"],
      spaciousCubicle: dataToInsert["spacious cubicle"],
      noEntranceDoor: dataToInsert["no entrance door"],
      paperTowels: dataToInsert["paper towels"],
      mirror: dataToInsert.mirror,
      music: dataToInsert.music,
      scent: dataToInsert.scent,
      aircon: dataToInsert["air-conditioned"]
    });
    if (error) {
      console.error("Error inserting data:", error);
    } else {
      console.log("Data inserted successfully!");
    }
  };

  return (
    <div className="review">
      <div className="buttons-wrapper">
        {qualities.map((option) => (
          <button
            key={option.id_quality}
            onClick={() => handleOptionClick(option.id_quality)}
            className={option.selected === true ? "active" : ""}
          >
            {option.quality}
          </button>
        ))}
      </div>
      <p>You're giving it...</p>
      <button
        onClick={handleFormSubmit}
        className={
          submitReview === true
            ? "btn-submit-review-active"
            : "btn-submit-review"
        }
      >
        Submit
      </button>
    </div>
  );
}

export default Review;
