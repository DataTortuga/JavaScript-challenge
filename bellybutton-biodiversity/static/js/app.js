const data_loc = '../samples.json';
var select = d3.select('#selDataset')



function update_panel(index, data) {
    var sample_panel = d3.select('#sample-metadata')
    console.log(sample_panel.select('li'))
    sample_panel.selectAll('li').remove()
    // sample_panel.select('li').text('Ethnicity: ' + data.metadata[index].ethnicity)
    // sample_panel.select('li').text('Gender: ' + data.metadata[index].gender)
    // sample_panel.select('li').text('Age: ' + data.metadata[index].age)
    // sample_panel.select('li').text('Location: ' + data.metadata[index].location)
    sample_panel.append('ul').append('li').text('ID: ' + data.metadata[index].id);
    sample_panel.append('ul').append('li').text('Ethnicity: ' + data.metadata[index].ethnicity);
    sample_panel.append('ul').append('li').text('Gender: ' + data.metadata[index].gender);
    sample_panel.append('ul').append('li').text('Age: ' + data.metadata[index].age);
    sample_panel.append('ul').append('li').text('Location: ' + data.metadata[index].location);
}

function optionChanged(sam_id) {
    d3.json(data_loc).then(function (data) {
        for (let i = 0;  i < data.metadata.length; i++) {
            if (data.metadata[i].id==sam_id) {update_panel(i, data);}
        }
    })
}

function init() {

    d3.json(data_loc).then(function (response) {
        var data = response

        for(index in data.samples) {
            select.append('option').text(data.samples[index].id)
        }

        update_panel(0, data)
        
    })
}

init()
