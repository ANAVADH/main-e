import React, { useState } from 'react'
import styled from 'styled-components'
import NavBar from '../components/NavBar'
import Announceement from '../components/Announceement'
import Products from '../components/Products'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import { mobile } from '../responsive'
import { useLocation } from 'react-router-dom';


const Container  = styled.div``
const Title = styled.h1`
margin: 20px;`
const FilterContainer = styled.div`  display: flex;
justify-content: space-between;`
const Filter = styled.div` margin: 20px;
${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}`
const FilterText = styled.span`  font-size: 20px;
font-weight: 600;
margin-right: 20px;
${mobile({ marginRight: "0px" })}`

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}`

const Option = styled.option``;
const ProductList = () => {
const location = useLocation();
const cat = location.pathname.split("/")[2];
const [filter , setFilter] = useState({})
const [sort , setSort] = useState("newest")
const handleFilters = (e)=>{
const value = e.target.value;
setFilter({
  ...filter,
  [e.target.name]: value,
   
})
}

  return (
    <Container>
         <Announceement/>
      <NavBar/>
      <Title>{cat}</Title>
      <FilterContainer>
      <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name='color' onChange={handleFilters}>
            <Option disabled>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select name='varient' onChange={handleFilters}>
            <Option disabled>
             Varient
            </Option>
            <Option>2/32</Option>
            <Option>4/64</Option>
            <Option>6/128</Option>
            <Option>6/256</Option>
            <Option>8/128</Option>
            <Option>8/256</Option>
            <Option>12/256</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value) }>
            <Option value="newest" >Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="dsc">Price (desc)</Option>
          </Select>
        </Filter>


      </FilterContainer>
      <Products cat={cat} filters={filter} sort={sort}  />
      <NewsLetter/>
      <Footer /> 
     

    </Container>

  )
}

export default ProductList