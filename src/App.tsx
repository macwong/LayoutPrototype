import * as React from 'react';
import Collapsible from 'react-collapsible';
import './App.css';

class App extends React.Component {
  public render() {
    return (
        <div className="report_designer">
            <Collapsible trigger="Controls" classParentString="layout_controls" transitionTime={150}>
                <div>Text</div>
                <div>Markdown</div>
                <div>Image</div>
            </Collapsible>
            <div className="page_container">
                <div className="page_A4">
                    <div className="page_margin">
                        <div className="report_header">Header</div>
                        <div className="report_content">Content</div>
                        <div className="report_footer">Footer</div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
