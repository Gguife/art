import styled from "styled-components";

export const CardMainContainer = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

  a {
  background-color: #222;
  text-decoration: none;
  border-radius: 10px;
  padding-bottom: 0.5rem;
  transition: all ease 0.3s;
  
    &:hover {
      transform: scale(1.05); 
    }
  }
  
  .movie-img img {
    max-width: 350px;
    border-radius: 10px 10px 0 0;
  }
  
  .movie-info {
    padding: 0.5rem 0;
    text-align: center;
    color: #121214;
    font-size: 0.8rem;
    font-weight: 700;
  }

  @media (max-width: 900px){
    .movie-img img {
      max-width: 300px;
    }
  }
`;
