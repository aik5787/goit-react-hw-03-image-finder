import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Header,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  ButtonLabel,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = e => {
    const query = e.target.value;
    this.setState({ query }, () => {
      this.props.updateQuery(query);
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const trimmedQuery = this.state.query.trim();
    if (!trimmedQuery) {
      return;
    }
    this.props.onSubmit(trimmedQuery);
    this.setState({ query: '' });
  };

  render() {
    return (
      <Header>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <ButtonLabel role="img" aria-label="Search">
              &#128269;
            </ButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleChange}
          />
        </SearchForm>
      </Header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  updateQuery: PropTypes.func.isRequired,
};
