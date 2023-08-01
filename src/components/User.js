import React from "react";
import AddUser from "./AddUser";
import { IoCloseCircleSharp, IoHammerSharp } from "react-icons/io5";

class User extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            editForm: false
        }
    }
    user = this.props.user
    render() {
        return (<div className={"user"}>
                <IoCloseCircleSharp onClick={() => this.props.onDelete(this.user.id)} className={"delete-icon"} />
                <IoHammerSharp onClick={() => {
                    this.setState({
                        editForm: !this.state.editForm
                    })
                }
                } className={"edit-icon"} />
                <h3>{`UserId: ${this.user.userId}`}</h3>
                <h4>{`Id:  ${this.user.id}`}</h4>
                <b>{this.user.title}</b>
                <p>{this.user.body}</p>

                {this.state.editForm && <AddUser user={this.user} onAdd={this.props.onEdit} />}
            </div>
        )
    }
}

export default User