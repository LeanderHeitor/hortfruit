import React, { Component } from "react";
import alface from "./imagens/alface.png";
import laranja from "./imagens/laranja.png";
import cereja from "./imagens/cereja.png";
import cenoura from "./imagens/cenoura.png";
import manga from "./imagens/manga.png";
import limao from "./imagens/limao.png";
import beterraba from "./imagens/beterraba.png";
import tomate from "./imagens/tomate.png";
import carrinho from "./imagens/carrinho.svg";
import mais from "./imagens/mais.svg";
import menos from "./imagens/menos.svg";
import "./App.css";

export class App extends Component {
  state = {
    produtos: [
      { imagem: `${alface}`, titulo: "Alface" },

      { imagem: `${manga}`, titulo: "Manga" },

      { imagem: `${laranja}`, titulo: "Laranja" },

      { imagem: `${limao}`, titulo: "Limão" },

      { imagem: `${cereja}`, titulo: "Cereja" },

      { imagem: `${beterraba}`, titulo: "Beterraba" },

      { imagem: `${cenoura}`, titulo: "Cenoura" },

      { imagem: `${tomate}`, titulo: "Tomate" },
    ],
  };
  render() {
    return (
      <>
        <header>
          <h1 className="tituloHeader">Hortifruti</h1>
          <p className="subtituloHeader">VnW</p>
        </header>

        <body>
          <h2 className="mainText">Nossos Produtos</h2>
          <div className="mainPage">
            <section className="map">
              {this.state.produtos.map((item) => (
                <>
                  <div>
                    <img className="produtos" src={item.imagem} />
                  </div>
                </>
              ))}
            </section>
            <div className="compras">
              <section className="boxproduto">
                <img className="carro" src={carrinho} width="75px"></img>
                <p className="boxtext">
                  Arraste o seu produto aqui para colocar no carrinho
                </p>
              </section>
              <section className="maisemenos">
                <img src={mais} width="43px"></img>
                <img src={menos} width="43px"></img>
              </section>
            </div>
          </div>
        </body>
      </>
    );
  }
}

export default App;
