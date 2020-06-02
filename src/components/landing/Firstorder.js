import React, {Fragment} from 'react';
import aesop from '../../images/Aesop.jpg';
import aero from '../../images/areo.jpg';
import {Container, Row, Col} from 'react-bootstrap';
import { connect } from 'react-redux';
import { addBasket } from '../../actions/addAction';

const Firstorder = (props) => {
  console.log(props)
  return (
    <Fragment>
    <Container>
     <Row>
      <Col><h3>Aesop</h3></Col>
      <Col><img src={aesop} alt='Aesop' className="image"/></Col>
      <Col>
      <h6>Body & Hand </h6>
      <h3>Redemption Body Scrub </h3>
      <p>A bracing blend of finely milled Pumice, Bamboo Stem and aromatic Pine Needle oil that sloughs away tired cells to leave skin polished and refreshed, perfectly prepared for hydration.</p>
      <hr className="hrfat"/>
      <p>Skin feel</p>
      <p className='lightColor'>Soft, smooth, refreshed</p>
      <hr/>
      <p>Aroma</p>
      <p className='lightColor'>Fresh, alpine, camphoric</p>
      <hr/>
      <p>Key ingredients</p>
      <p className='lightColor'>Bamboo Stem, Sage Leaf, Pine Needle</p>
      <a onClick={props.addBasket} href='#contain' className="buttonSubmit">
        Add to your cart - $260.00
      </a>
      </Col>
     </Row>
  </Container>
    <div className="grid-containerSec">
      <div className="grid-item-sec">
        <img src={aero} alt='AesopPD'  />
      </div>
    </div>
    </Fragment>
  );
}

export default connect(null, { addBasket })(Firstorder);
