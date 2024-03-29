import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

import Backdrop from '../../ui/Backdrop/Backdrop'

import classes from './Drawer.module.scss'


// Ставим ссылки для основного меню
const links = [
    {to: '/', label: 'Список', exact: true},
    {to: '/auth', label: 'Авторизация', exact: false},
    {to: '/quiz-creator', label: 'Создать тест', exact: false}
]

export default class Drawer extends Component {
    
    clickHandler = () => {
        this.props.onClose() // При клике на ссылку меню закрывается
    }

    renderLinks = () => {
        return links.map((link, i) => {
            return (<li key={i}>
                <NavLink to={link.to} 
                        exact={link.exact}
                        activeClassName={classes.active}
                        onClick={this.clickHandler}>
                    {link.label}
                </NavLink>
            </li>)
        })
    }
    
    render() {

        const cls = [classes.Drawer]

        if(!this.props.isOpen) {
            cls.push(classes.close)
        }
        
        return (<React.Fragment>

            <nav className={cls.join(' ')}>
                <ul>
                    {this.renderLinks()}
                </ul>
            </nav>
            { this.props.isOpen ? <Backdrop onClick={this.props.onClose}/> : null }
        </React.Fragment>)
     }
}

 