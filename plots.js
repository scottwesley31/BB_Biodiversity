// Code that creates a dropdown menu of ID numbers dynamically
function init() {
    // Select the dropdown menu and assign to selector variable
    var selector = d3.select("#selDataset");
  
    // Read data from "samples.json"; all data assigned to 'data' argument
    d3.json("samples.json").then((data) => {
      console.log(data);
      // Access names array within data argument; assign to sampleNames variable
      var sampleNames = data.names;
      sampleNames.forEach((sample) => {
        selector
        //For each element in the array, a dropdown option is appended
          .append("option")
          // The text of each dropdown menu option is the ID
          .text(sample)
          // The value property is assigned the ID
          .property("value", sample);
      });
  })}
  
  init();

  // optionChanged function called by the onchange attribute within the dropdown menu in index.html
  // newSample is the value of the selected menu option
  function optionChanged(newSample) {
    buildMetadata(newSample);
    // buildCharts(newSample);
  }

// buildMetadata() takes in an ID number as an argument; triggered by optionChanged()
  function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
        // Access the metadata array
      var metadata = data.metadata;
      // filter for array with correct sample ID
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      // Results of the filter are in an array, access index of [0]
      var result = resultArray[0];
      // Select the correct <div /> tag with id="sample-metadata"; Demographic Info panel
      var PANEL = d3.select("#sample-metadata");
  
      // Clear the panel when another dropdown option is chosen
      PANEL.html("");
      // Append <h6> heading and demographic info text
      Object.entries(result).forEach(([key,value])=> PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`));
    });
      // PANEL.append("h6").text(result.location);
  };