import React from 'react';

function Topic(props) {
  let descClass = '';
  if (parseInt(props.openIndex) === props.topic.id) {
    descClass = 'desc';
  } else {
    descClass = 'desc hidden';
  }

  return (
    <li>
      <div className="title" data-id={props.topic.id} onClick={props.handleClick} >
        {props.topic.title}
      </div>
      <div className={descClass}>
        {props.topic.text}
      </div>
    </li>

  );
}

function TopicList(props) {
  return (
    <ul className="container">
      {
        props.topics.map(topic => {
          return (
            <Topic
              key={topic.id}
              topic={topic}
              openIndex={props.openIndex}
              handleClick={props.handleClick} />
          );
        })
      }
    </ul>
  );
}

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      openIndex: null
    };
  }

  handleClick(e) {
    const clickedId = parseInt(e.target.dataset.id);

    if (clickedId === this.state.openIndex) {
      this.setState({
        openIndex: null
      });
    } else {
      this.setState({
        openIndex: clickedId
      });
    }
  }

  render() {
    return (
      <div>
        <TopicList topics={this.props.topics} openIndex={this.state.openIndex} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default Accordion;
