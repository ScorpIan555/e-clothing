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
        {sections.map((section, i) => {
          let { id, title, imageUrl, linkUrl } = section;
          let subtitle = "subtitle";
          return (
            <MenuItem
              id={id}
              title={title}
              linkUrl={linkUrl}
              imageUrl={imageUrl}
              subtitle={subtitle}
            />
          );
        })}
      </div>
    );
  }
}

export default Directory;
