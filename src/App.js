import React , {useState} from 'react';
import "./App.css";
import Nav from './pages/Nav';
import Bar from './pages/Bar';
import Radar from './pages/Radar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Context from './Context';



function App() {
  const [html, setHtml] = useState(0);
     const [js1, setJS1] = useState(0);
     const [js2, setJS2] = useState(0);
     const [js3, setJS3] = useState(0);
     const [node, setNode] = useState(0);
     const [databases, setDatabase] = useState(0);
     const [react, setReact] = useState(0);

  return (
    <>
     <Context.Provider value = {{html, js1, js2, js3, node, databases, react}}>
      <Router>
        <Switch>
          <div className="app-container">
            <Nav/> 
            
            <Route path="/bar">
              <Bar html={html} js1={js1} js2={js2} js3={js3} node={node} databases={databases} react={react}/>
            </Route>

            <Route path= "/radar">
            <Radar html={html} js1={js1} js2={js2} js3={js3} node={node} databases={databases} react={react}/>
            </Route>
          </div>
      </Switch>
      </Router>
      <div>
        <div>
        <span>HTML/CSS</span>
        <input type="number" value={html} onChange={(e)=>setHtml(parseInt(e.target.value))} name="htmlcss"  min="1" max="10"/>
        </div>

        <div>
        <span>JS1</span>
        <input type="number" value={js1} onChange={(e)=>setJS1(parseInt(e.target.value))} name="htmlcss"  min="1" max="10"/>
        </div>

        <div>
        <span>JS2</span>
        <input type="number" value={js2} onChange={(e)=>setJS2(parseInt(e.target.value))} name="htmlcss"  min="1" max="10"/>
        </div>

        <div>
        <span>JS3</span>
        <input type="number" value={js3} onChange={(e)=>setJS3(parseInt(e.target.value))} name="htmlcss"  min="1" max="10"/>
        </div>

        <div>
        <span>NODEJS</span>
        <input type="number" value={node} onChange={(e)=>setNode(parseInt(e.target.value))} name="htmlcss"  min="1" max="10"/>
        </div>

        <div>
        <span>DATABASES</span>
        <input type="number" value={databases} onChange={(e)=>setDatabase(parseInt(e.target.value))} name="htmlcss"  min="1" max="10"/>
        </div>

        <div>
        <span>REACT</span>
        <input type="number" value={react} onChange={(e)=>setReact(parseInt(e.target.value))} name="htmlcss"  min="1" max="10"/>
        </div>
      </div>
    </Context.Provider> 

 </>
  );
}

export default App;
