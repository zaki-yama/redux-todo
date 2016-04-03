Redux Todo App
--------------

http://redux.js.org/docs/basics/index.html

- Actions
- (Action Creators)
- Reducers
- Store

### Actions

plain な JavaScript オブジェクト。`store.dispatch()` によって Store に送られる。

```javascript
// action type
const ADD_TODO = 'ADD_TODO';

// action
{
  type: ADD_TODO,  // type 必須
  text: 'Build my first Redux app'
}
```

### Action Creators

Action を生成する function。シンプルに Action を返す。

```javascript
export function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  };
}
```

### Reducers

Action によって state がどう変化するかを定義する。
現在の state と Action を受け取り、新しい state を返す関数。

reducer という名前は Array.prototype.reduce() から来ている。

```javascript
function todoApp(state, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      });
    // ...
  }
}
```

state 内の各項目に依存関係がないとき、reducer を項目ごとに分割することができる。
これを **reducer composition** と呼ぶ。

