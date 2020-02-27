import React, { Fragment } from 'react';
import * as ReactRedux from 'react-redux'
import GlobalStyle from './Assets/Styles'
import { IconAir, StyleHeader } from './Assets/Styles'
import Main from './pages/Main/index'
import store from '../redux/configureStore'

const App = () => {
  return (
    <Fragment>
      <ReactRedux.Provider store={store}>
        <GlobalStyle />
        <StyleHeader> <IconAir /> <span>Airport Tegra</span> </StyleHeader>
        <Main />
      </ReactRedux.Provider>
    </Fragment>
  );
}

export default App;