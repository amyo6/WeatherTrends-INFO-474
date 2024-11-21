// 1: SET GLOBAL VARIABLES
const margin = { top: 50, right: 30, bottom: 60, left: 70 };
const width = 800 - margin.left - margin.right;
const height = 400 - margin.top - margin.bottom;

// Create the SVG container and group element for the chart
const svgLine = d3.select("#lineChart")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);


// 2: LOAD AND TRANSFORM DATA
d3.csv("weather.csv").then(data => {
    // 2.a: Rename and reformat
    // data.forEach(YOUR_CODE);
    
    // Check your work:
    // console.log("Reformatted data:", data);

    // 2.b: Filter (if applicable)
    // Reduce the number of rows, without changing the columns
    // const filteredData = YOUR_CODE;

    // Check your work:
    // console.log("Filtered data:" filteredData);

    // 2.c: Group and aggregate
    // "For each [some category] per [some other category if applicable], I want the [some aggregation] of [some numeric variable]."
    // const groupedData = YOUR_CODE;

    // Check your work:
    // console.log("Grouped data:", groupedData);

    // 2.d: Pivot OR flatten your data into an array where each element contains:
    // - X-variable (group 1)
    // - Y-variable (number)
    // - Category (group 2, if applicable)
    // const flattenedData = YOUR_CODE;

    // Check your work:
    // console.log("Flattened/pivoted data:", flattenedData);


    // 3: SET SCALES
    // 3.a: Define xScale for dates

    // 3.b: Define yScale for numeric variable

    // 3.c: Define colorScale if you are using a categorical variable (e.g., city or region)

    // 3.d: Create your line generator to connect the points in your line.


    // 4: PLOT LINES
    // 4.a: Create path for each city (if grouping by city) or each region

        // 4.b: Style your line(s).
    

    // 5: ADD AXES
    // 5.a: X-axis

    // 5.b: Y-axis


    // 6: ADD LABELS
    // 6.a: Title
    // Edit this in your "index.html" on line 25.

    // 6.b: X-axis label

    // 6.c: Y-axis label


    // 7: ADD LEGEND (if applicable)
    // 7.a: Create legend element

    // 7.b: Add colored squares

    // 7.c: Add text


    // 8: ADD INTERACTIVITY
    // You must have 1-2 interactive elements such as: a tooltip, toggle, dropdown, checklist, number input, time range slider, or zoomable view. With the exception of the tooltip and zoomable view, you must add all interactive elements to "index.html" in the interactive widgets section.
});
