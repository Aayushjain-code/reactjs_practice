import React from 'react'
import styled from 'styled-components';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';



const Card = () => {
	return (
		<Wrapper>
			<div >
				<Header />
				<Body />
				<Footer />
			</div>
		</Wrapper>

	)
}


const Wrapper = styled.section`
  align-items: center;
  text-align: center;
  padding: 1rem;
  border: 2px solid #000000;
  border-radius: 5px;
  width: 20%;
  background: papayawhip;
`;

export default Card
