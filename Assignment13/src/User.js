import React from 'react';
import './style.css';
import UserContext from './UserContext';
import React from 'react';

// context API
// export default class User extends React.Component {
//   static contextType = UserContext;

//   constructor(props) {
//     super(props);
//     this.state = {
//       new_user: '',
//     };
//   }

//   onChange = (e) => {
//     this.setState({ new_user: e.target.value }, () => {
//       console.log(this.state);
//     });
//   };

//   handleAddButton = () => {
//     console.log('clicked');
//     console.log('handleAddButton(): this.context =', this.context);
//     if (this.context.addNew) {
//       const new_name = this.state.new_user;
//       this.setState({ new_user: '' });
//       return this.context.addNew(new_name);
//     }
//   };

//   render() {
//     // const { users } = this.props;
//     // console.log('usrs', users);
//     // console.log('usrs', typeof users);

//     return (
//       <>
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//             </tr>
//           </thead>
//           <tbody>
//             {this.context.users.map((u) => (
//               <tr>
//                 <td>{u.name}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         <hr></hr>

//         <label>New Name: </label>
//         <input onChange={this.onChange} value={this.state.new_user}></input>
//         <button onClick={this.handleAddButton}>Add</button>
//       </>
//     );
//   }
// }

// redux & thunk
import { ChangeEventHandler } from 'react';
import store from '../redux/store';
import { updateUserAction } from '../redux/actions/userActions';

export default class User extends React.Component {
  constructor(props) {
    super(props);
    console.log(`this.props =`, this.props);
    this.state = {
      new_user: '',
    };
  }

  // onChange = (e) => {
  //   this.setState({ new_user: e.target.value }, () => {
  //     console.log(this.state);
  //   });
  // };

  handleChange = (e) => {
    //* sends the actions to the store synchronously, which the store will then send to the reducer
    store.dispatch(
      updateUserAction({
        ...this.props.users,
        new_user: e.target.value,
      })
    );
  };

  render() {
    const usrs = this.props.users;

    return (
      <>
        <table>
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {this.props.users.map((u) => (
              <tr>
                <td>{u.name}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <hr></hr>

        <label>New Name: </label>
        <input onChange={this.onChange} value={this.state.new_user}></input>
        <button onClick={this.handleAddButton}>Add</button>
      </>
    );
  }
}
