// 引入createStore，专门用于创建redux中最为核心的store对象
import { createStore } from 'redux'

import { countReducer } from './countReducer'

export default createStore(countReducer)