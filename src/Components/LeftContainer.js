import React, { useEffect, useState } from 'react'

import Card from './Card/Card';

import { SearchBoxComponent, TextField, Parts, UnorderedList, List } from '../Styles/leftContainer';

import { api } from '../api/api';

const LeftContainer = (props) => {

  const [bodyParts, setBodyParts] = useState([]);
  const [searchedPart, setSearchedPart] = useState('');

  useEffect(() => {
    fetch(api)
      .then(res => {
        if(!res.ok) throw new Error('Error in fetching API!');
        return res.json()
      })
      .then(data => {
          setBodyParts(data.bodyparts)
      })
      .catch(Error => console.log("Error:" + Error))
  }, [])

  const filteredParts = bodyParts.filter(bodyPart => {

    if (searchedPart === "") {
      return bodyPart;
    } else if (bodyPart.bodypart.toLowerCase().includes(searchedPart.toLowerCase())) {
      return bodyPart;
    }
    
  })

  useEffect(() => {
    setSearchedPart(props.clickedPart);
  }, [props]);

  return (
    <SearchBoxComponent>
      <TextField defaultValue={searchedPart} placeholder="Procurar parte do corpo" readOnly />
      <Parts id="parts">
        <UnorderedList>
        {filteredParts.map((bodyPart) => {
          return (
            <List key={bodyPart.id}>
              <Card key={bodyPart.id} name={bodyPart.name} image={bodyPart.image} alt="image-url" />
            </List>
          )
        })}
        </UnorderedList>
      </Parts>
    </SearchBoxComponent>
  )
}

export default LeftContainer