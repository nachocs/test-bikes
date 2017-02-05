import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

export default class AppView extends React.Component {
  static propTypes = {
    bikes:React.PropTypes.array,
    ui: React.PropTypes.object,
  };
  shouldComponentUpdate(nextProps){
    return nextProps.ui.loadDone || false;
  }

  render() {
    return (
      <Grid>
      {this.props.ui.loading && <div>Loading...</div>}
      {this.props.bikes.map((bike)=>{
        return(<div key={bike.id}>
            <Row>
              <h2>{bike.name}</h2>
            </Row>
            <Row>
              <Col sm={4}>
                <img src={bike.image.thumb}/>
              </Col>
              <Col sm={6}>
                {bike.description}
              </Col>
            </Row>
          </div>);
      })
    }
      </Grid>
    );
  }
}
