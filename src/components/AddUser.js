import React from "react";

class AddUser extends React.Component{
    userAdd ={}
    constructor(props) {
        super(props);
        this.state = {
            userId: "",
            id: "",
            title: "",
            body: "",
        }
    }
    render() {
        return (
            <form ref={el => {this.myFrom = el}}>
                <input placeholder={"UserId"} onChange={el => this.setState({userId: el.target.value})}/>
                <input placeholder={"Title"} onChange={el => this.setState({title: el.target.value})}/>
                <textarea placeholder={"Body"} onChange={el => this.setState({body: el.target.value})}/>
                <button type={"button"} onClick={() => {
                    this.myFrom.reset()
                    this.userAdd = {
                        userId: this.state.userId,
                        title: this.state.title,
                        body: this.state.body,
                    }
                    if (this.props.user){
                        this.userAdd.id = this.props.user.id
                    }
                    this.props.onAdd(this.userAdd)
                }
                }>Добавить</button>
            </form>
        )
    }
}

export default AddUser