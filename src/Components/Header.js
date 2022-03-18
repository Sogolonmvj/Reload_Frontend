import React from 'react'

import { Group, Division, HomeButton, Logo, FlagOption, Flag, SearchButton, Label } from '../Styles/header';

import { logo, chooseFlag, leftArrow, mostProbableIcon, mostProbableOutcome, rotateIcon, otherIssues, clearInputIcon, responsesIcon, searchIcon, flagIcon, homeIcon } from '../Constants/Files';

const Header = () => {
  return (
    <Group>
      <Division>
        <HomeButton href="/">
          <img src={homeIcon} alt="home-button" />
          <Label>Início</Label>
        </HomeButton>
        <Logo><img src={logo} alt="logo" /></Logo>
        <FlagOption>
          <Flag>
            <img className="flag-icon" src={flagIcon} alt="flag" />
          </Flag>
          <img className="arrow-down" src={chooseFlag} alt="arrow-down" />
          <SearchButton><img src={searchIcon} alt="search-button" /></SearchButton>
        </FlagOption>
      </Division>
    </Group>
  )
}

export default Header