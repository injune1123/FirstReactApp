import React from 'react'; // import react
import SearchGithub from './SearchGithub';
// create a react component

const Main = ({history, children}) => {
	return (
			<div className="Main-container">
				<nav className="navbar navbar-default" role="navigation">
					<div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
						<SearchGithub history={history}/>
					</div>
				</nav>
				<div className="container">
					{children}
				</div>
			</div>
	)
}

export default Main;
