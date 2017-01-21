import * as React from 'react';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const MyQuery = gql`query {
  posts(user: "@patrickroza", collectionId: "645aa5e37697") {
    title
    subtitle
    createdAt
    firstPublishedAt
    url
  }
}`;

@graphql(MyQuery)
export default class BlogPostsList extends React.Component<any, any> {
  public static propTypes = {
    data: React.PropTypes.shape({
      loading: React.PropTypes.bool.isRequired,
      posts: React.PropTypes.array,
    }).isRequired,
  };

  public render() {
    const listItem = (item) =>
      <li key={item.url}>
        <a className="grey-text text-lighten-3" href={item.url}>{item.title}</a>
      </li>;
    const list = () =>
      <ul>
        {this.props.data.posts.map((item) => listItem(item))}
      </ul>;
    return (
      <div>
        {this.props.data.loading ? <span>Loading...</span> : list()}
      </div>
    );
  }
}
