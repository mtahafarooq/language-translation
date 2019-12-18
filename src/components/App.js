import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../context/LanguageContext';
import LanguageSelector from './LanguageSelector';
class App extends React.Component {

    state = {language: 'english'}

    onLanguageChange = (language) => {
        this.setState({language})
    }
    render () {
        return (
            <div className="ui container">
                <LanguageSelector onLanguageChange={this.onLanguageChange}/>
                {this.state.language}
                <LanguageContext.Provider value={this.state.language}>
                    <UserCreate/>
                </LanguageContext.Provider>
            </div>
        )
    }
}

export default App;