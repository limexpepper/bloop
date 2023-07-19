import React, { useState } from "react";
import supabase from '../supabase'

function Review() {
  
  // Define the options and their initial state
  const options = [
    { name: 'auto-tap', selected: false },
    { name: 'auto-soap', selected: false },
    { name: 'dry', selected: false },
    { name: 'odorless', selected: false },
    { name: 'grime-free', selected: false },
    { name: 'spacious cubicle', selected: false },
    { name: 'no entrance door', selected: false },
    { name: 'paper towels', selected: false },
    { name: 'air-conditioned', selected: false },
    { name: 'mirror', selected: false },
    { name: 'music', selected: false },
    { name: 'scent', selected: false },
  ];

  // Set up state to manage the selected options
  const [qualities, setQualities] = useState(options);

  // Function to handle option button click
  const handleOptionClick = (index) => {
    const selectedQualities = qualities.map((option, i) =>
      i === index ? { ...option, selected: !option.selected } : option
    );
    setQualities(selectedQualities);
  };

  // Function to handle submit button click
  const handleFormSubmit = async () => {
    // Prepare the data to be inserted into the database
    const dataToInsert = {};
    qualities.forEach((option) => {
      dataToInsert[option.name] = option.selected; 
      /* 
      Each option is an object that has two properties: name and selected 
      In javascript, objects can be thought of as simple implementations of a key-value store, similar to a map data structure. 
      To set a key-value pair, use these [] brackets
      As such, [option.name] is the key and its value is option.selected
      */

    });

    // Insert the data into the Supabase database
    const { error } = await supabase.from('reviews-toilets').insert([dataToInsert]);

    if (error) {
      console.error('Error inserting data:', error);
    } else {
      console.log('Data inserted successfully!');
    }
  };

  return (
    <div className="review">
      <div className="buttons-wrapper">
        {qualities.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(index)}
            className={ option.selected === "true" ? "active" : ""}
          >
            {option.name}
          </button>
        ))}
      </div>
      <p>You're giving it...</p>
      <button id="btn-submit-review" onClick={handleFormSubmit}>Submit</button>
    </div>
  );
};

export default Review;
