const data_loc = '../samples.json';
var select = d3.select('#selDataset')

// Function sorts top 10 OTUs for a given sample id subject
// function sort10(sample_values) {
//     for (let i = 0;  i < 10; i++) {
//         var temp_array = [];
//         var ind_array = [];
//         var a = 200;
        
//         for (let j = 0; j < sample_values.length; j++) {
//             //console.log(Number(sample_values[j]))
//             if ((Number(sample_values[j]) > Number(sample_values[j+1])) && (Number(sample_values[j]) < a)) {temp_array.push(sample_values[j]); a = sample_values[j]; ind_array.push(j)}
//         }

//     }
//     return ind_array;
// }

// Function updates Demographic info panel when subject id is changed
function update_panel(index, data) {

    var sample_panel = d3.select('#sample-metadata')
    sample_panel.selectAll('ul').remove()
    sample_panel.append('ul')

    var panel_list = sample_panel.select('ul')
    panel_list.append('li').text('ID: ' + data.metadata[index].id);
    panel_list.append('li').text('Ethnicity: ' + data.metadata[index].ethnicity);
    panel_list.append('li').text('Gender: ' + data.metadata[index].gender);
    panel_list.append('li').text('Age: ' + data.metadata[index].age);
    panel_list.append('li').text('Location: ' + data.metadata[index].location);
}

// Function updates plotly graph when subject id is changed
function update_plot(index, data) {
    //bar = d3.select('#bar').text('Hello')

    //odu = sort10(data.samples[index].sample_values)
    //odu = data.samples[index].sample_values.sort( function(a, b){return b - a}).slice(0, 10)
    otu_value = data.samples[index].sample_values.slice(0, 10);
    otu_id = data.samples[index].otu_ids.slice(0,10);
    otu_label = data.samples[index].otu_labels.slice(0,10);

    // var ind_array = []
    // for (let i = 0; i < odu.length; i++) {
    //     for (let j = 0; j < data.samples[index].sample_values.length; j++) {
    //         if (odu[i] == data.samples[index].sample_values[j]) {ind_array.push(j); break;}
    //     }
    // }

    // console.log(ind_array)
    // console.log(data.samples[index].sample_values)

    let trace1 = {
        x: otu_value,
        y: otu_id
      };
      
      let data1 = [trace1];
      
      let layout = {
        title: "Top 10 OTUs Found!"
      };
      
      Plotly.newPlot("bar", data1, layout);
}

// Defines what to do when subject ID is changed
function optionChanged(sam_id) {
    d3.json(data_loc).then(function (data) {
        for (let i = 0;  i < data.metadata.length; i++) {
            if (data.metadata[i].id==sam_id) {update_panel(i, data); update_plot(i, data)}
        }
    })
}

// Initializes webpage with data
function init() {
    d3.json(data_loc).then(function (data) {
        console.log(data)
        for(index in data.samples) {
            select.append('option').text(data.samples[index].id)
        }
        update_panel(0, data)
        update_plot(0, data)
    })
}

init()
