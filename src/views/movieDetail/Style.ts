import styled from "styled-components";

export const MovieMainContainter = styled.section`
position: relative;
z-index: 99;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 3rem;
padding: 1rem;
`;

export const MovieContent = styled.div`
max-width: 1100px;
width: 100%;

  .movies-info{
    padding: 1rem;
  }
  
  .stars{
    color: #FFA634;
  }
  
  .movie-content{
    margin: 2rem 0 3rem 0;
    
    h1{
      font-size: 4rem;
    }
    
    .movie-lang{
      margin: 1rem 0 1rem 0;
      
      span{
        font-weight: 700;
        color: #FFA634;
      }
    }
    
    .movie-desc{
      max-width: 800px;
      font-size: 1.5rem;
    }
  }
  
  .movie-button{
    text-decoration: none;
    color: #000;
    background-color: #FFA634;
    font-weight: 700;
    padding: 1rem 3rem;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    transition: .3s;
    
    &:hover{
      opacity: .6;
    }
  }


@media (max-width: 700px){
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  .movie-content{
    margin: 0 0 8rem 0;
  }

  .movie-content{
    margin: .5rem 0 3rem 0;
    
    h1{
      font-size: 2rem;
    }
    
    .movie-lang{
      margin: 2rem 0 .5rem 0;
      
    }
    
    .movie-desc{
      font-size: 1rem;
    }
  }
}
`;
  
export const MoviesCatalogo = styled.div`
display: flex;
gap: 3rem;
max-width: 1100px;
width: 100%;
padding: 1rem;

  img{
    max-width: 150px;
    width: 100%;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    transition: all ease 0.3s;
  
    &:hover {
        transform: scale(1.05); 
      }
  }


@media (max-width: 790px){
margin-top: 2rem;
gap: 2rem;
  img{
    width: 140px;
  }
}

@media (max-width: 700px){
display: none;
}

`;