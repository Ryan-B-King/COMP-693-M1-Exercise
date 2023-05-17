let ryan = 'Ryan King'
let sally = 'Sally Smith'
let john = 'John Doe'
let amol = 'Amol Shookup'
let robin = 'Robin Banks'
let justin = 'Justin Tyme'

const element = (
        <ul style = {{'color': 'blue', 'fontSize': '24px'}}>
            <li>{ryan}</li>
            <li>{sally}</li>
            <li>{john}</li>
            <li>{amol}</li>
            <li>{robin}</li>
            <li>{justin}</li>
        </ul>
        )

ReactDOM.render(element, document.getElementById('content'))