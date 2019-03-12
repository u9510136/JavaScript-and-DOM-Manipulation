// from data.js
var tableData = data;

// YOUR CODE HERE!
var submit = d3.select("#filter-btn");

submit.on("click", function () {

    d3.event.preventDefault();

    d3.select("tbody").selectAll("*").remove();


    var input = d3.select("#datetime");
    var inputValue = input.property("value");
    console.log(inputValue);

    function filtered(tableData) {
        return tableData.datetime === inputValue;
    }

    var filtered_data = tableData.filter(filtered);
    console.log(filtered_data);

    var tbody = d3.select("tbody");
    filtered_data.forEach(function (ufo) {
        var row = tbody.append("tr");
        Object.entries(ufo).forEach(function ([key, value]) {
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
})




