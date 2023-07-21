import React, { useState, useEffect } from "react";
import supabase from "../supabase";

function Review(id_entity) {

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
  const [calculatedRating, setCalculatedRating] = useState("___");
  const [switcher, setSwitcher] = useState(false);
  const [submitReview, setSubmitReview] = useState(true);

  useEffect(() => {
    setCalculatedRating(calculateRating());
  }, [switcher])

  const calculateRating = () => {
    const isNill = qualities.every((option) => option.selected === false);

    const silverCount = qualities.slice(0, 6).filter((option) => option.selected === true).length;
    const isSilver = silverCount === 6;

    const silverCountOptional = qualities.slice(6, 8).filter((option) => option.selected === true).length;
    const isSilverOptional = silverCount >= 0;
  
    const goldCount = qualities.slice(8, 12).filter((option) => option.selected === true).length;
    const isGold = isSilver && silverCountOptional === 2 && (goldCount >= 1);

    return isNill ? "___" : isGold ? "gold" : isSilver & isSilverOptional ? "silver" : "bronze";
  };

  const handleOptionClick = (id_quality) => {
    const selectedQualities = qualities.map((option) =>
      id_quality === option.id_quality
        ? { ...option, selected: !option.selected }
        : option
        );
    setQualities(selectedQualities);
    setSwitcher(!switcher);
  };

  const handleFormSubmit = async () => {

    setSubmitReview(!submitReview);
    if (submitReview === false){
      console.log("submit button has been unselected")
      return;
    }
    
    const dataToInsert = {};
    qualities.forEach((option) => { 
      dataToInsert[option.quality] = option.selected;
      /* 
      This function is meant to prepare the data to be inserted into the database
      Each option is an object that has two properties: name and selected 
      In javascript, objects can be thought of as simple implementations of a key-value store, similar to a map data structure. 
      To set a key-value pair, use these [] brackets
      As such, [option.name] is the key and its value is option.selected
      */
    });

    const { error } = await supabase.from("reviews-toilets").insert({
      id_entity: id_entity.id_entity,
      rating: calculatedRating, 
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
      <div className="previewRating">
        <p>You're giving it a </p>
        <h2>{calculatedRating}</h2>
        <p> rating</p>
      </div>
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
