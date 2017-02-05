import React from 'react';
import {Grid, Row, Col, Button, Glyphicon, ButtonGroup} from 'react-bootstrap';

export default class AppView extends React.Component {
  static propTypes = {
    bikes:React.PropTypes.array,
    ui: React.PropTypes.object,
    uiActions:React.PropTypes.shape({
      updateUi:React.PropTypes.func.isRequired,
      loading:React.PropTypes.func.isRequired,
    }),
  };
  changeList(listType){
    this.props.uiActions.updateUi({listType});
  }
  orderByClass(order){
    this.props.uiActions.updateUi({order});
  }
  render() {
    const orderedBikes = this.props.bikes.sort((a,b)=>{
      if (this.props.ui.order && this.props.ui.order.length>0){
        if(a.class.includes(this.props.ui.order)){
          return -1;
        } else if(b.class.includes(this.props.ui.order)) {
          return +1;
        } else {
          return 0;
        }
      } else {
        if(a.name < b.name) return -1;
        if(a.name > b.name) return 1;
        return 0;
      }
    });
    return (
      <Grid>
      {this.props.ui.loading && <div>Loading...</div>}
      <Row>
      <Col sm={4}>
      <ButtonGroup>
      <Button active={this.props.ui.listType==='list'} onClick={() => this.changeList('list')}><Glyphicon glyph="th-list" /></Button>
      <Button active={this.props.ui.listType!=='list'} onClick={() => this.changeList('grid')}><Glyphicon glyph="th" /></Button>
      </ButtonGroup>
      </Col>
      <Col>{this.props.ui.order && <div>Ordered by {this.props.ui.order} <Button bsSize="small" onClick={()=>this.orderByClass('')}>Order by name</Button></div>}</Col>
      </Row>
      {this.props.ui.listType==='list' &&
      <div>
        {orderedBikes.map((bike)=>{
          return(
            <Row key={bike.id} className="grid-cell">
              <Row>
                <h2>{bike.name}</h2>
                {bike.class.map((itemClass, index)=>{
                  return(
                    <Button key={index} bsSize="small" onClick={()=>this.orderByClass(itemClass)}>{itemClass}</Button>
                  );
                })}
              </Row>
              <Row>
                <Col sm={4}>
                  <img src={bike.image.thumb}/>
                </Col>
                <Col sm={1}/>
                <Col sm={6}>
                  {bike.description}
                </Col>
              </Row>
            </Row>);
        })
      }
      </div>
    }
    {this.props.ui.listType!=='list' &&
      <div>
        {orderedBikes.map((bike)=>{
          return(
            <Col key={bike.id} sm={6}>
            <div className="grid-cell">
              <h2>{bike.name}</h2>
              <Row>
                {bike.class.map((itemClass, index)=>{
                  return(
                    <Button key={index} bsSize="small" onClick={()=>this.orderByClass(itemClass)}>{itemClass}</Button>
                  );
                })}
                <Col sm={12}>
                  <img src={bike.image.thumb}/>
                </Col>
                <Col sm={12}>
                  {bike.description}
                </Col>

              </Row>
              </div>
            </Col>);
        })
      }
      </div>
    }

      </Grid>
    );
  }
}
