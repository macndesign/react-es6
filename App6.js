import React from 'react';


class App6 extends React.Component {
    constructor() {
        super();

        this.state = {data: [
            {id: 1, name: 'Simon Bailey'},
            {id: 2, name: 'Mário Chaves'},
            {id: 3, name: 'Milson Feitos'},
            {id: 4, name: 'Ana Caroline'},
            {id: 5, name: 'Andréa Negreiros'},
            {id: 6, name: 'Mário Filho'},
            {id: 7, name: 'Ana Jerusa'}
        ]};
    }

    render() {
        let rows = this.state.data.map(person => {
            return <PersonRow key={person.id} data={person} />
        });

        return <table>
            <tbody>{rows}</tbody>
        </table>
    }
}

const PersonRow = (props) => {
    return <tr>
        <td>{props.data.id}</td>
        <td>{props.data.name}</td>
    </tr>
};

export default App6;
