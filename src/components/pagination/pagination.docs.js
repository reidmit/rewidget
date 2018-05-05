import React from 'react';
import Pagination from './pagination';
import { DocPage, Example } from '../../../docs/components';

export default class PaginationDocs extends React.Component {
  state = {
    ex1: 8,
    ex2: 12,
    ex3: 1,
    ex4: 5
  };

  render() {
    return (
      <DocPage component={Pagination}>
        <Example {...{ title: 'Pagination with 8 total pages' }}>
          <Pagination
            totalPages={8}
            currentPage={this.state.ex1}
            onPageChange={ex1 => this.setState({ ex1 })}
          />
        </Example>
        <Example {...{ title: 'Pagination with 24 total pages' }}>
          <Pagination
            totalPages={24}
            currentPage={this.state.ex2}
            onPageChange={ex2 => this.setState({ ex2 })}
          />
        </Example>
        <Example {...{ title: 'Pagination without first/last buttons' }}>
          <Pagination
            totalPages={10}
            currentPage={this.state.ex3}
            onPageChange={ex3 => this.setState({ ex3 })}
            hideFirstLast
          />
        </Example>
        <Example {...{ title: 'Pagination without previous/next buttons' }}>
          <Pagination
            totalPages={10}
            currentPage={this.state.ex4}
            onPageChange={ex4 => this.setState({ ex4 })}
            hidePrevNext
          />
        </Example>
      </DocPage>
    );
  }
}
