import React, { Component } from 'react';

export default class ErrorBoundary extends Component {

    state = { hasError: false };

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.log(`Cause: ${error}.\nStackTrace: ${info.componentStack}`);
    }

    render() {
        if (this.state.hasError) {
            return <h3 style={{ 'text-align': 'center' }}>Unfortunately, something went wrong.</h3>;
        }

        return this.props.children;
    }
}