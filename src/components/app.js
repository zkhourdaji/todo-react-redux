import React from 'react';
import Home from './home'
import CompletedTodos from './completedTodos';
import { BrowserRouter, Link, Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteTodoAction } from '../redux/actionsCreators';
import Events from './events/events';


const App = (props) => {

    return (
        <BrowserRouter>
            <ul>
                <li><Link to='/todos'>Todos</Link></li>
                <li><Link to='/events'>Events</Link></li>
                <Route
                    path='/todos'
                    render={() =>
                        <li><Link to='/completed'>View Completed todos</Link></li>
                    }
                />
            </ul>

            <Switch>
                <Route exact path='/' render={() => <Redirect to='/todos' />} />
                <Route exact path='/todos' component={Home} />
                <Route exact path='/completed'
                    render={() => <CompletedTodos
                        completedTodos={props.completedTodos}
                        delete={props.delete}
                    />} />
                <Route exact path='/events' component={Events} />
            </Switch>

        </BrowserRouter>
    );

}

const mapStateToProps = state => ({
    completedTodos: state.todos.completed
});

const mapDispatchToProps = dispatch => ({
    delete: (id) => dispatch(deleteTodoAction(id))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
//export default App;