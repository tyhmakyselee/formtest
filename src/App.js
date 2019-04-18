import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class App extends React.Component {
    modes = ['a', 'b', 'c'];

    constructor(props) {
        super(props);
        this.state = {
            currentMode: this.modes[2]
        };
    };

    setMode = (newMode) => {
        console.log('App.setMode', this.state.currentMode, newMode);
        this.setState({currentMode: newMode});
    };

    nextMode = (event) => {
        const index = this.modes.indexOf(this.state.currentMode);
        const newMode = this.modes[(index+1) % this.modes.length];
        console.log('App.nextMode', this.state.currentMode, newMode);
        this.setState({currentMode: newMode});
    };

    render() {
        return (
            <div>
              <SelectMode
                modes={this.modes}
                currentMode={this.state.currentMode}
                handleChange={this.setMode}
              />
              <Button
                onClick={this.nextMode}>
                Next mode
              </Button>
            </div>
        );
    };
}

const SelectMode = (props) => {
    console.log('SelectMode', props);
    return (
        <Form>
          <Form.Control
            as="select"
            onChange={event => props.handleChange(event.target.value)}
            defaultValue={props.currentMode}>
            {props.modes.map(m => <option key={m} value={m}>{m}</option>)}
          </Form.Control>
        </Form>);
};

export default App;
