import React, { Component } from "react";
import { sections } from "../../directory.data";
import MenuItem from "../menuItem.component";
import "./directory.styles.scss";

class Directory extends Component {
  constructor() {
    super();
    this.state = {
      sections: sections
    };
  }
  render() {
    let { sections } = this.state;
    console.log("sections:::", sections);

    return (
      <div className="directory-menu">
        {sections.map(({ id, ...sectionProps }) => {
          return <MenuItem key={id} {...sectionProps} />;
        })}
      </div>
    );
  }
}

export default Directory;
