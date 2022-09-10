# BB_Biodiversity
Module 12

## Project Purpose
This project involves the practice of making data visualizations for the web using JavaScript and Plotly.

## Project Summary
Rosa, a biological researcher is interested in bacterial species that have the ability to synthesize proteins that taste like beef, wants to create a webpage for her test subjects. She has partnered with a food startup company called "Improbable Beef" to research and discover bacterial species that can be utlized in the beef-flavored protein synthesis project. She believes that bacterial species found colonizing the belly button are worth investigating. Rosa sampled the belly buttons of people across the country in order to identify the bacterial species present in each subject. She needs a website dashboard which allows for test subjects to select their ID number and which will subsequently display information about which bacterial species were found and their relative abundance.

## Results
The dashboard was build using 4 different files:
1. `samples.json`
2. `index.html`
3. `charts.js`

The `samples.json` file contains all of the subject demographic data as well as the data associated with every bacterial species found in their navel. This file is in a JSON format and is utilized in the `charts.js` file.

The `index.html` file sets up the webpage and utilizes bootstrap to customize the layout, text, and formatting of the webpage.

The `charts.js` file contains all of the code which fills the webpage with all of the data visualizations including:
- Test subject ID dropdown and demographics info panel
- Top 10 OTU's horizontal bar chart
- Belly button washing frequency gauge chart
- Bacterial cultures per sample bubble chart

