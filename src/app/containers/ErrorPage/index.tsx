import * as React from 'react';

export default class ErrorPage extends React.Component<any, void> {
  // TODO: Set redux error state so we can pick it up as 404 state on SSR?
  public render() {
    return (
      <div className="container">
        <h2>Woops! It appears this page doesn't exist</h2>
      </div>
    );
  }
}
