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

  // Changing state Function after input change

  handleChange = e => {
    const query = e.target.value;
    this.setState({ query }, () => {
      this.props.updateQuery(query);
    });
  };

  // Submit of request

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
          <SearchFormButton type="submit" aria-label="Search">
            <ButtonLabel>&#128269;</ButtonLabel>
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

// propTypes

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  updateQuery: PropTypes.func.isRequired,
};
