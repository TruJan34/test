import React, { Component } from 'react';

class Single extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {match} = this.props;
    const animals = this.props.animals;
    const foods = this.props.foods;
    const furniture = this.props.furniture;
    const nature = this.props.nature;
    const technology = this.props.technology;
    const transport = this.props.transport;
    const postId = match.params.postId;
    
    console.log(this.props)
    const i = animals.findIndex((e) => e.name === postId)
    const j = foods.findIndex((e) => e.name === postId)
    const k = furniture.findIndex((e) => e.name === postId)
    const l = nature.findIndex((e) => e.name === postId)
    const m = technology.findIndex((e) => e.name === postId)
    const n = transport.findIndex((e) => e.name === postId)

    if(i >=0) {
      console.log(i)
      console.log(animals[i])     
    } else if(j >=0 ) {
      console.log(j)
      console.log(foods[j])
    }else if(k >=0 ) {
      console.log(k)
      console.log(furniture[k])
    } else if(l >= 0) {
      console.log(l)
      console.log(nature[l])
    }else if(m >= 0){
      console.log(m)
      console.log(technology[m])
    } else if(n >= 0){
      console.log(n)
      console.log(transport[n])
    }
    
    
    // console.log(animal)
    return(
      <div>
        <h3>Single 3D grid: {postId}</h3>
      </div>
    )
  }
}

export default Single;