import React from "react";

class AddUser extends React.Component{
    userAdd ={}
    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            age: 1,
            isHappy: false
        }
    }
    render() {
        return (
            <form ref={el => {this.myFrom = el}}>
                <input placeholder={"Name"} onChange={el => this.setState({first_name: el.target.value})}/>
                <input placeholder={"LastName"} onChange={el => this.setState({last_name: el.target.value})}/>
                <textarea placeholder={"Biography"} onChange={el => this.setState({bio: el.target.value})}/>
                <input placeholder={"Age"} onChange={el => this.setState({age: el.target.value})}/>
                <label htmlFor={"isHappy"} >Счастлив?</label>
                <input type={"checkbox"} id={"isHappy"} onChange={el => this.setState({isHappy: el.target.checked})}/>
                <button type={"button"} onClick={() => {
                    this.myFrom.reset()
                    this.userAdd = {
                        first_name: this.state.first_name,
                        last_name: this.state.last_name,
                        email: this.state.email,
                        age: this.state.age,
                        isHappy: this.state.isHappy
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