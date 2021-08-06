const data_loc = '../samples.json';


function optionChanged() {

}

function init() {

    d3.json(data_loc).then(function (response) {
        var data = response
        console.log(data)

        for(index in data.samples) {
            console.log(data.samples[index].id)
            select = d3.select('#selDataset')
            select.append('option').text(data.samples[index].id)
        }


    })
    trace = {
        x: [1,2,3],
        y: [1,2,3]
    }
    plot_data = [trace]
    //Plotly.newPlot("plot", plot_data)
}

init()
