/*import logo from "./logo.svg";
import './Style.css';
import Button from './components/Buttons.js';
import Tab from './components/Tab.js';
function App() {
  return (
    <div className="Test">
      <h2 className="bg-red-500 text-xxl font-semibold text-opacity-100 text-white">asfsadfs dasdfsad</h2>
      <Button>Profil</Button>
      <Button variant="success">Giriş Yap</Button>
      <Button variant="danger">Çıkış Yap</Button>
      <br /><br /><br />

      <Tab activeTab={0}>
        <Tab.Panel title="Profil">Profil Sayfası</Tab.Panel>
        <Tab.Panel title="İletişim">İletişim Sayfası</Tab.Panel>
      </Tab>
    </div>
  );
}*/
/* Bir Kaç Basit İşlem
import { useState } from "react";
import Test from "./Test";

function App() {

  const [show,setShow] = useState(false);

  return (
    <>
      <button onClick={()=> setShow(show => !show)}>{show ? 'Gizle' : 'Göster' }</button>
      {show && <Test />}
    </>
  );
}
*/
/* useRef - forwardRef */


/*import { useRef , forwardRef } from "react";

function Test(props,ref) {
  return(<input ref={ref} type="text" {...props}/>);
}

Test = forwardRef(Test)

//Ya Da

const Test = forwardRef((props,ref) => {
  return(<input ref={ref} type="text" {...props}/>);
});

function App() {

  const inputRef = useRef();
  const inputRefTwo = useRef();

  const focusInput = () =>{
      inputRefTwo.current.focus()
  }

  return (
    <>
      <input type="text" ref={inputRef}/>
      <Test ref={inputRefTwo} />
      <button onClick={focusInput}>Focusla</button>
    </>
  );
}*/

/* Örnek Todo Uygulaması */

/*
import { useState } from "react";

function App() {

  const [todos,setTodos] = useState([]);
  const [todo,setTodo] = useState();

  function addToDo(e){
      e.preventDefault();
      setTodos([...todos,todo]);
      setTodo('');
  }

  return (
    <form onSubmit={addToDo}>
      <input type="text" value={todo || ''} onChange={e=>setTodo(e.target.value)}/>
      <button type="submit">Ekle</button>

      <ul>
      {todos.map((todo,index)=>(
        <li key={index}>{todo}</li>
      ))}
      </ul>
    </form>
  );
}
*/

/* Örnek Todo Uygulaması useReducer */


import { useState , useReducer } from "react";

function exReducer(state,action){
  switch (action.type) {
    case "SET_TODO":
      return {
        ...state,
        todo: action.value
      }
    
    case "ADD_TODO":
      return {
        ...state,
        todo:'',
        todos:[...state.todos,action.todo]
      }
  }
}

function App() {
  const [state,dispatch] = useReducer(exReducer,{
    todos: [],
    todo: ''
  }); 

  function addToDo(e){
      e.preventDefault();
      dispatch({
        type:'ADD_TODO',
        todo:state.todo
      })
  }

  return (
    <form onSubmit={addToDo}>
      <input type="text" value={state.todo || ''} onChange={e=>dispatch({type:'SET_TODO',value:e.target.value})}/>
      <button type="submit">Ekle</button>

      <ul>
      {state.todos.map((todo,index)=>(
        <li key={index}>{todo}</li>
      ))}
      </ul>
    </form>
  );
}
export default App;
