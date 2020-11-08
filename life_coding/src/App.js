import React, { Component } from 'react';
import Subject from "./comps/Subject";
import TOC from "./comps/TOC";
import Content from "./comps/Content"

class App extends Component {
  //init
  constructor(props) {
    super(props);
    this.state = {
      mode: 'welcome',
      welcome: { title: 'Welcome', desc: 'Hello, React!!!' },
      subject: { title: 'WEB', sub: 'world wide web!' },
      contents: [
        { id: 1, title: 'HTML', desc: 'HTML is for information' },
        { id: 2, title: 'CSS', desc: 'CSS is for design' },
        { id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive' },
      ],
    }
  }
  render() {
    console.log("App rendor")
    var _title, _desc = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === 'read') {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    console.log('render', this);
    return (
      <div className="App">
        {/* <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}>
        </Subject> */}
        <header>
          <h1><a href="/" onClick={function (e) {
            // var obj = { name: 'egoing' };
            // function bindTest() {
            //   console.log(this.name);
            // }
            // var bindTest2 = bindTest.bind(obj);
            // bindTest2();
            // bind에 의해 this가 obj로 변환되어 실행됨

            // console.log('event in', this);
            // e.preventDefault();
            // return;
            //alert('hi');
            console.log(e);
            e.preventDefault();//html 기본 동작을 막아줌
            //debugger; // 디버그 모드를 사용
            //this.state.mode = 'welcome'; // 1. 함수의 this가 됨 2. state를 사용 않아 변화를 감지 못함(내부적으로만 변함)
            this.setState({ mode: 'welcome' });
          }.bind(this)}>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header>
        <Subject title="React" sub="For UI"></Subject>
        <TOC data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;