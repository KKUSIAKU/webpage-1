import React from "react";
import DropDownList from "../DropDownList";

const myList = ["item1", "item2", "item3", "item4"]; 
const myLabel = "Genre"; 



class Filter extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      filter: myList[0],
    };
    
    this.list = myList; 
    this.label = myLabel;

    this.setFilter = this.setFilter.bind(this);
    this.selectFiltersOnClick = this.selectFiltersOnClick.bind(this);
  }

  setFilter(filter) {
    this.setState({
      filter: filter
    });
  }

  selectFiltersOnClick(e) {
    this.setFilter(e.target.innerHTML);
  }

  render() {
    return (
      <div className="filter-container d-flex px-3 justify-content-between">
        <div className="filter d-flex">
          <div id="genre-filter" className="mx-2" onClick={this.selectFiltersOnClick}>
            <DropDownList label={myLabel} filter={this.state.filter} list={myList}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Filter; 
