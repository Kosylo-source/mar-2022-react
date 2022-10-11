import React, {Component} from 'react';

class Comment extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {email, name} = this.props.comment;
        return (
            <div>
                {email} -- {name}
            </div>
        );
    }
}

export {Comment};