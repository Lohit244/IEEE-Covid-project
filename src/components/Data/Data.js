import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
function Data(props) {
      const [isLoaded, setIsLoaded] = useState(false);
      const [items, setItems] = useState([]);

      useEffect(() => {
            fetch("https://coronavirus-19-api.herokuapp.com/countries")
                  .then(res => res.json())
                  .then(
                        (result) => {
                              console.log("done")
                              setIsLoaded(true);
                              setItems(result);
                        },
                  )
      }, [])
      const filteredItems = items.filter((cur) => {
            return (cur.country.toLowerCase().includes(props.term.toLowerCase()))
      })
      props.func(items)
      return (
            <Table striped bordered hover responsive>
                  {/* Headers */}
                  <thead>
                        <tr>
                              <th>Country</th>
                              <th>Cases</th>
                              <th>Deaths</th>
                              <th>New Cases</th>
                              <th>New Deaths</th>
                              <th>Recovered</th>
                              <th>Active</th>
                              <th>Critical</th>
                        </tr>
                  </thead>
                  <tbody>
                        {(!isLoaded) && <p>Loading...</p>}
                        {
                              filteredItems.map((cur, index) => {
                                    return (
                                          <tr className="Data-Elem" key={index}>
                                                <td className="country">{cur.country}</td>
                                                <td className="cases"> {cur.cases}</td>
                                                <td className="deaths text-danger">{cur.deaths}</td>
                                                <td className="todayCases">{cur.todayCases}</td>
                                                <td className="todayDeaths text-danger" >{cur.todayDeaths}</td>
                                                <td className="recovered text-success">{cur.recovered}</td>
                                                <td className="active">{cur.active}</td>
                                                <td className="critical text-danger">{cur.critical}</td>
                                          </tr>
                                    )
                              })
                        }
                  </tbody>
            </Table>
      );
}

export default Data
