import {Component} from 'react'

import {
  Container,
  Heading,
  LowerContainer,
  ImgContainer,
  InputComponent,
  LabelComponent,
  ButtomComponent,
  ImgText,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    isDisplay: false,
    imgUrl: '',
    topText: '',
    bottomText: '',
    fontSize: fontSizesOptionsList[0].optionId,
  }

  onChangeInputValue = event => {
    this.setState({imgUrl: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({fontSize: event.target.value})
  }

  onSubmitMemeDetails = event => {
    event.preventDefault()
    this.setState({isDisplay: true})
  }

  render() {
    const {isDisplay, topText, bottomText, fontSize, imgUrl} = this.state
    console.log(fontSize)
    return (
      <Container data-testid="meme">
        <LowerContainer as="form" onSubmit={this.onSubmitMemeDetails}>
          <Heading>Meme Generator</Heading>
          <LabelComponent htmlFor="imageUrl">Image URL</LabelComponent>
          <InputComponent
            id="imageUrl"
            value={imgUrl}
            placeholder="https://assets.ccbp.in/frontend/react-js/nature-img.png"
            onChange={this.onChangeInputValue}
          />
          <LabelComponent htmlFor="titleText">Top Text</LabelComponent>
          <InputComponent
            id="titleText"
            value={topText}
            placeholder="I Love To Wake Up In The Morning"
            onChange={this.onChangeTopText}
          />
          <LabelComponent htmlFor="belowText">Bottom Text</LabelComponent>
          <InputComponent
            id="belowText"
            value={bottomText}
            placeholder="To See The Mornin Secenery"
            onChange={this.onChangeBottomText}
          />
          <LabelComponent htmlFor="selectFont">Font Size</LabelComponent>
          <InputComponent
            id="selectFont"
            value={fontSize}
            onChange={this.onChangeFontSize}
            as="select"
          >
            {fontSizesOptionsList.map(eachItem => (
              <InputComponent
                as="option"
                key={eachItem.optionId}
                value={eachItem.displayText}
              >
                {eachItem.displayText}
              </InputComponent>
            ))}
          </InputComponent>
          <ButtomComponent type="submit" onClick={this.onClickToGenerateImg}>
            Generate
          </ButtomComponent>
        </LowerContainer>
        {isDisplay && (
          <LowerContainer>
            <ImgContainer bgImg={imgUrl}>
              <ImgText size={fontSize}>{topText}</ImgText>
              <ImgText size={fontSize}>{bottomText}</ImgText>
            </ImgContainer>
          </LowerContainer>
        )}
      </Container>
    )
  }
}

export default MemeGenerator
