import React from 'react';
import {Pie as PieChart} from 'react-chartjs';

var FAT = {
    value: 300,
    color:'#F7464A',
    highlight: '#FF5A5E',
    label: 'Fat'
}
var PROTEIN = {
    value: 50,
    color: '#46BFBD',
    highlight: '#5AD3D1',
    label: 'Protein'
}
var CARBS = {
    value: 100,
    color: '#FDB45C',
    highlight: '#FFC870',
    label: 'Carbs'
};
var data = [FAT, PROTEIN, CARBS];
var chartOptions = {};

export default class Overview extends React.Component {

  render() {
    const { foods } = this.props;
    if(!foods || !foods.length) return (<span/>);

    const flatten = list => list.reduce(
        (a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []
    );

    var componentSums = {};
    flatten(foods.map(food => food.components)).forEach(component => {
      let value = parseFloat(component.value);
      componentSums[component.code] = componentSums[component.code] ? componentSums[component.code] + value : value;
    });


    FAT.value = componentSums.fat;
    PROTEIN.value = componentSums.prot;
    CARBS.value = componentSums.choavl;

    return (
      <div>
        <PieChart data={data} options={chartOptions} width="100" height="100"/>
      </div>
    );
  }
};
