import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  padding: 4%;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`

export const Heading = styled.h1`
  font-size: 4vw;
  color: #35469c;

  @media (max-width: 768px) {
    font-size: 8vw;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    font-size: 5vw;
  }
`

export const LowerContainer = styled.div`
   width: 50%; 
   padding: 4%;
   @media (max-width:767px){
    width:100%
   }/
`


export const ImgContainer = styled.div`
  background-image: url('${props => props.bgImg}');
  background-size: cover;
  width: 100%;
  min-height: 100%;
  padding: 4%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 767px) {
    min-height: 300px;
  }
`

export const InputComponent = styled.input`
  width: 100%;
  padding: 2%;
  font-size: 2vw;
  color: #5a7184;
  border: 1px solid #5a7184; /
  background-color: transparent;
  border-radius:5px;
  color: #5a7184; 
  caret-color: #5a7184;
  font-size: 1vw;
  margin-bottom: 3%;

  &:focus {
    outline: none;
  }


  @media (max-width:767px) {
    margin-bottom:1%;
    font-size: 4vw;
  }

  @media (min-width:768px) and (max-width:1200px) {
    font-size: 2.5vw;
  }
`

export const LabelComponent = styled.label`
  font-size: 1vw;
  color: #5a7184;

  @media (max-width: 767px) {
    font-size: 4vw;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    font-size: 2vw;
  }
`

export const ButtomComponent = styled.button`
   background-color:#0b69ff;
   color:#ffffff;
   padding:2% 4%;
   border:none; 
   border-radius:4px;/
`

export const ImgText = styled.p`
  font-size:${props => props.size}px; 
  text-align:center;
  color: #ffffff;
  word-wrap: break-word;
  overflow-wrap: break-word;
  max-width: 100%;
  margin: 0;
  padding: 0;/
`
