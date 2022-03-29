import React, { useEffect, useState } from 'react'

import Card from './Card/Card';

import { Division, HorizontalList, SearchBoxComponent, IconField, TextField, Parts, UnorderedList, List } from '../Styles/leftContainer';

import { api } from '../api/api';

import LeftCard from '../Components/Card/LeftCard';

const LeftContainer = (props) => {

  const [bodyParts, setBodyParts] = useState([]);
  const [searchedPart, setSearchedPart] = useState('');
  const [searchedOrgan, setSearchedOrgan] = useState('');

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
    } else return null
    
  })

  const filteredByName = filteredParts.filter(bodyPart => {

    if (searchedOrgan === "") {
      return bodyPart;
    } else if (bodyPart.name.toLowerCase().includes(searchedOrgan.toLowerCase())) {
      return bodyPart;
    } else return null
    
  })

  useEffect(() => {
    setSearchedPart(props.clickedPart);
  }, [props]);

  let symptomsCounter = 0;

  const getSymptomsCounter = (data) => {
    symptomsCounter += data;

    let element = document.getElementById("symptoms-counter");

    element.innerHTML = parseInt(symptomsCounter, 10);
  }

  const getSearchedOrgan = (data) => {
    setSearchedOrgan(data);
  }

  return (
    <Division>
      <HorizontalList id="subpart-cards">
        {filteredParts.map((bodyPart) => {
          return (
            <>
              {searchedPart ?
                <List key={bodyPart.id}>
                  <LeftCard key={bodyPart.id} name={bodyPart.name} image={bodyPart.image} alt="card-image" searchedOrgan={getSearchedOrgan} />
                </List>
              : 
              null
              } 
            </>
          )
        })}
      </HorizontalList>
      <SearchBoxComponent>
        <IconField>
          <TextField defaultValue={searchedPart} placeholder="Pesquisar / Sugestões" readOnly />
        </IconField>
        <Parts id="parts">
          <UnorderedList>
            {filteredByName.map((bodyPart) => {
              return (
                <List key={bodyPart.id}>
                  <Card key={bodyPart.id} name={bodyPart.name} image={bodyPart.image} alt="image-url" counter={getSymptomsCounter} />
                </List>
              )
            })}
          </UnorderedList>
        </Parts>
      </SearchBoxComponent>
    </Division>
  )
}

export default LeftContainer