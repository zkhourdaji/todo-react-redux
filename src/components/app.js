import React from 'react';
import Home from './home'
import CompletedTodos from '../todos/completedTodos';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteTodoAction } from '../redux/actionsCreators';
import Events from './events/events';
import Container from 'react-bootstrap/Container';
import Header from './header'


const App = (props) => {

    return (
        <BrowserRouter>
            <Header />
            <Container>
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
            </Container>
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