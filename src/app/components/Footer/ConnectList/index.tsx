import * as React from 'react';

export default class ConnectList extends React.Component<any, any> {
  public render() {
    return (
      <div>
        <a className="grey-text text-lighten-3" href="https://facebook.com/patrickroza.7"
          target="_blank">
          <img src={require('./facebook.png')} />
        </a>
        <a className="grey-text text-lighten-3" href="https://twitter.com/Patrick_Roza"
          target="_blank">
          <img src={require('./twitter.png')} />
        </a>
        <a className="grey-text text-lighten-3" href="https://github.com/sickboy"
          target="_blank">
          <img src={require('./github.png')} />
        </a>
        <a href="https://www.linkedin.com/in/patrick-roza-651107137">
          <img src={require('./linkedin.png')} />
        </a>
        <a href="https://plus.google.com/u/0/118082603933712729435"
          target="_blank">
          <img src={require('./googleplus.png')} />
        </a>
        <a href="skype:live:patrickroza_3">
          <img src={require('./skype.png')} />
        </a>
      </div>
    );
  }
}
