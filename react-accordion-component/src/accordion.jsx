import React from 'react';

const topics = [
  {
    id: 1,
    title: 'HyperText Markup Language',
    text: `Hypertext Markup Language (HTML) is the standard markup language for
    documents designed to be displayed in a web browser. It can be assisted by
    technologies such as Cascading Style Sheets (CSS) and scripting languages
    such as JavaScript.`,
    isVisible: false
  },
  {
    id: 2,
    title: 'Cascading Style Sheets',
    text: `Cascading Style Sheets (CSS) is a style sheet language used for
    describing the presentation of a document written in a markup language such
    as HTML. CSS is a cornerstone technology of the World Wide Web, alongside
    HTML and JavaScript.`,
    isVisible: true
  },
  {
    id: 3,
    title: 'JavaScript',
    text: `Often abbreviated as JS, is a programming language that conforms to
    the ECMAScript specification. JavaScript is high-level, often just-in-time
     compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing,
     prototype-based object-orientation, and first-class functions.`,
    isVisible: true
  }
];

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
        topics.map(topic => {
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
        <TopicList topics={props.topics} openIndex={this.state.openIndex} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default Accordion;
