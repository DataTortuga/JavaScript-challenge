const data_loc = '../samples.json';


function optionChanged() {

}

function init() {

    d3.json(data_loc).then(function (response) {
        var data = response
        console.log(data)

        for(index in data.samples) {
            console.log(index)
            select = d3.select('#selDataset')
            select.append('option').text('940')
            //select.options[select.options.length] = new Option(data.samples['id'][index], index);
        }

        // var drop_down = d3.select('#selDataset')
        // var dd_data = drop_down.onchange
        // console.log(dd_data)

        // drop_down.onchange

    })
    trace = {
        x: [1,2,3],
        y: [1,2,3]
    }
    plot_data = [trace]
    //Plotly.newPlot("plot", plot_data)
}

init()
