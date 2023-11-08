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


import { useRef , forwardRef } from "react";

/*function Test(props,ref) {
  return(<input ref={ref} type="text" {...props}/>);
}

Test = forwardRef(Test)*/

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
}
export default App;
