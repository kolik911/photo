import React from 'react'; 

class Slider extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      photos: []
    }
  }

  componentDidMount() {
    fetch('/photos/5a148543151c441b9b48324b')
      .then(d => d.json())
      .then(d =>
        this.setState({
          photos: d
        })
      );
  }

  render() {
    const { photos } = this.state;
    return (
      <div>
        Hello
      </div>
    );
  }
}

export default Slider;