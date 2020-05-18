import { Component, Fragment } from 'preact';
import { Router } from 'preact-router';
import { Link } from 'preact-router/match';
import axios from 'axios';



export default class ApiTest extends Component {

   state = {
      actualJson : null,
      loading : false
   };

   componentDidMount(){

      const options = {
         headers: { 'Authorization': 'token 5a4ba7aec1683be583bead6415e078f0b088911b' }
      };

      this.setState({loading: true}, () =>{
         axios.get('https://api.github.com/gists/e890d1b86e83ab190d3b1273da857e67', {}, options)
            .then((response) => {

               let resp = Object.values(response.data.files)[0].content;
               this.setState({ actualJson: resp, loading: false });

            }, (error) => {
               console.log(error);
            });
      })
      

     
   }

	render(resp) {

      const { loading, actualJson } = this.state;

		return (         
			<Fragment>
            {loading ? <p>loading</p> : <p>{actualJson}</p>}            
			</Fragment>
		);
   }
   
}
