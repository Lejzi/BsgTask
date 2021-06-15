import './styles/styles.sass';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReduxThunk from 'redux-thunk';

import userReducer from './store/reducers/user';

import Splash from './screens/Splash';
import Home from './screens/Home';
import Player from './screens/Player';

const rootReducer = combineReducers({
	user: userReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<div className='App'>
					<Switch>
						<Route exact path='/' component={Splash} />
						<Route exact path='/home' component={Home} />
						<Route exact path='/watch/:id' component={Player} />
					</Switch>
				</div>
			</Router>
		</Provider>
	);
};

export default App;
