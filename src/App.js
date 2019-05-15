import React, { Component } from 'react';
import LocationList from './components/LocationList';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ForecastExtended from './components/ForecastExtended';
import { setCity } from './actions';
import { store } from './store';
import './App.css';

const cities = [
  'Buenos Aires,ar',
  'Bogota,co',
  'Madrid,es',
  'Barcelona,es',
  'Lima,pe'
];

class App extends Component {

  constructor() {
    super();
    this.state = {city: null};
  }

  handleSelectionLocation = city => {
    this.setState({city});
    console.log(`handleSelectionLocation ${city}`);

    store.dispatch(setCity(city));
  }

  render() {
    const { city } = this.state;
    return (
      <Grid>
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography variant='title' color='inherit'>
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList cities={cities} onSelectedLocation={this.handleSelectionLocation} />
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="details">
                {
                  city && <ForecastExtended city={city}></ForecastExtended> 
                }
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
