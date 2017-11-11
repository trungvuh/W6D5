import React from 'react';
// import Header from './header';


class Tabs extends React.Component {
  constructor(props) { //this.props.title = [1,2,3]
    super(props);
    this.state = {
      selectedTab: 0
    };
    this.title = this.props.tabs[this.state.selectedTab].title;
    this.content = this.props.tabs[this.state.selectedTab].content;
  }

  switchTab () {
    this.setState({ selectedTab: index });
    this.toggleClass();
  }

  toggleClass() {

  }

  render() {

    return (
      <div>
        <h1> Tabs </h1>
        <ul>
          <li className="active">{this.props.tabs[0].title}</li>
          <li>{this.props.tabs[1].title}</li>
          <li>{this.props.tabs[2].title}</li>
        </ul>
      </div>
    );
  }
}

// {
//   this.props.tabs.map((tab,index) => (
//     <Header
//       key={index}
//       title={tab.title}
//       content={tab.content} />
//   ))
// }

export default Tabs;
