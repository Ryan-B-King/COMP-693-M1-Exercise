let ryan = 'Ryan King'
let sally = 'Sally Smith'
let john = 'John Doe'
let amol = 'Amol Shookup'

const element = (
        <ul style = {{'color': 'blue', 'fontSize': '24px'}}>
            <li>{ryan}</li>
            <li>{sally}</li>
            <li>{john}</li>
            <li>{amol.toUpperCase()}</li>
        </ul>
        )

ReactDOM.render(element, document.getElementById('content'))