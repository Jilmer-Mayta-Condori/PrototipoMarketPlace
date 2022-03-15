import React from "react";
import { useState } from 'react';


const HomeComponent = ({empresasI,AutosI,CategoriasI}) =>{

    const [categorias , setCategorias] = useState(CategoriasI);
    const [empresas , setEmpresas] = useState(empresasI);
    const [autos , setAutos] = useState(AutosI);
  
    const getTotal = () => {
      var total = 0;
      for (var x = 0 ; x< empresas.length; x++){
        total = total + parseInt(empresas[x].cantidad);
      }
      return total;
    }
  
    return (
      <div >
        <nav className="navbar navbar-default" role="navigation">
          <div className="container-fluid">
              <div className="navbar-header">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                  </button>
                  <a className="navbar-brand" href="#"><strong>DIGI</strong> Shop</a>
              </div>
  
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
  
  
                  <ul className="nav navbar-nav navbar-right">
                      <li><a href="#">Track Order</a></li>
                      <li><a href="#">Login</a></li>
                      <li><a href="#">Signup</a></li>
  
                      <li className="dropdown">
                          <a href="#" className="dropdown-toggle" data-toggle="dropdown">24x7 Support <b className="caret"></b></a>
                          <ul className="dropdown-menu">
                              <li><a href="#"><strong>Call: </strong>+09-456-567-890</a></li>
                              <li><a href="#"><strong>Mail: </strong>info@yourdomain.com</a></li>
                              <li className="divider"></li>
                              <li><a href="#"><strong>Address: </strong>
                                  <div>
                                      234, New york Street,<br />
                                      Just Location, USA
                                  </div>
                              </a></li>
                          </ul>
                      </li>
                  </ul>
                  <form className="navbar-form navbar-right" role="search">
                      <div className="form-group">
                          <input type="text" placeholder="Enter Keyword Here ..." className="form-control"/>
                      </div>
                      &nbsp; 
                      <button type="submit" className="btn btn-primary">Search</button>
                  </form>
              </div>
              {/* <!-- /.navbar-collapse --> */}
          </div>
          {/* <!-- /.container-fluid --> */}
      </nav>
      <br></br>
      <br></br>
      <div className="container">
        <section id="slider">
          <div class="container">
            <div class="row">
              <div class="col-sm-12">
                <div id="slider-carousel" class="carousel slide" data-ride="carousel">
                  <ol class="carousel-indicators">
                    <li data-target="#slider-carousel" data-slide-to="0" class="active"></li>
                    <li data-target="#slider-carousel" data-slide-to="1"></li>
                    <li data-target="#slider-carousel" data-slide-to="2"></li>
                  </ol>
                  
                  <div class="carousel-inner">
                    <div class="item active">
                      <div class="col-sm-6">
                        <h1><span>E</span>-SHOPPER</h1>
                        <h2>Free E-Commerce Template</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <button type="button" class="btn btn-default get">Get it now</button>
                      </div>
                      <div class="col-sm-6">
                        <img src="https://cdn.www.gob.pe/uploads/document/file/305467/standard_SUBASTA_MINJUSDH_2019-11.jpg" class="girl img-responsive" alt="" />
                        <img src="images/home/pricing.png"  class="pricing" alt="" />
                      </div>
                    </div>
                    <div class="item" >
                      <div class="col-sm-6" >
                        <h1><span>E</span>-SHOPPER</h1>
                        <h2>100% Responsive Design</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <button type="button" class="btn btn-default get">Get it now</button>
                      </div>
                      <div class="col-sm-6" >
                        <img src="https://peru21.pe/resizer/NcJps-BkGZR7eKRSGYugtPY4g5M=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/PZMFMQYT2VGDDJEL5FEJYRUM5A.jpg" class="girl img-responsive" alt="" />
                      </div>
                    </div>
                    
                    <div class="item">
                      <div class="col-sm-6">
                        <h1><span>E</span>-SHOPPER</h1>
                        <h2>Free Ecommerce Template</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <button type="button" class="btn btn-default get">Get it now</button>
                      </div>
                      <div class="col-sm-6">
                        <img src="https://gestion.pe/resizer/FPexJDnlXb-Vclp1_b-BtTfaYsI=/1200x900/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/H6GVSJEM7VCZ3CICKHRQ2HCGAY.jpg" class="girl img-responsive" alt="" />
                        <img src="images/home/pricing.png" class="pricing" alt="" />
                      </div>
                    </div>
                    
                  </div>
                  
                  <a href="#slider-carousel" class="left control-carousel hidden-xs" data-slide="prev">
                    <i class="fa fa-angle-left"></i>
                  </a>
                  <a href="#slider-carousel" class="right control-carousel hidden-xs" data-slide="next">
                    <i class="fa fa-angle-right"></i>
                  </a>
                </div>
                
              </div>
            </div>
          </div>
        </section>
      <br></br>
      <br></br>
  
          <div className="row">
              <div className="col-md-3">
                  <div>
                    <a href="#" className="list-group-item active">Categorias
                    </a>
                    <ul className="list-group">
                      <li className="list-group-item">
                      {categorias.map((categoria, index) => 
                        <div class="panel panel-default">
                          <div class="panel-heading">
                            <h4 class="panel-title">
                              <a data-toggle="collapse" data-parent="#accordian" href={"#"+categoria.id}>
                                <span class="badge pull-right"><i class="fa fa-plus"></i></span>
                                {categoria.descripcion}
                              </a>
                            </h4>
                          </div>
                          <div id={categoria.id} class="panel-collapse collapse">
                            <div class="panel-body">
                              <ul>
                                {categoria.subcategorias.map((sub, index)=>
                                  <li><a href="#">{sub.descripcion} </a></li>
                                )}
                              </ul>
                            </div>
                          </div>
                        </div>
                        )}
                      </li>
                    </ul>
                  </div>
                  <div>
                      <a href="#" className="list-group-item active list-group-item-success">Aseguradoras
                      </a>
                      <ul className="list-group">
                        {empresas.map((empresa, index) =>
                          <li className="list-group-item">{empresa.descripcion}
                            <span className="label label-danger pull-right">{empresa.cantidad}</span>
                          </li>
                        )}
                      </ul>
                  </div>
                  <div className="well well-lg offer-box offer-colors">
                      <span className="glyphicon glyphicon-star-empty"></span>25 % off  , GRAB IT                 
                     <br />
                      <br />
                      <div className="progress progress-striped">
                          <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"
                              style={{width: "70%"}}>
                              <span className="sr-only">70% Complete (success)</span>
                              2hr 35 mins left
                          </div>
                      </div>
                      <a href="#">click here to know more </a>
                  </div>
                  {/* <!-- /.div --> */}
              </div>
              {/* <!-- /.col --> */}
              <div className="col-md-9">
                  <div>
                      <ol className="breadcrumb">
                          <li><a href="#">Home</a></li>
                          <li className="active">Aseguradoras</li>
                      </ol>
                  </div>
                  {/* <!-- /.div --> */}
                  <div className="row">
                      <div className="btn-group alg-right-pad">
                          <button type="button" className="btn btn-default"><strong>{getTotal()}  </strong>items</button>
                          <div className="btn-group">
                              <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown">
                                  Sort Products &nbsp;
        <span className="caret"></span>
                              </button>
                              <ul className="dropdown-menu">
                                  <li><a href="#">By Price Low</a></li>
                                  <li className="divider"></li>
                                  <li><a href="#">By Price High</a></li>
                                  <li className="divider"></li>
                                  <li><a href="#">By Popularity</a></li>
                                  <li className="divider"></li>
                                  <li><a href="#">By Reviews</a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  {/* <!-- /.row --> */}
                  <div className="row">
                      {empresas.map((empresa, index)=><div className="col-md-4 text-center col-sm-6 col-xs-6">
                          <div className="thumbnail product-box">
                            <div style={{width: '100%', height: '100px'}} >
                            <img src={empresa.imagen} alt="" style={{height: '100%', width:'100%'}}/>
                            </div>
                              <div className="caption">
                                  <h3><a href="#">{empresa.descripcion} </a></h3>
                                  {/* <p>Price : <strong>$ 3,45,900</strong>  </p> */}
                                  <p><a href="/aseguradora-Sura">{empresa.nombre} </a></p>
                                  <p>La subasta comenzo el dia {empresa.fechainicio} y termina el dia {empresa.fechafin}  </p>
                                  <p><a href="/aseguradora-Sura" className="btn btn-primary" role="button">Ver mas detalles + </a></p>
                              </div>
                          </div>
                      </div>)}
                      
                      {/* <!-- /.col --> */}
                  </div>
                  {/* <!-- /.row --> */}
                  <div className="row">
                      <ul className="pagination alg-right-pad">
                          <li><a href="#">&laquo;</a></li>
                          <li><a href="#">1</a></li>
                          <li><a href="#">2</a></li>
                          <li><a href="#">3</a></li>
                          <li><a href="#">4</a></li>
                          <li><a href="#">5</a></li>
                          <li><a href="#">&raquo;</a></li>
                      </ul>
                  </div>
                  {/* <!-- /.row --> */}
                  {empresas.map((empresa, index) =>
                  <div>
                    {(index < 3 )? <span></span> :
                    <div className="row">
                      <div>
                          <ol className="breadcrumb">
                              Aseguradora : {empresa.descripcion}
                          </ol>
                      </div>
                      {/* <!-- /.row --> */}
                      <div className="row" >
                        <div class="col-sm-9 padding-center" style={{marginLeft: '12%', marginRight: '10%'}}>
                          <div class="recommended_items">
                            <div id="recommended-item-carousel" class="carousel slide" data-ride="carousel">
                              <div class="carousel-inner">
                                <div class="item active">
                                  {autos.map((auto, index)=>
                                    <div>
                                      {auto.id === empresa.id ? 
                                      <div>
                                        {auto.autoslista.map((aut, index)=>
                                          <div>
                                            {index < 3 ? 
                                              <div class="col-sm-4">
                                                <div class="product-image-wrapper">
                                                  <div class="single-products">
                                                    <div class="productinfo text-center">
                                                      <div style={{height: '150px', width: '100%'}}><img src={aut.imagen} style={{width: '100%', height: '100%'}} alt="" /></div>
                                                      
                                                      <h2>$ {aut.precioInicial}</h2>
                                                      <p>{aut.marca}</p>
                                                      <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-money"></i>Ver mas del producto +</a>
                                                    </div>
                                                    
                                                  </div>
                                                </div>
                                              </div>
                                            : <span> </span>}
                                          </div>
                                        )}
                                      </div>
                                      : <span></span>}
                                    </div>                                  
                                  )}
                                  
                                </div>
                              </div>
                              <a class="left recommended-item-control" href="#recommended-item-carousel" data-slide="prev">
                                <i class="fa fa-angle-left"></i>
                                </a>
                                <a class="right recommended-item-control" href="#recommended-item-carousel" data-slide="next">
                                <i class="fa fa-angle-right"></i>
                                </a>			
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> }
                  </div>
                  )}
                    
                  {/* <!-- /.row --> */}
                  <div className="row">
                  </div>
                  {/* <!-- /.row --> */}
              </div>
              {/* <!-- /.col --> */}
          </div>
          {/* <!-- /.row --> */}
      </div>
      {/* <!-- /.container --> */}
      <div className="col-md-12 download-app-box text-center">
  
          <span className="fa fa-money"></span> Puedes ofertar todos los productos disponibles dentro de la fecha consiganada. <a href="#" className="btn btn-danger btn-lg">Ver Productos</a>
  
      </div>
  
      {/* <!--Footer --> */}
      <div className="col-md-12 footer-box">
  
          <div className="row">
              <div className="col-md-4">
                  <strong>Enviamos tus Dudas </strong>
                  <hr/>
                  <form>
                      <div className="row">
                          <div className="col-md-6 col-sm-6">
                              <div className="form-group">
                                  <input type="text" className="form-control" required="required" placeholder="Nombre Completo"/>
                              </div>
                          </div>
                          <div className="col-md-6 col-sm-6">
                              <div className="form-group">
                                  <input type="text" className="form-control" required="required" placeholder="Correo Electronico"/>
                              </div>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-md-12 col-sm-12">
                              <div className="form-group">
                                  <textarea name="message" id="message" required="required" className="form-control" rows="3" placeholder="Descripcion de su consulta"></textarea>
                              </div>
                              <div className="form-group">
                                  <button type="submit" className="btn btn-primary">Enviar</button>
                              </div>
                          </div>
                      </div>
                  </form>
              </div>
  
              <div className="col-md-4">
                  <strong>Nuestra Direccion</strong>
                  <hr/>
                  <p>
                       234, New york Street,<br />
                                      Just Location, USA<br />
                      Call: +09-456-567-890<br/>
                      Email: info@yourdomain.com<br/>
                  </p>
  
                  2014 www.yourdomain.com | All Right Reserved
              </div>
              <div className="col-md-4 social-box">
                  <strong>Nuestras Redes Sociales </strong>
                  <hr/>
                  <a href="#"><i className="fa fa-facebook-square fa-3x "></i></a>
                  <a href="#"><i className="fa fa-twitter-square fa-3x "></i></a>
                  <a href="#"><i className="fa fa-google-plus-square fa-3x c"></i></a>
                  <a href="#"><i className="fa fa-linkedin-square fa-3x "></i></a>
                  <a href="#"><i className="fa fa-pinterest-square fa-3x "></i></a>
                  <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec nisl odio. Mauris vehicula at nunc id posuere. Curabitur nec nisl odio. Mauris vehicula at nunc id posuere. 
                  </p>
              </div>
          </div>
          <hr/>
      </div>
      {/* <!-- /.col --> */}
      <div className="col-md-12 end-box ">
          &copy; 2014 | &nbsp; All Rights Reserved | &nbsp; www.yourdomain.com | &nbsp; 24x7 support | &nbsp; Email us: info@yourdomain.com
      </div>
      </div>
    );
  }

export default HomeComponent;