import React from "react";

function Navbar(props){
    
      return (

        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">

                <div className="container-fluid">
                    <div className="container-navbar">
                        <a className="navbar-brand">Navbar</a>
                    </div>
                </div>

                <div className="navbar-header pull-right d-flex">

                    <i className="fas fa-shopping-cart"></i>

                    <span className="badge badge-info"
                    style={{margin: "-11px 4px 5px -1px",height: "23px",lineHeight: "17px"}}>
                        {props.cart}
                    </span>
                </div>


            </nav>
        </>

      );
  

}

export default Navbar;