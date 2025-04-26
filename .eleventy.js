const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {

  // Ignore the admin directory for template processing
  eleventyConfig.ignores.add("src/admin");

  // Passthrough Copy for CSS
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/admin");

  // Date formatting filter using Luxon
  eleventyConfig.addFilter("formatDate", (dateObj, format = "yyyy") => {
    // Ensure the input is a Date object before formatting
    // You might need more robust date parsing depending on your data sources
    const dateToFormat = (dateObj instanceof Date) ? dateObj : new Date(dateObj);

    if (isNaN(dateToFormat.valueOf())) {
        // Handle invalid date input gracefully
        console.warn(`Invalid date received for formatting: ${dateObj}`);
        return ''; // Or return a default string like 'Invalid Date'
    }
    return DateTime.fromJSDate(dateToFormat, { zone: 'utc' }).toFormat(format);
  });

  // Example 'readableDate' filter (adjust format as needed)
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    const dateToFormat = (dateObj instanceof Date) ? dateObj : new Date(dateObj);
    if (isNaN(dateToFormat.valueOf())) {
        console.warn(`Invalid date received for formatting: ${dateObj}`);
        return '';
    }
    // Format: Month Day, Year e.g., April 26, 2025
    return DateTime.fromJSDate(dateToFormat, { zone: 'utc' }).toFormat("LLLL dd, yyyy");
  });

  return {
    dir: {
      input: "src",
      includes: "../_includes",
      data: "../_data",
      output: "_site"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    passthroughFileCopy: true
  };
}; 