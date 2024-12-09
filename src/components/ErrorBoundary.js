import { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(err){
        console.log(err)
  }

  static getDerivedStateFromError(error){
    return {
        hasError: true
    }
  }

  render() {
    if (this.state.hasError) return <h1>Something went Wrong</h1>;
    return this.props.children;
  }
}


export default ErrorBoundary;
