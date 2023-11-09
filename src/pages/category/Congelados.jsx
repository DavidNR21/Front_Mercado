import { ImagemTitulo } from "../../components/logo";
import { GiHamburgerMenu } from "react-icons/gi";
import {BiSearch} from "react-icons/bi"
import Sidebar from "../../components/Sidebar";
import {FiShoppingCart} from "react-icons/fi"
import { ConteinerHome, Headerhome } from "../../components/HeaderStyle";
import {BsPersonCircle} from "react-icons/bs";
import { Link } from "react-router-dom";
import{Boxinputheader, InputHeader} from "../../components/Inputstyle";
import { Svg } from "../../components/Sidebar";
import { TitleCategory, TitleConteiner } from "../../components/titles";
import { useState } from "react";
import BoxProdutos from '../../components/BoxProdutos'
import { DivProdutos } from '../../components/BoxProdutos';

const Congelados = ()=>{

 
    const [sidebar, setSidebar] = useState(false)

    const ShowSidebar = () => setSidebar (!sidebar)
    

    return(
<>


<Headerhome>
        <GiHamburgerMenu size={30} color="#222" onClick={ShowSidebar}/>
        {sidebar && <Sidebar active={setSidebar}/>}


        <ConteinerHome>
        <Boxinputheader>
         <InputHeader type='text'/>
         <BiSearch size={25} color="#222"/>
        </Boxinputheader>
     <Svg>
        <Link to="/Login">
          <BsPersonCircle size={30} color="#222"/>
          </Link>
      </Svg>
      
        <Link to="/Meu Carrinho">
          <FiShoppingCart size={30} color="#222"/>
          </Link>
     
        </ConteinerHome>
        </Headerhome>

      


  <TitleConteiner>
   <ImagemTitulo src="https://i.ibb.co/V22WPMG/congelados.jpg" alt="Congelados"/>
   <TitleCategory>Congelados</TitleCategory>

  </TitleConteiner>

<DivProdutos>

  <BoxProdutos
 ImgSrc="https://i.ibb.co/ZLKf0pY/kit-animais.jpg"
 DescricaoProduto="kit higiene para cachorros"
PrecoProduto="R$82,39"
 />

 </DivProdutos>
</>


    )
}


export default Congelados;