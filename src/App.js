import React , {Component} from "react";
import Navbar from './components/Navbar'
import Items from './components/Items'


class App extends Component {

  state={
    cart :[],
    totale:0,
    products:[
      {id: 1 , Quantity : 0 , img :"./images/shop1.jpg" , name:"product_1" , price: 10, total: 0},
      {id: 2 , Quantity : 0 , img :"./images/shop2.jpg" , name:"product_2" , price: 10, total: 0},
      {id: 3 , Quantity : 0 , img :"./images/shop3.jpg" , name:"product_3" , price: 10, total: 0},
      {id: 4 , Quantity : 0 , img :"./images/shop4.jpg" , name:"product_4" , price: 10, total: 0},
      {id: 5 , Quantity : 0 , img :"./images/shop5.jpg" , name:"product_5" , price: 10, total: 0},
      {id: 6 , Quantity : 0 , img :"./images/shop6.jpg" , name:"product_6" , price: 10, total: 0},
      {id: 7 , Quantity : 0 , img :"./images/shop1.jpg" , name:"product_7" , price: 10, total: 0},
      {id: 8 , Quantity : 0 , img :"./images/shop2.jpg" , name:"product_8" , price: 10, total: 0},
      {id: 9 , Quantity : 0 , img :"./images/shop1.jpg" , name:"product_9" , price: 10, total: 0},

    ]
  }

  Addtocart = (id) => {
    const cart = this.state.cart
    const products = this.state.products
    const totale = this.state.totale

    const index = products.findIndex(items=>items.id === id)

    const Prod = products[index]
    Prod.Quantity = Prod.Quantity + 1
    Prod.total = Prod.Quantity * Prod.price

    let total = totale + Prod.total

    this.setState(()=>{
      return {
        cart : [...cart,Prod],
        totale : total
      }
    })

  }

  Delete = (id) => {
    const cart = this.state.cart
    const products = this.state.products
    const totale = this.state.totale
    const Prod = products.filter(items=>items.id !== id)

    let Tot = 0
    products.map(items=>Tot =+ items.total)
    const total = totale- Tot

    this.setState(()=>{
      return {
        products : Prod,
        cart : [...Prod],
        totale : total
      }
    })
  }

  onIncrement = (id) =>{
    const products = this.state.products
    const totale = this.state.totale

    const index = products.findIndex(items=>items.id === id)

    const Prod = products[index]
    Prod.Quantity = Prod.Quantity +1
    Prod.total = Prod.Quantity * Prod.price
    
    const tot = Prod.total -(Prod.Quantity -1)* Prod.price
    let total = totale + Prod.total - tot

    this.setState(()=>{
      return {
        products : products,
        totale : total
      }
    })


  }


  onDecrement = (id) =>{
    const products = this.state.products
    const cart = this.state.cart
    const totale = this.state.totale

    const index = products.findIndex(items=>items.id === id)

    const Prod = products[index]
    if(Prod.Quantity >1 ){
      Prod.Quantity = Prod.Quantity -1
      Prod.total = Prod.Quantity * Prod.price
      const tot = Prod.total -((Prod.Quantity -1)* Prod.price)

      this.setState(()=>{
        return {
          products : products,
          totale : totale -  tot
        }
      })

    }else{
      Prod.Quantity =0
      cart.length= cart.length -1

      this.setState(()=>{
        return {
          products : products,
          cart : [...cart],
          totale : totale - Prod.total
        }
      })
    }
    
  }


  onDeleteItems = (id) =>{
    const cart = this.state.cart
    const products = this.state.products
    const totale = this.state.totale

    const index = products.findIndex(items=>items.id === id)

    if(products[index].Quantity <=1 ){
      products[index].Quantity = 0
      products[index].total = 0

      cart.length= cart.length -1

      this.setState(()=>{
        return {
          products : products,
          cart : [...cart],
          totale : totale - ((products[index].Quantity+1) * products[index].price)
        }
      })

    }else{
      const Tprod = products[index].total
      products[index].total = 0
      products[index].Quantity = 0
      cart.length= cart.length -1

      this.setState(()=>{
        return {
          products : products,
          cart : [...cart],
          totale : totale - Tprod
        }
      })
    }

  }

  render(){
    
      return (

        <div className="container py-3">
            <Navbar cart={this.state.cart.length}/>

            <div>
              <div className="col col-lg-2 text-white text-center text-capitalize muted h4"
                style={{background : "#16b978",float :"right",height: "70px",lineHeight: "70px",marginTop: "10px"}}
                >
                <p>total : {this.state.totale}$</p>
              </div>
            </div>


            <br/>
            <br/>

            <section className="shop">
              <br/>
              <br/>
              <h2 className="text-center font-weight-bold">Food shop</h2>
              <br/>

              <div className="shop-container">
                {this.state.products.map(items=>
                    <Items items={items}
                          key={items.id}
                          Addtocart={this.Addtocart}
                          Delete={this.Delete}
                          onIncrement={this.onIncrement}
                          onDecrement={this.onDecrement}
                          onDeleteItems={this.onDeleteItems}

                    />
                  )}
              </div>
            </section>

        </div>

      );
  }

}

export default App;