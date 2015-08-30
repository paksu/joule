import React from 'react';

export default class FoodRow extends React.Component {
  render() {
    let iconClassNames = `glyphicon glyphicon-${this.props.icon}`;
    return (
      <li className="list-group-item">
        {this.props.food.name}
        <button className="btn btn-xs btn-primary pull-right" onClick={() => this.props.onClick(this.props.food) }>
          <span className={iconClassNames}></span>
        </button>
      </li>
    );
  }
};
FoodRow.propTypes = {
  food: React.PropTypes.object.isRequired
}
