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
export default App;
