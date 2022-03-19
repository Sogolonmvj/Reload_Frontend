import React, { useState, useEffect } from 'react';

import RightCard from '../Components/Card/RightCard';

import { Division, UnorderedList, Item } from '../Styles/rightContainer';

import { leftApi } from '../api/api';

const RightContainer = () => {

  const [organs, setOrgans] = useState([]);

  useEffect(() => {
    fetch(leftApi)
      .then(res => {
        if(!res.ok) throw new Error('Error in fetching API!');
        return res.json()
      })
      .then(data => {
          setOrgans(data.bodyparts)
      })
      .catch(Error => console.log("Error:" + Error))
  }, [])

  return (
    <Division>
      <UnorderedList>
        {organs.map((organ) => {
          if (organ.id <= 3) {
            return (
              <Item key={organ.id}>
                <RightCard name={organ.name} image={organ.image} alt="body part image" />
              </Item>
            )
          } else return null
        })}
      </UnorderedList>
      <UnorderedList>
        {organs.map((organ) => {
          if (organ.id > 3) {
            return (
              <Item key={organ.id}>
                <RightCard name={organ.name} image={organ.image} alt="body part image" />
              </Item>
            )
          } else return null
        })}
      </UnorderedList>
    </Division>
  )
}

export default RightContainer