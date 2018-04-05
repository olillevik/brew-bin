import React from 'react';

export default function withLogging(WrappedComponent) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            console.log(WrappedComponent.name + ' props: ', this.props);
        }

        componentDidUpdate() {
            console.log(WrappedComponent.name + ' state: ', this.props);
        }

        render() {
            return (<WrappedComponent {...this.props} />);
        }
    }
}