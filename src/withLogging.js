import React from 'react';

export default function withLogging(WrappedComponent) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            console.log('props: ', this.props);
        }

        render() {
            return (<WrappedComponent {...this.props} />);
        }
    }
}