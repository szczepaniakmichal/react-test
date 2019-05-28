import * as React from 'react'


const allUsers = [ 'Julia', 'Michał', 'Natasza', 'Paulina', 'Bartłomiej', 'Staś' ];

export default class ComF extends React.Component {
  constructor(){
    super();
    this.state = {
      filteredList: allUsers
    };
  }

  filterUser(e) {
    const text = e.currentTarget.value;
    const filteredList = this.getFilteredUsersForText(text)
    this.setState({
      filteredList
    })
  }

  getFilteredUsersForText(text){
    return allUsers.filter(user => user.toLowerCase().includes(text.toLowerCase()))
  }
  
  render() {
    const {title = 'static contact list'} = this.props;
    return(
      <div>
        <p>ComF {title}</p>
        <input onChange={this.filterUser.bind(this)} />
        <UsersList users={this.state.filteredList}> </UsersList>
      </div>
    ) 
  }
}

const UsersList = ({ users }) => {
  if (users.length > 0) {
    return (
      <ul>
        {users.map(user => <li key={user}>{user}</li>)}
      </ul>
    );
  }

  return (
    <p>No results!</p>
  );
};