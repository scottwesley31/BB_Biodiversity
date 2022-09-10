# BB_Biodiversity
Module 12

## Project Purpose
This project involves the practice of making data visualizations for the web using JavaScript and Plotly.

## Project Summary
A biological researcher named Rosa is interested in bacterial species that have the ability to synthesize proteins that taste like beef. She has partnered with a food startup company called "Improbable Beef" to research and discover bacterial species that can be utlized in the beef-flavored protein synthesis project. She believes that bacterial species found colonizing the belly button are worth investigating. Rosa sampled the belly buttons of people across the country in order to identify the bacterial species present in each subject. She needs a website dashboard which allows for test subjects to select their ID number and which will subsequently display information from the sample. It should show each test subject which bacterial species were found and their releative abundances.

## Results
The dashboard was built using 4 different files:
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
This file is also responsible for the webpage initilization (or what information is displayed initially when the webpage is first loaded).

Here are screenshots of the webpage as it appears prior to utilizing the dropdown menu feature:

![BB_webpage_1](https://user-images.githubusercontent.com/107309793/189497119-4a850742-6cec-43b1-8ac4-784001d677fa.png)
![BB_webpage_2](https://user-images.githubusercontent.com/107309793/189497153-b17e75e4-cd69-4426-8e06-d1c5621219f6.png)
![BB_webpage_3](https://user-images.githubusercontent.com/107309793/189497121-3d0666f1-2895-4e90-9e95-3d10103cf82f.png)

## Conclusion
Overall this project successfully utilizes JavaScript and Plotly to build a dashboard for test subjects to easily interact with. It visualizes the data in a variety of ways and helps summarize the data in a way that may also be useful for Improbable Beef.
