import React, { Component } from 'react';

interface Props {
    product: { name: string, id: string, items: any, type: string, value: string }
}

class OtherAttributes extends Component<Props> {

    render() {
        let otherAttributes = this.props.product.items.map((item: any) => {
            return <li>{item.value}</li>
        });

        return (
            <>
                <div className="other-attributes">
                    <span className="other-attributes-title">{this.props.product.name}:</span>
                    <ul className="other-attributes-collection">
                        {otherAttributes}
                    </ul>
                </div>
            </>
        );
    }
}

export default OtherAttributes;
