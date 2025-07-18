# Interactive Weather Data Visualization Dashboard

## Project Overview

As part of our INFO 474 course, our team was tasked with analyzing real-world weather data and building an **interactive dashboard** that visualizes climate trends across different U.S. cities. 

We began our exploration in **Tableau**, where we created a dashboard to identify patterns and trends in the data. From there, we transitioned to building a **custom interactive website using D3.js**, allowing for greater flexibility, dynamic interactivity, and a more tailored user experience.

## Dataset Description

We worked with a **CSV dataset provided by our instructor**, containing historical weather data across seven U.S. cities. The dataset was already cleaned and structured for analysis.

- **Each row** represents the weather on a specific calendar day, including:
  - Average, maximum, and minimum temperatures
  - Precipitation level
  - Record high and low temperatures, and the years they occurred

- A column in the dataset identifies the **city** each row belongs to, using a **3-letter abbreviation** (e.g., IND for Indianapolis). The dataset includes weather data for seven different cities across various U.S. states.

### Data Types and Units
- **Temperature**: Fahrenheit (°F)  
- **Precipitation**: Inches (in)

### Terminology Clarification
- `record_min_temp` / `record_max_temp`: The lowest/highest temperature ever recorded on that **specific calendar day** (e.g., July 1st).
- `record_min_temp_year` / `record_max_temp_year`: The **year** in which the record occurred for that particular day.

## Data Visualizations
To prepare for building our Tableau dashboard, we first outlined a set of key visualizations by identifying the primary variables for each chart. This helped guide the structure and focus of our analysis as we explored patterns in the weather data.

1. **Average Temperature Over Time Across Cities**
   - **X-axis**: `date`
   - **Y-axis**: `actual_mean_temp`
   - **Color/Category**: `city`

2. **Temperature vs. Precipitation Levels (Scatter Plot)**
   - **X-axis**: `date`
   - **Y-axis**: `actual_mean_temp`
   - **Size Encoding**: `actual_precipitation`

3. **Record Min vs. Max Temperatures Across Cities**
   - **X-axis**: `record_min_temp`
   - **Y-axis**: `record_max_temp`
   - **Color/Category**: `city`

4. **Precipitation Over Time vs. Record Levels**
   - **X-axis**: `date`
   - **Y-axis**: `actual_precipitation`
   - **Overlay Variables**: `record_precipitation`, `average_precipitation`

5. **Temperature Over Time with Record Boundaries**
   - **X-axis**: `date`
   - **Y-axis**: `actual_mean_temp`
   - **Overlay Variables**: `record_min_temp`, `record_max_temp`

## Interactive Features

To enhance user engagement and exploration, we implemented the following **interactive elements** in the D3.js dashboard:

- **Dropdown Menu**  
  - Allows users to select a specific city to view its corresponding weather trends

- **Tooltips on Hover**  
  - When hovering over the line graph, tooltips appear to display detailed information for each data point (e.g., date, temperature, precipitation)

These features were designed to make it easier for users to explore city-specific data and gain insights from the trends over time.

## Conclusion

Starting in Tableau helped us gain a high-level understanding of the dataset and uncover initial trends. By moving into D3.js, we were able to create a **custom, interactive web-based dashboard** that offers a more engaging and flexible way to explore weather trends across seven U.S. cities. This project deepened our skills in data analysis, visualization design, and front-end development using D3.js.

🔗 [Visit Our Site](https://info-474-au24.github.io/dc3-weather-aminahmackeen/)
