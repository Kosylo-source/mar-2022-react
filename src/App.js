import React from 'react';
import Characters from "./components/Characters";

function App(props) {
    return (
        <div>
<Characters
    id={1}
    name={"Rick Sanchez"}
    status={'Alive'}
        species={"Human"}
    gender={'Male'}
    image = {'https://upload.wikimedia.org/wikipedia/ru/a/a6/Rick_Sanchez.png'}
    alt={'Rick'}
/>

        </div>
    );
}

export default App;