import 'cssrecipes-defaults/lib/document-remove-margin-padding.css';
import 'cssrecipes-defaults/lib/box-sizing.css';
import 'cssrecipes-defaults/lib/hidden.css';
import 'normalize.css/normalize.css';

import './assets/styles/main.scss';
import 'font-awesome/css/font-awesome.css';

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import Start from './components/start/start';

render(
  <Provider store={ store }>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Start } />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#app')
);

// Enables hot-reload without page refresh. Removed during `build`
if (module.hot) {
  module.hot.accept();
}
