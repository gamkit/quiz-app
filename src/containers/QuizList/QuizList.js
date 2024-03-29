import React, {Component} from 'react'
// import axios from '../../axios/axios-quiz'
import {connect} from 'react-redux'

import classes from './QuizList.module.scss'
import {fetchQuizes} from '../../store/actions/quizAction'
import { NavLink } from 'react-router-dom'
import Loader from '../../components/ui/Loader/Loader'


class QuizList extends Component {

    
    renderQuizes() {
        return this.props.quizes.map((quiz, i) => {
            return (<li key={quiz.id}>
                <NavLink to={'/quiz/' + quiz.id}>
                    {quiz.name}
                </NavLink>
            </li>)
        })
    }

    componentDidMount() {
        this.props.fetchQuizes()
        /* 
         */
    }
    
    render() {
        return (
            <div className={classes.QuizList}>
                <h1>QuizList</h1>
                {
                this.props.loading && this.props.quizes.length !== 0
                    ?  <Loader/>
                    : <ul>{this.renderQuizes()}</ul>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        quizes: state.quiz.quizes,
        loading: state.quiz.loading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchQuizes: () => dispatch(fetchQuizes())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizList)