import styled from "styled-components";

export const HomeContainer = styled.div`
height: 100vh;
`;

export const HeaderPerfil = styled.header`
padding: 1rem 2rem;
display: flex;
align-items: center;
justify-content: space-between;

  h1{
    background: linear-gradient(to left, #FF267A, #FFA634);
    -webkit-background-clip: text; 
    color: transparent; 
    font-weight: 400;
  }

`;


export const HomeMain = styled.main`
padding: 10px;
height: 700px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
  .mainDesc{
    text-align: center;
    margin-bottom: 5rem;
    h3{
      font-size: 4rem;
    }
    p{
      font-size: 1.5rem;
    }
  }
  .mainPerfis{
    display: flex;
    gap: 2rem;
    
    .card-link{
      text-decoration: none;
      color: #FFF;
      background-color: #222;
      border: 1px solid #FFA634;
      border-radius: 10px;  
      transition: .4s;

      &:hover{
        background-color: transparent;
      }
    }
    .perfil-card{
      padding: 5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;

      img{
        width: 100px;
      }
    }
  }


  @media (max-width: 900px){
    .mainDesc{
      text-align: center;
      h3{
        font-size: 3rem;
      }
      p{
        font-size: 1.2rem;
      }
    }
  }

  @media (max-width: 700px){
    height: 90vh;
    margin-top: 0;
    justify-content: center;
    .mainDesc{
      text-align: center;
      margin-bottom: 1rem;
      h3{
        font-size: 2rem;
      }
      p{
        font-size: 1rem;
      }
    }

    .mainPerfis{
      gap: 1rem;
      .perfil-card{
        padding: 3rem;
      }
    }
  }
  
  @media (max-width: 470px){
    justify-content: center;
    .mainDesc{
      text-align: center;
      margin-bottom: 3rem;
      h3{
        font-size: 1.5rem;
      }
      p{
        font-size: .8rem;
      }
    }

    .mainPerfis{
      gap: 1rem;
      .perfil-card{
        padding: 2rem;
      }
    }
  }
`;