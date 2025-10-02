import React, { Component } from 'react';

class TableauReact extends Component {
  componentDidMount() {
    this.initViz();
  }

  componentWillUnmount() {
    if (this.viz) {
      this.viz.dispose();
    }
  }

  initViz() {
    const vizUrl =
      'https://public.tableau.com/shared/XF7MBGGQB?:display_count=n&:origin=viz_share_link';
    const options = {
      width: this.vizContainer.offsetWidth,
      height: this.vizContainer.offsetHeight,
    };
    this.viz = new window.tableau.Viz(this.vizContainer, vizUrl, options);
  }

  render() {
    return (
      <div
        className="vizDiv"
        ref={(div) => {
          this.vizContainer = div;
        }}
        style={{ width: '1000px', height: '800px' }}
      />
    );
  }
}

export default TableauReact;
