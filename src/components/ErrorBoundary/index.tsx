import React from "react";

export default class ErrorBoundary extends React.Component<{children: React.ReactNode}> {
  componentDidCatch(error: unknown) {
    let message: string = "Unexpected error";
    // TODO: make own generic error class to handle errors with user friendly messages
    if (error instanceof Error) {
      message = error.message;
    }
    console.log("App crashed with error: ", message);
    window.location.replace("/error");
  }

  render() {
    return this.props.children;
  }
}
