import React from 'react';
import PropTypes from 'prop-types';

import './list.scss';

export default class CatList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }
}