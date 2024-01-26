import React from 'react';
import AddUser from './AddUser';
class User extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            editForm: false,
        }
    }
    render(){
        return(
            <div className="user">
                <button onClick={()=>this.props.onDelete(this.props.user.id)}className="delete-icon">Delete</button>
                <button onClick={()=>{
                    this.setState({
                        editForm : !this.state.editForm
                    })
                }}className="edit-icon">Edit</button>
                <h3>{this.props.user.firstname} {this.props.user.lastname}</h3>
                <p>{this.props.user.bio}</p>
                <b>{this.props.user.isHappy ? 'Счастлив :)' : 'Не особо :('}</b>
                {this.state.editForm && <AddUser user={this.props.user} onAdd={this.props.onEdit}/>}
            </div>
        )
    }
}

export default User; 
