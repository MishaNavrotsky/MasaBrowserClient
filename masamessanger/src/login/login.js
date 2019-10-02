import React from 'react';

class Login extends React.Component {
    constructor(props){
        super(props);
        console.log(this.props);
    }


    render(){
        return (
            <div>
                <div>
                    <input></input>
                    <input type="password"></input>
                    <button>Login</button>
                </div>
                <div>
                    <input type="checkbox"></input>
                    <span>Remember me</span>
                </div>
                <div>
                    <a>Forget password</a>
                </div>
            </div>
        )
    }
}

export default Login;
