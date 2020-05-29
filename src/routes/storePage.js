import { Component, Fragment } from 'preact';

export default class StorePage extends Component {

   state = {
      id : null
   }

   componentDidMount() {
      this.setState({ id: this.props.id})
   }

   getStore() {
      const { results } = this.props;
      let stores = []
      for (const category in results) {
         for (const store in results[category]['data']) {
            if (this.getStoreSlug(results[category]['data'][store].name) === this.state.id) {
               let found = results[category]['data'][store]
               return found
            }
         }
      }
   }

   getStoreSlug(storeName) {
      return storeName.replace(/\s/g, '').toLowerCase()
   }

   render() {
      const { id } = this.state;
      const store = this.getStore();
      return (
         <Fragment>
            {/* <h2>{id}</h2>
            {store 
            ? <p>{JSON.stringify(store)}</p>
            : <p>non trovato</p>} */}
            
         </Fragment>
      );
   }


};
