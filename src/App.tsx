import * as interact from 'interactjs';
import * as React from 'react';
import Collapsible from 'react-collapsible';

import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.dragMoveListener = this.dragMoveListener.bind(this);
    }
    public render() {
        return (
            <div className="report_designer">
                <div className="layout_menu">
                    <Collapsible trigger="Controls" classParentString="layout_controls" transitionTime={150}>
                        <div>Text</div>
                        <div>Markdown</div>
                        <div>Image</div>
                    </Collapsible>
                    <Collapsible trigger="Options" classParentString="layout_controls" transitionTime={150}>
                        <div>Snap to Grid</div>
                        <div>Snap Align</div>
                        <div>Copy</div>
                    </Collapsible>
                    <Collapsible trigger="Properties" classParentString="layout_controls" transitionTime={150}>
                        <div>Left</div>
                        <div>Top</div>
                        <div>Width</div>
                        <div>Height</div>
                    </Collapsible>
                    <Collapsible trigger="Random" classParentString="layout_controls" transitionTime={150}>
                        <div>Highlight on click</div>
                        <div>Default layout</div>
                        <div>Create from JSON data</div>
                        <div>Letter vs A4</div>
                        <div>Portrait vs Landscape</div>
                        <div>Print</div>
                        <div>PDF</div>
                        <div>Word</div>
                        <div>HTML</div>
                    </Collapsible>
                </div>
                <div className="page_container">
                    <div className="page_A4">
                        <div className="page_margin">
                            <div className="page_wrapper">
                                <div className="report_header">Header</div>
                                <div className="report_content">
                                    <div className="layout_drag">Move me</div>
                                </div>
                                <div className="report_footer">Footer</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    public componentDidMount() {
        interact('.layout_drag')
            .draggable({
                onmove: this.dragMoveListener
            });
    }

    private dragMoveListener(event) {
        const target = event.target;

        // keep the dragged position in the data-x/data-y attributes
        const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
        const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
    
        // translate the element
        target.style.webkitTransform =
        target.style.transform =
          'translate(' + x + 'px, ' + y + 'px)';
    
        // update the posiion attributes
        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);
      }
    
}

export default App;
