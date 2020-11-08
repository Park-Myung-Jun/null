import React, { Component } from 'react';
import Subject from "./comps/Subject";
import TOC from "./comps/TOC";
import Content from "./comps/Content"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject title="WEB" sub="world wide web!"></Subject>
        <Subject title="React" sub="For UI"></Subject>
        <TOC></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Language"></Content>
      </div>
    );
  }
}

export default App;