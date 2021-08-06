const data_loc = '../samples.json';
var select = d3.select('#selDataset')

// Function updates Demographic info panel
function update_panel(index, data) {

    var sample_panel = d3.select('#sample-metadata')
    sample_panel.selectAll('ul').remove()
    sample_panel.append('ul')

    var panel_list = sample_panel.select('ul')
    panel_list.append('li').text('ID: ' + data.metadata[index].id);
    panel_list.append('li').text('Ethnicity: ' + data.metadata[index].ethnicity);
    panel_list.append('li').text('Gender: ' + data.metadata[index].gender);
    panel_list.append('li').text('Age: ' + data.metadata[index].age);
    panel_list  .append('li').text('Location: ' + data.metadata[index].location);
}

// Defines what to do when subject ID is changed
function optionChanged(sam_id) {
    d3.json(data_loc).then(function (data) {
        for (let i = 0;  i < data.metadata.length; i++) {
            if (data.metadata[i].id==sam_id) {update_panel(i, data);}
        }
    })
}

// Initializes webpage with data
function init() {
    d3.json(data_loc).then(function (data) {
        for(index in data.samples) {
            select.append('option').text(data.samples[index].id)
        }
        update_panel(0, data)
    })
}

init()
