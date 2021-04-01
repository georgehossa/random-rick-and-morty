import React, { useState } from 'react';
import { Container, Input, Star} from './StarRating.styles';
import { Theme } from '../../styles/Theme'


const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <Container>
      {
        [...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <label key={`star-${i}`}>
              <Input
                type='radio'
                name='rating'
                value={ratingValue}
                onClick={() => setRating(ratingValue)}  />
              <Star
                size={32}
                color={ ratingValue <= (hover || rating) ? Theme.colors.tertiary : Theme.colors.grey}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
                />
            </label>
          )
        })
      }
    </Container>
  );
}

export default StarRating;
