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
                <Collapsible trigger="Controls" classParentString="layout_controls" transitionTime={150}>
                    <div>Text</div>
                    <div>Markdown</div>
                    <div>Image</div>
                </Collapsible>
                <div className="page_container">
                    <div className="page_A4">
                        <div className="page_margin">
                            <div className="report_header">Header</div>
                            <div className="report_content">
                                <div className="layout_drag">Move me</div>
                            </div>
                            <div className="report_footer">Footer</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    public componentDidMount() {
        interact('.layout_drag')
            .draggable({
                onmove: this.dragMoveListener,
                // snap: {
                // targets: [
                //     { x: 100, y: 200 },
                //     (x, y) => ({ x: x % 20, y })
                // ]}
            })
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
