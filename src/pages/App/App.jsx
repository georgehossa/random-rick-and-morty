import React, {useEffect, useState} from 'react';
// import PropTypes from 'prop-types';
import { AppWrapper, Wrapper, Name, InfoWrapper, Button } from './App.styles';
import Image from '../../components/Image';
import StarRating from '../../components/StarRating';


const App = () => {
  const [character, setCharacter] = useState();
  const randomNumberInRange = (min, max) => Math.floor(Math.random() * (max - min) + min);
  const getData = async () => {
    const URL = `https://rickandmortyapi.com/api/character/${randomNumberInRange(1, 671)}`;
    try {
      const response = await fetch(URL);
      const result = await response.json();
      return setCharacter(result);
    } catch (e) {
      console.error(e);
    }
  }

  const handleClick = (e) => {
    e.preventDefault()
    getData();
  }

  useEffect(() => {
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return(
    <AppWrapper>
      <Wrapper>
        <InfoWrapper>
          <Name>{character?.name}</Name>
          <StarRating />

          <Button onClick={handleClick}>Next</Button>
        </InfoWrapper>
        <Image source={character?.image} alt={character?.name}/>

      </Wrapper>
    </AppWrapper>
  );
}

export default App;
