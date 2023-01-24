import React from 'react';
import './style.css';
import Child from './child.js';
import ChildContext from './childContext';

import User from './User';
import UserContext from './UserContext';

// question 1:
// method 1: using props
// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       language: ['JavaScript', 'Java'],
//       current_pointer: 0,
//     };
//   }

//   updateLang = (pre_pointer) => {
//     this.setState(
//       pre_pointer === 1 ? { current_pointer: 0 } : { current_pointer: 1 }
//     );
//   };

//   render() {
//     return (
//       <div>
//         <h1>Parent Component</h1>
//         <Child
//           current_pointer={this.state.current_pointer}
//           updateLang={this.updateLang}
//         />
//         <p>{this.state.language[this.state.current_pointer]}</p>
//       </div>
//     );
//   }
// }

// method 2: using context API
// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       language: ['JavaScript', 'Java'],
//       current_pointer: 0,
//     };
//   }

//   updateLang = (pre_pointer) => {
//     this.setState(
//       pre_pointer === 1 ? { current_pointer: 0 } : { current_pointer: 1 }
//     );
//   };

//   render() {
//     return (
//       <div>
//         <h1>Parent Component</h1>
//         <ChildContext.Provider
//           value={{
//             updateLang: this.updateLang,
//           }}
//         >
//           <Child
//             current_pointer={this.state.current_pointer}
//             updateLang={this.updateLang}
//           />
//           <p>{this.state.language[this.state.current_pointer]}</p>
//         </ChildContext.Provider>
//       </div>
//     );
//   }
// }

// question 2:
/*
1. fetch data
2. display their name
3. add a row of new user info
*/

// method 1: context API
// export default class App extends React.Component {
//   static contextType = UserContext;

//   constructor(props) {
//     super(props);
//     this.state = { users: [] };
//   }

//   fetchData() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((res) => res.json())
//       .then((data) => this.setState({ users: data }))
//       .catch((e) => console.error(e));
//   }

//   componentDidMount() {
//     this.fetchData();
//   }

//   addNew = (new_user) => {
//     // add new user to state, instead of context;
//     const usr_arr = this.state.users;
//     const new_obj = new Object({ name: new_user });
//     usr_arr.push(new_obj);
//     this.setState({ users: usr_arr });
//   };

//   render() {
//     return (
//       <>
//         <UserContext.Provider
//           value={{
//             users: this.state.users,
//             addNew: this.addNew,
//           }}
//         >
//           <User />
//         </UserContext.Provider>
//       </>
//     );
//   }
// }

// method 2: redux and thunks
import store from '../redux/store';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  fetchData() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => this.setState({ users: data }))
      .catch((e) => console.error(e));
  }

  // componentDidMount() {
  //   this.fetchData();
  // }

  render() {
    const products = Object.values(store.getState().user);
    console.log(
      'store.getState().users =',
      //*store.getState(): returns the current state
      store.getState().users
    );

    return (
      <div className="App">
        <User users={this.state.users} />
      </div>
    );
  }

  componentDidMount() {
    this.fetchData();
    //* subscribe to the store when this component mount
    store.subscribe(() => {
      this.forceUpdate();
    });
  }
}
