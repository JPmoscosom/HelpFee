import styled from 'styled-components'; 

export const MainContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 80vh;
    width: 30vw;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(8.5px);
    border-radius: 10px;
    color: white;
    text-transform: uppercase;
    letter-spacing: 0.4rem;
    @media only screen and (max-width: 320px){
        width: 80vw;
        height: 90vh;
        hr {
            margin-bottom: 0.3rem;
        }
        h4{
            font-size:small;
        }
    }
`;

export const WelcomeText = styled.h2`
    margin: 3rem 0 2rem 0; 
    
`;

export const InputContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 20%;
    width: 100%
`;

export const ButtonContainer = styled.div`
    margin: 1rem 0 2rem 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LoginWith = styled.h5`
    margin-top: 3rem;
    cursor: pointer;
`;

export const HorizontalRule = styled.hr`
    width: 90%;
    height: 0.3rem;
    border-radius: 0.8rem;
    border: none;
    margin: 1.5em 0 1rem 0;
    background: var(--gradient-bar);
    backdrop-filter: blur(25px);
`;

export const IconsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 2rem 0 3rem 0;
    width: 80%;
`;

export const ForfotPassword = styled.h4`
    cursor:pointer;
`;