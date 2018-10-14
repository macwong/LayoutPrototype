import * as React from 'react';
import Collapsible from 'react-collapsible';
import './App.css';

class App extends React.Component {
  public render() {
    return (
        <div>
            <Collapsible trigger="Controls" classParentString="layout_controls">
                <div>Text</div>
                <div>Markdown</div>
                <div>Image</div>
            </Collapsible>
        </div>
    );
  }
}

export default App;
