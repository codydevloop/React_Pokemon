import React, { Component } from "react";
import './PokemonContainer.css';
import TableHeader from "../TableHeader/TableHeader";
import TableData from "../TableData/TableData";
import pokemonList from "../../data/pokemon.json";
import Container from 'react-bootstrap/Container';
let dropDownMenuSeed = [];
let sortedFilteredPokemonList = [];

//<p>{props.pokemonList[0].name}</p>
class PokemonContainer extends Component {

  constructor(props) {
    super(props);


    this.sortNamesAlphabetical();
    dropDownMenuSeed = this.removeDuplicates(pokemonList, "type1");


    //as soon as anything in here changes,  render is called
    this.state = {
      nameAlphabetical: true,
      regionSort: ""
    }
  }

  componentDidMount() {


  }
  //https://ilikekillnerds.com/2016/05/removing-duplicate-objects-array-property-name-javascript/
  removeDuplicates(pokemonList, type1) {
    return pokemonList.filter((obj, pos, arr) => {
      return arr.map(mapObj => mapObj[type1]).indexOf(obj[type1]) === pos;
    });
  }

  sortNamesAlphabetical() {
    //order list alphabetically
    pokemonList.sort(function (a, b) {
      let nameA = a.name;
      var nameB = b.name;

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    })

    sortedFilteredPokemonList = pokemonList;


  }

  handleSortNameClick = event => {
    event.preventDefault();
    console.log("button clicked");
    if (this.state.nameAlphabetical) {
      pokemonList.reverse();
      this.setState({
        nameAlphabetical: false
      })
    } else {
      this.sortNamesAlphabetical();
      this.setState({
        nameAlphabetical: true
      })
    }
    console.log(this.state.nameAlphabetical);
    console.log("crappy: " + pokemonList);
  }

  handleFilterRegionClick = event => {
    sortedFilteredPokemonList = [];
    // console.log(event.target.name);
    pokemonList.filter(item => {
    
      if (item.type1 === event.target.name) {
        sortedFilteredPokemonList.push(item);
      }
    });
    this.setState({
      regionSort: event.target.name
    })

  }

  render() {
    return (

      <Container className="positioning">

        <TableHeader
          dropDownMenuSeed={dropDownMenuSeed}
          handleSortName={this.handleSortNameClick}
          handleFilterRegion={this.handleFilterRegionClick}
        ></TableHeader>


        <TableData pokemonList={sortedFilteredPokemonList}></TableData>

      </Container>

    )
  }
}

export default PokemonContainer;