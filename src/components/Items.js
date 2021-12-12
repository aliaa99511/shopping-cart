import React , {Component} from "react";
import './Items.css'

class Items extends Component {

  render(){
      return (

        <div className="shop-box">
            <div className="shop-img">
                <img src={this.props.items.img} alt=""/>
            </div>

            <h3>name:{this.props.items.name}</h3>
            <h2>price:{this.props.items.price}$</h2>

            {this.props.items.Quantity < 1 ? " " : 
                <div className="container">
                    <p>Quantity : </p>

                    <button className="btn btn-warning m-2" 
                    onClick={()=> this.props.onIncrement(this.props.items.id)}
                    >+</button>

                    <span>{this.props.items.Quantity}</span>

                    <button className="btn btn-success m-2" 
                    onClick={()=> this.props.onDecrement(this.props.items.id)}
                    >-</button>


                    <i className="fa fa-trash-alt "
                        onClick={()=> this.props.onDeleteItems(this.props.items.id)}
                    />

                    <br/>
                    <br/>

                    <div className="text-center font-weight-bold mb-10 ">
                        Total : {this.props.items.total}$
                    </div>
                    

                </div>
            }

            <i className="fas fa-shopping-cart"
                disabled={this.props.items.Quantity >=1 ? "disabled" :""}
                onClick={()=> this.props.Addtocart(this.props.items.id)}
            ></i>


            <button className="btn btn-danger m-2"
            onClick={()=> this.props.Delete(this.props.items.id)}
            >Delete</button>

        </div>
        

      );
  }

}

export default Items;





/*
      return (
        <div className="col-md-3 col-sm-3">
            <div className="card" >
            
                <img src={this.props.items.img} className="card-img-top" alt="..."/>
                
                <div className="card-body">
                    <h5 className="card-title">name:{this.props.items.name}</h5>
                    <p className="card-text">price:{this.props.items.price} $</p>
                    
                    {this.props.items.Quantity < 1 ? " " : 
                    <div className="container">
                        <p>Quantity : </p>
                        <br/>

                        <button className="btn btn-warning m-2" 
                        onClick={()=> this.props.onIncrement(this.props.items.id)}
                        >+</button>

                        <span>{this.props.items.Quantity}</span>

                        <button className="btn btn-success m-2" 
                        onClick={()=> this.props.onDecrement(this.props.items.id)}
                        >-</button>

                        <br/>

                        <button className="btn btn-secondary m-2" 
                        onClick={()=> this.props.onDeleteItems(this.props.items.id)}
                        >
                            <i className="fa fa-trash-alt"
                                style={{border : "2px solid black"}}
                            />
                        </button>
                        <br/>

                        Total : {this.props.items.total}$
                    </div>
                    }


                    <button className="btn btn-primary m-2" 
                    disabled={this.props.items.Quantity >=1 ? "disabled" :""}
                    onClick={()=> this.props.Addtocart(this.props.items.id)}
                    >Add to cart</button>
                    
                    <br/>

                    <button className="btn btn-danger m-2"
                    onClick={()=> this.props.Delete(this.props.items.id)}
                    >Delete</button>


                </div>
            </div>
        </div>
      );
      */