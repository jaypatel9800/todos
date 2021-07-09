import React, { useEffect, useState } from "react";
import Diff from "./bottom";
import sun from "./images/icon-sun.svg"
import moon from "./images/icon-moon.svg"
import cross from "./images/icon-cross.svg";
import { Route } from "react-router-dom";
import "./style.css";

const App = () => {
  const [text, changetext] = useState("");
  const [item, addItem] = useState([]);
  const [active, changeActive] = useState([]);
  const [comp, addComp] = useState([]);
  const [count, changeCount] = useState("");
  const [mark, changeMark] = useState(false);
  const [darkTheme, setDarkTheme] = useState(getDefaultTheme())

  useEffect(() => {
    const addCount = () => {
      const a = item.map((a) => a.complete);
      const b = a.filter((a) => !a);
      changeCount(b.length);
      if(b.length !== 0){
        changeMark(false)
      }
    };
    localStorage.setItem('dark', JSON.stringify(darkTheme))
    addCount();
  });

  function getDefaultTheme() {
    const selectedTheme = JSON.parse(localStorage.getItem('dark'))
    return selectedTheme || false
  }

  const add = () => {
    if (text.length === 0) {
      return;
    } else {
      const addObj = {
        text: text,
        id: Date.now(),
        complete: false,
      };
      addItem(item.concat(addObj));
      changetext("");
    }
  };

  const marked = (id) => {
    const oldList = [...item];
    const newList = oldList.filter((a) => {
      if (a.id === id) {
        a.complete = !a.complete;
      }
      return a;
    });
    addItem(newList);
  };

  const clear = (id) => {
    const oldList = [...item];
    const actives = [...active];
    const cmplt = [...comp];
    const news = oldList.filter((a) => a.id !== id);
    const news2 = actives.filter((a) => a.id !== id);
    const news3 = cmplt.filter((a) => a.id !== id);
    addItem(news);
    changeActive(news2);
    addComp(news3);
  };
  const styles = {
    textDecoration : "line-through",
    opacity: 0.5
  };

  const activeItem = () => {
    const old = [...item];
    const active = old.filter((a) => !a.complete);
    changeActive(active);
    console.log(active);
  };

  const cmpltItem = () => {
    const old = [...item];
    const comp = old.filter((a) => a.complete);
    addComp(comp);
    console.log(comp);
  };
  const addText = (event) => {
    if (event.keyCode === 13 || event.which === 13) {
      add();
    }
  };
  const danger = () => {
    const old = [...item];
    const danger = old.filter((a) => !a.complete);
    addItem(danger);
    changeMark(false)
  };

  const markedAll = () => {
    const old = [...item];
    if(mark === false){
      const allMark = old.filter((a) => {
        if (a.complete === false) {
          a.complete = !a.complete;
          changeMark(true);
        }
        return a;
      });
      addItem(allMark)
    }else{
      const allUnMark = old.filter((a) => {
        if (a.complete === true) {
          a.complete = !a.complete;
        }
        changeMark(false);
        return a;
      });
      addItem(allUnMark)
    }
  };
  return (
      <div className={darkTheme ? 'dark' : 'light'}>
        <section>
        <div className="header">
            <h1>TODO</h1>
            <button onClick={()=> setDarkTheme(prevTheme => !prevTheme)} style={{cursor:"pointer"}}>
                <img src={darkTheme ? sun : moon} alt="moon/sun"/>
            </button>
        </div>
          <div className="mainInp">
            <div>
              <input
                type="checkbox"
                checked={mark}
                onClick={markedAll}
                className="checkbox"
                style={{cursor:"pointer"}}
              />
            </div>
            <input
              className="write"
              value={text}
              onChange={(e) => changetext(e.target.value)}
              onKeyPress={addText}
              placeholder="Create a new todo"
            />
          </div>
          <Route path="/" exact>
            <ul>
              {item.map((a) => (
                <li key={a.id}>
                  <div>
                    <input
                      type="checkbox"
                      checked={a.complete}
                      onChange={() => marked(a.id)}
                      className="checkbox"
                      style={{cursor:"pointer"}}
                    />
                    <h2 style={a.complete ? styles : null}>{a.text}</h2>
                  </div>

                  <button onClick={() => clear(a.id)}>
                    <img src={cross} alt="cross" />
                  </button>
                </li>
              ))}
            </ul>
          </Route>
          <Route path="/active">
            <ul>
              {active.map((a) => (
                <li key={a.id}>
                  <div>
                    <input
                      type="checkbox"
                      checked={a.complete}
                      onChange={() => marked(a.id)}
                      className="checkbox"
                    />
                    <h2 style={a.complete ? styles : null}>{a.text}</h2>
                  </div>
                  <button onClick={() => clear(a.id)}>
                    <img src={cross} alt="cross" />
                  </button>
                </li>
              ))}
            </ul>
          </Route>
          <Route path="/complete">
            <ul>
              {comp.map((a) => (
                <li key={a.id}>
                  <div>
                    <input
                      type="checkbox"
                      checked={a.complete}
                      onChange={() => marked(a.id)}
                      className="checkbox"
                    />
                    <h2 style={a.complete ? styles : null}>{a.text}</h2>
                  </div>
                  <button onClick={() => clear(a.id)}>
                    <img src={cross} alt="cross" />
                  </button>
                </li>
              ))}
            </ul>
          </Route>
          <div className="bottom">
            <p>{count} items left</p>
            <Diff activeItem={activeItem} cmpltItem={cmpltItem} add={add} />
            <button onClick={danger} style={{cursor:"pointer"}}>Clear Completed</button>
          </div>
        </section>
      </div>
  );
};

export default App;
