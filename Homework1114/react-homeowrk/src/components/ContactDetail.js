import React from 'react';
import Contact from './Contact';

export default class ContactDetail extends React.Component{
    render(){
        const details = (
                <div>
                    <p>{this.props.contact.name}</p>
                    <p>{this.props.contact.password}</p>
                </div>          
                );
        const blank =  (    <div>NotSelected</div>          );

        return (
            <div>
                {this.props.isSelected ? details : blank}
            </div>
        );
    }
}

//초기화
ContactDetail.defaultProps = {
    contact : {
        name :'',
        phone : ''
    }
};