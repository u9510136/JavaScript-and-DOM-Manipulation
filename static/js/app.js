// from data.js
var tableData = data;

// YOUR CODE HERE!
var submit = d3.select("#filter-btn");

submit.on("click", function () {

    // prevent refreshing
    d3.event.preventDefault();

    // clear the table
    d3.select("tbody").selectAll("*").remove();

    // get the date value from input
    var date = d3.select("#datetime");
    var dateValue = date.property("value");
    console.log(dateValue);

    // get the city value from input
    var city = d3.select("#cityname");
    var cityValue = city.property("value");
    console.log(cityValue);

    // get the state value from input
    var state = d3.select("#statename");
    var stateValue = state.property("value");
    console.log(stateValue);

    // get the country value from input
    var country = d3.select("#countryname");
    var countryValue = country.property("value");
    console.log(countryValue);

    // get the shape value from input
    var shape = d3.select("#shapename");
    var shapeValue = shape.property("value");
    console.log(shapeValue);

    // date filter
    function datefilter(tableData) {
        if (dateValue != "") {
            return tableData.datetime === dateValue;
        } else {
            return true;
        }
    }

    // city filter
    function cityfilter(tableData) {
        if (cityValue != "") {
            return tableData.city === cityValue;
        } else {
            return true;
        }
    }

    // state filter
    function statefilter(tableData) {
        if (stateValue != "") {
            return tableData.state === stateValue;
        } else {
            return true;
        }
    }

    // country filter
    function countryfilter(tableData) {
        if (countryValue != "") {
            return tableData.country === countryValue;
        } else {
            return true;
        }
    }

    // shape filter
    function shapefilter(tableData) {
        if (shapeValue != "") {
            return tableData.shape === shapeValue;
        } else {
            return true;
        }
    }

    // get the filtered data
    var filtered_data = tableData.
        filter(datefilter).
        filter(cityfilter).
        filter(statefilter).
        filter(countryfilter).
        filter(shapefilter);
    console.log(filtered_data);

    // indert the filtered data into html
    var tbody = d3.select("tbody");
    filtered_data.forEach(function (ufo) {
        var row = tbody.append("tr");
        Object.entries(ufo).forEach(function ([key, value]) {
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
})




