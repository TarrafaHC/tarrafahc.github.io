import React, { Component } from 'react'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import AboutHack from './pages/AboutHack'
import Activities from './pages/Activities'
import NavBar from './NavBar'
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <main>
        <NavBar />
        <section>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/aboutUs" component={AboutUs} />
            <Route path="/aboutHack" component={AboutHack} />
            <Route path="/activities" component={Activities} />
          </Switch>
        </section>
      </main>
    )
  }
}

export default App
