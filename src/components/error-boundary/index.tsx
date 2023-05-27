import { Component, ErrorInfo, ReactNode } from "react";

import S from "./index.module.css";

type Props = { children?: ReactNode };
type State = { error: Error | null; errorInfo: ErrorInfo | null };

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.clear();
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.error || this.state.errorInfo) {
      return (
        <div className={S.Error}>
          <div className="h-screen w-screen flex gap-4 flex-col justify-center items-center">
            <h2 className={S.Title}>Something went wrong.</h2>

            <div className={S.Actions}>
              <button className="button border" onClick={() => window.location.replace("/")}>
                Reload
              </button>
              <button className="button border" onClick={() => console.log(this.state.error)}>
                Crash Report
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
