// import React from 'react'
// let marked = require("marked")


// export default class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       markdown: "",
//     }
//   }

//   updateMarkdown(markdown) {
//     this.setState({ markdown })
//   }

//   render() {
//     return (
//       <div>
//       <main className="mt-10">
//             <div className="container mx-auto bg-cyan-900 rounded-xl drop-shadow-2xl">
//                 <div className="grid grid-cols-4 gap-4 rounded-xl">
//                     <div class="col-start-1 col-end-5 bg-cyan-500 text-xl text-center rounded-xl p-4 text-white">Editor</div>
//                     <div class="col-start-1 col-end-5  text-xl  m-5 ">
//                         <textarea id="editor" cols="158" rows="10" className="bg-cyan-600 rounded-xl text-white p-3" 
//                         value={this.state.markdown} onChange={(e) => this.updateMarkdown(e.target.value)}>
  
//                         </textarea>
//                     </div>
//                 </div>
//             </div>
//             <div><h4>Preview</h4></div>
//             <div dangerouslySetInnerHTML={{__html: marked(this.state.markdown) }} ></div>
//         </main>
//     </div>
//     )
//   }
// }

import React from "react";
import Badge from "react-bootstrap/Badge";
let marked = require("marked");

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: "",
    };
  }

  updateMarkdown(markdown) {
    this.setState({ markdown });
  }

  render() {
 
    var inputStyle = {
      width: "400px",
      height: "50vh",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px",
    };
    var outputStyle = {
      width: "400px",
      height: "50vh",
      backgroundColor: "#DCDCDC",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px",
    };

    return (
      <div className="App">
        <div className="container">
          <div className="row mt-4">
            <div className="col text-center">
              <h1>
                {" "}
                <Badge className="text-align-center" variant="light">
                  Markdown Previewer
                </Badge>
              </h1>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-6">
              {" "}
              <div className="col text-center">
                <h4>
                  <Badge className="text-align-center" variant="secondary">
                    Markdown Input
                  </Badge>
                </h4>
              </div>
              <div className="input" style={inputStyle}>
                <textarea
                  className="input"
                  style={inputStyle}
                  value={this.state.markdown}
                  onChange={(e) => {
                    this.updateMarkdown(e.target.value);
                  }}
                >
                </textarea>
              </div>
            </div>

            <div className="col-md-6">
              {" "}
              <div className="col text-center">
                <h4>
                  <Badge className="text-align-center" variant="secondary">
                    Preview
                  </Badge>
                </h4>
              </div>
              <div
                style={outputStyle}
                dangerouslySetInnerHTML={{
                  __html: marked(this.state.markdown),
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}