import React,{Component} from 'react';
import MenuKontak from "./Page/MenuKontak";
import MenuProduct from "./Page/MenuProduct";
import MenuTentangKami from "./Page/MenuTentangKami";
import MenuUtama from "./Page/MenuUtama";
const Header = () => {
  return(
    <div>
      <h1><b>ini Halaman Untuk Header</b></h1>
    </div>
  )
}

const Footer = () => {
  return(
    <div>
      <h1><b>ini Halaman Untuk Footer</b></h1>
    </div>
  )
}

class App extends Component{
  render(){
    return (
      <div>
        <Header/>
        <MenuUtama/>
        <MenuProduct/>
        <MenuKontak/>
        <MenuTentangKami/>
        <Footer/>
      </div>
    );
  }
}

export default App;
