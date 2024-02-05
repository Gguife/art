import styled from "styled-components";

export const HeaderCotainer = styled.header`
position: fixed;
width: 100%;
top: 0;
z-index: 999;
`;

export const HeaderContent = styled.div`
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

  .header-nav{
    display: flex;
    align-items: center;
    gap: 2rem;
    
    a{
      text-decoration: none;
      color: #FFF;  
      transition: .3s;
      
      &:hover{
        color: #FFA634;
      }
    }

    p{
      cursor: pointer;
      transition: .3s;
      
      &:hover{
        color: #FFA634;
      }
    }
    .icon{
      font-size: 1.2rem;
      cursor: pointer;
      transition: .3s;
      
      &:hover{
        color: #FFA634;
      }
    }
  }


@media (max-width: 550px){
  p{
    display: none;
  }
}
`;