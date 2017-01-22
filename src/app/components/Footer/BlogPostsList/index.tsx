import * as React from 'react';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const MyQuery = gql`query {
  posts(user: "@patrickroza", collectionId: "645aa5e37697") {
    title
    excerpt
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
      <div className="col m6" key={item.url}>
        <div className="card">
          <div className="card-content">
          <span className="card-title">
          {item.title}
          </span>
          <div>
            <div><i>{item.excerpt}</i></div>
              <a target="_blank" href={item.url}>Read More</a>
            </div>
          </div>
        </div>
      </div>;
    const list = () =>
      <div className="row">
        {this.props.data.posts.map((item) => listItem(item))}
      </div>;
    return (
      <div>
        {this.props.data.loading ? <span>Loading...</span> : list()}
      </div>
    );
  }
}
