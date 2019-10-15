import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Login from './pages/login/Login'
import List from './pages/list/List'
import Book from './pages/book/Book'

const Routes = createAppContainer(
    createSwitchNavigator({
        Login, List, Book
    })
)

export default Routes