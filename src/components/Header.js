import React from "react";

class HeaderClass extends React.Component{
    render(){
        return(
            <header className="header">
                {this.props.title}
            </header>
        )
    }
}

export default HeaderClass;