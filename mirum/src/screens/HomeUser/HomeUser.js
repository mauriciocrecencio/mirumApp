import React from "react";
import "./HomeUser.scss";
import ParticlesBackground from "../../components/ParticlesBackground/ParticlesBackground";

class HomeUser extends React.Component {
  render() {
    return (
     
        <div className="container__home">
          <strong>Parabéns, você é nosso visitante número <span style={{color: '#E8B648'}}>1.000.000</span>!</strong>
          <strong>
            Cadastre-se agora e receba <span style={{color: '#E8B648'}}>seu prêmio</span> no conforto de sua casa
          </strong>
          <div className="container__button">
            <button
              className="button__register"
              onClick={() => this.props.handlePage("/register")}
            >
              Cadastro
            </button>
          </div>
        </div>
 
    );
  }
}

export default HomeUser;
