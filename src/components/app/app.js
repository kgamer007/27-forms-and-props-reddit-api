import React from 'react';
import RedditList from '../list/list';
// import PokemonDetail from '../detail/detail';
import { fetchData } from '../../lib/utils';

import './app.scss';

const redditApi = 'https://www.reddit.com';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: [],
      loading: false,
    };
  }

  load = (url) => {
    this.setState({ loading: true });
    return fetchData(url)
      .then((data) => {
        console.log(data);
        
        this.setState({ loading: false });
        return data;
      })
      .catch(console.error); // eslint-disable-line
  }

  redditSearch = (search, limit) => {
    const url = `${redditApi}/r/${search}.json?limit=${limit}`;
    return this.load(url)
      .then((pages) => {
        console.log(pages);
        
        this.setState({ pages: pages.data.children });
      })
      .catch(console.error); // eslint-disable-line
  }

  // pokemonDetails = (event) => {
  //   const url = event.target.id;
  //   return this.load(url)
  //     .then((pokemon) => {
  //       this.setState({ pokemon });
  //     })
  //     .catch(console.error);
  // }

  // redditSearch = (search) => {
  //   const url = `${redditApi}/${search}`;
  //   return this.load(url)
  //     .then((pokemon) => {
  //       this.setState({ pokemon });
  //     })
  //     .catch(console.error); // eslint-disable-line
  // }

  render() {
    return (
      <main className="container">
        <RedditList 
          searchMethod={ this.redditSearch }
          pages={ this.state.pages }
          // pokemonLoader={ this.pokemonDetails }
        />
        {/* <PokemonDetail pokemon={this.state.pokemon} /> */}
      </main>
    );
  }
}
