let ryan = 'Ryan King';
let sally = 'Sally Smith';
let john = 'John Doe';
let amol = 'Amol Shookup';
let robin = 'Robin Banks';
let justin = 'Justin Tyme';

const element = /*#__PURE__*/React.createElement("ul", {
  style: {
    'color': 'blue',
    'fontSize': '24px'
  }
}, /*#__PURE__*/React.createElement("li", null, ryan), /*#__PURE__*/React.createElement("li", null, sally), /*#__PURE__*/React.createElement("li", null, john), /*#__PURE__*/React.createElement("li", null, amol), /*#__PURE__*/React.createElement("li", null, robin), /*#__PURE__*/React.createElement("li", null, justin));
ReactDOM.render(element, document.getElementById('content'));