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
    data.forEach(d => {
        d.month = new Date(d.date).getMonth() + 1; // Parse dates and get month
        d.temp = +d.actual_mean_temp; // Convert mean temperature to numeric
    });
    
    // Check your work:
    // console.log("Reformatted data:", data);

    // 2.b: Filter (if applicable)
    // Reduce the number of rows, without changing the columns
    const filteredData = data;

    // Check your work:
    // console.log("Filtered data:", filteredData);

    // 2.c: Group and aggregate
    // "For each city per month, I want the average of actual mean temperature."
    const groupedData = d3.groups(filteredData, d => d.city, d => d.month)
    .map(([city, months]) => ({
        city,
        values: months.map(([month, entries]) => ({
            month,
            avgTemp: d3.mean(entries, e => e.temp)
        }))
        .sort((a, b) => a.month - b.month)                  
    }));

    // Check your work:
    // console.log("Grouped data:", groupedData);

    // 2.d: Pivot OR flatten your data into an array where each element contains:
    // - X-variable (month)
    // - Y-variable (average temperature)
    // - Category (city)
    const flattenedData = groupedData.flatMap(({city, values}) => 
        values.map(({month, avgTemp}) => ({
            month,
            avgTemp,
            city
        })));

    // Check your work:
    // console.log("Flattened/pivoted data:", flattenedData);

    // 3: SET SCALES
    // 3.a: Define xScale for months
    const xMonth = d3.scaleBand()
                    .domain(flattenedData.map(d => d.month))
                    .range([0, width])
                    .padding(0.1);

    // 3.b: Define yScale for average mean temperature
    const yTemp = d3.scaleLinear()
                .domain([0, d3.max(flattenedData, d => d.avgTemp)])
                .range([height, 0]);

    // 3.c: Define colorScale for city
    const colorScale = d3.scaleOrdinal()
        .domain(groupedData.map(d => d.city))
        .range(d3.schemeCategory10);

    // 3.d: Create your line generator to connect the points in your line.
    const line = d3.line()
                    .x(d => xMonth(d.month))
                    .y(d => yTemp(d.avgTemp));


    // 4: PLOT LINES
    // 4.a: Create path for each city 
    svgLine.selectAll("path")
        .data(groupedData)
        .enter()
        .append("path")
        .attr("d", d => line(d.values))
    // 4.b: Style your line(s).
        .style("stroke", d => colorScale(d.city))
        .style("fill", "none")
        .style("stroke-width", 2);
    

    // 5: ADD AXES
    // 5.a: X-axis
    svgLine.append('g')
            .attr('transform', `translate(0,${height})`)
            .call(d3.axisBottom(xMonth));

    // 5.b: Y-axis
    svgLine.append('g')
            .call(d3.axisLeft(yTemp));


    // 6: ADD LABELS
    // 6.a: Title
    // Edit this in your "index.html" on line 25.

    // 6.b: X-axis label
    svgLine.append("text")
        .attr("class", "axis-label")
        .attr("x", width / 2)
        .attr("y", height + margin.bottom - 10)
        .attr("text-anchor", "middle")
        .text("Month");

    // 6.c: Y-axis label
    svgLine.append("text")
        .attr("class", "axis-label")
        .attr("transform", "rotate(-90)")
        .attr("y", -margin.left + 20)
        .attr("x", -height / 2)
        .attr("text-anchor", "middle")
        .text("Avg. Actual Mean Temperature (F)");


    // 7: ADD LEGEND (if applicable)
    // 7.a: Create legend element
    svgLine.append("text")
    .attr("class", "legend-title")
    .attr("x", width - 90) 
    .attr("y", -38)         
    .attr("text-anchor", "start")
    .style("font-size", "14px")
    .style("font-weight", "bold")
    .text("City"); 

    const legend = svgLine.selectAll(".legend")
        .data(groupedData)
        .enter()
        .append("g")
        .attr("class", "legend")
        .attr("transform", (d, i) => `translate(${width - 100}, ${i * 20 - 30})`);

    // 7.b: Add colored squares
    legend.append("rect")
        .attr("x", 10)
        .attr("width", 10)
        .attr("height", 10)
        .style("fill", d => colorScale(d.city)); 


    // 7.c: Add text
    legend.append("text")
        .attr("x", 30)
        .attr("y", 10)
        .attr("text-anchor", "start")
        .style("alignment-baseline", "middle")
        .text(d => d.city); 


    // 8: ADD INTERACTIVITY
    // You must have 1-2 interactive elements such as: a tooltip, toggle, dropdown, checklist, number input, time range slider, or zoomable view. With the exception of the tooltip and zoomable view, you must add all interactive elements to "index.html" in the interactive widgets section.
    // Select the container inside the widget
    // const checkboxContainer = d3.select("#checkbox-container");

    // // Add checkboxes for each city
    // checkboxContainer.selectAll("label")
    //     .data(groupedData)
    //     .enter()
    //     .append("label")
    //     .text(d => d.city)
    //     .append("input")
    //     .attr("type", "checkbox")
    //     .attr("class", "city-checkbox")
    //     .attr("value", d => d.city)
    //     .property("checked", true); 

});
