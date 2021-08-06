const data_loc = '../samples.json';
var select = d3.select('#selDataset')
var sample_panel = d3.select('#sample-metadata')
console.log(sample_panel)

function init() {

    d3.json(data_loc).then(function (response) {
        var data = response
        console.log(data)

        for(index in data.samples) {
            //console.log(data.samples[index].id)
            select.append('option').text(data.samples[index].id)
        }

        sample_panel.append('ul').append('li').text('ID: ' + data.metadata[0].id)
        sample_panel.append('ul').append('li').text('Ethnicity: ' + data.metadata[0].ethnicity)
        sample_panel.append('ul').append('li').text('Gender: ' + data.metadata[0].gender)
        sample_panel.append('ul').append('li').text('Age: ' + data.metadata[0].age)
        sample_panel.append('ul').append('li').text('Location: ' + data.metadata[0].location)





    })
    trace = {
        x: [1,2,3],
        y: [1,2,3]
    }
    plot_data = [trace]
    //Plotly.newPlot("plot", plot_data)
}

init()
