import Styled from "styled-components"
import { Removebutton } from "./buttonstyle";
import { ProdutoCarrinhoimg } from "./logo";
import { Titleprecocarrinho, TitleTotalcarrinho, Produto1} from "./titles";


export const MetodosCarrinho = Styled.div`
width: 405px;
height: 69px;
background-color: #fff;
display: flex;
align-items: center;
align-self: center;

`;


export const PontoChave = Styled.div`
width: 448px;
height: 700px;
border-radius: 5px;
background-color: rgba(237, 238, 240, 0.80);
position: absolute;
top: 0%;
left: 68%;
margin-top: 180px;

`;


export const BoxProdutosCarrinho= Styled.div`
width: 864px;
height: 152px;
border-radius: 15px;
background-color: #EDEEF0;
margin: 20px;

`;

export const MetodoPag = Styled.div`

`;

const Boxcarrinho =({SrcFoto, Preco, TotalProduto, TituloProduto})=>{

    return (
        <>
        <BoxProdutosCarrinho>
         <ProdutoCarrinhoimg src={SrcFoto} alt="Produto"/>
         <Produto1>{TituloProduto}</Produto1>
         <Removebutton>Remove</Removebutton>
         <Titleprecocarrinho>{Preco}</Titleprecocarrinho>
         <TitleTotalcarrinho>{TotalProduto}</TitleTotalcarrinho>

        </BoxProdutosCarrinho>
        
        
        
        </>
    )
}


export default Boxcarrinho;