#### redux的三个核心
```javascript
 Action
 Reducer
 Store
```
#### redux的工作流程
```javascript
 react组件会在redux中派发一个action方法,通过store.dispatch方法,将action对象派发给store,当store接收到action对象，会将先前的state和action对象一同发给reducer,reducer在接收到数据后，进行数据的更改，返回一个新的状态给store,最后由store更改数据
```
#### redux的API
```javascript
 createStore
 applyMiddleware
 combineReducers
```
#### Redux的三大原则
```javascript

```
#### redux-thunk异步编程
```javascript

```