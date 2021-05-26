import React, { useEffect , useState } from 'react'
import { Container, Row, Col, Jumbotron } from 'react-bootstrap'
function Landing() {
    const [location, setLocation] = useState("")
    useEffect(()=>{
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
    
                // Get the coordinates of the current position.
                var lat = position.coords.latitude;
                var lng = position.coords.longitude;
                console.log(lat,lng);
            });
            
        }
        else {
            console.log("No Location")
            var lat = 0;
            var lng = 0;
        }
        console.log(lat,lng)
        console.log("https://api.mapbox.com/geocoding/v5/mapbox.places/"+ lng + "," + lat + ".json?&access_token=pk.eyJ1IjoibG9oaXQyNDQiLCJhIjoiY2twNWZoZ3MzMHU4YjJ4cjJkcWhvZWZvNiJ9.qrQoAp1hwFBvf98GYdvh1Q")
        fetch("https://api.mapbox.com/geocoding/v5/mapbox.places/"+ lng + "," + lat + ".json?&access_token=pk.eyJ1IjoibG9oaXQyNDQiLCJhIjoiY2twNWZoZ3MzMHU4YjJ4cjJkcWhvZWZvNiJ9.qrQoAp1hwFBvf98GYdvh1Q")
                  .then(res => res.json())
                  .then(
                        (result) => {
                              setLocation(result.features[0].place_name)
                        },
                  )
    },[])
    return (
        <Jumbotron>
        <Container>
            <Row>
                <Col sm={6}>
                    <h1> Your Country </h1>
                    {location}
                    {/* data - 
                    <br></br>active
                    <br></br>total
                    <br></br>deaths
                    <br></br>new cases
                    <br></br>new deaths
                    <br></br>critical */}
                    </Col>
                <Col sm={6}>
                    <h1>World </h1>
                    <br></br>data - 
                    <br></br>active
                    <br></br>total
                    <br></br>deaths
                    <br></br>new cases
                    <br></br>new deaths
                    <br></br>critical
                </Col>
            </Row>
        </Container>
        </Jumbotron>
    )
}
export default Landing