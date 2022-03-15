import React, { useState } from "react";
import { useParams } from "react-router";

const AseguradoraComponent = ({empresasI,AutosI,CategoriasI}) => {

    var param = useParams();

    const [categorias , setCategorias] = useState(CategoriasI);
    const [empresas , setEmpresas] = useState(empresasI);
    const [autos , setAutos] = useState(AutosI);
    return(
        <div>
        <nav class="navbar navbar-default" role="navigation">
          <div class="container-fluid">
              <div class="navbar-header">
                  <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                      <span class="sr-only">Toggle navigation</span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                  </button>
                  <a class="navbar-brand" href="#"><strong>DIGI</strong> Shop</a>
              </div>
  
              <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
  
  
                  <ul class="nav navbar-nav navbar-right">
                      <li><a href="#">Track Order</a></li>
                      <li><a href="#">Login</a></li>
                      <li><a href="#">Signup</a></li>
  
                      <li class="dropdown">
                          <a href="#" class="dropdown-toggle" data-toggle="dropdown">24x7 Support <b class="caret"></b></a>
                          <ul class="dropdown-menu">
                              <li><a href="#"><strong>Call: </strong>+09-456-567-890</a></li>
                              <li><a href="#"><strong>Mail: </strong>info@yourdomain.com</a></li>
                              <li class="divider"></li>
                              <li><a href="#"><strong>Address: </strong>
                                  <div>
                                      234, New york Street,<br />
                                      Just Location, USA
                                  </div>
                              </a></li>
                          </ul>
                      </li>
                  </ul>
                  <form class="navbar-form navbar-right" role="search">
                      <div class="form-group">
                          <input type="text" placeholder="Enter Keyword Here ..." class="form-control"/>
                      </div>
                      &nbsp; 
                      <button type="submit" class="btn btn-primary">Search</button>
                  </form>
              </div>
          </div>
        </nav>
        <br></br>
      <div class="container">
          <div class="row">
            {/* {empresas.map((empresa, index) =>
            <div>
                {empresa.id}
                {empresa.id == param.id ? <section id="advertisement">
                <div class="container" style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
                    <div class="col-md-3">
                        <div style={{marginTop: '5%', marginBottom: '5%'}}><img src="https://www.revistaautocrash.com/wp-content/uploads/2021/02/Seguros-.jpg" style={{width:'90%'}}></img></div>
                    </div>
                    <div class="col-md-6">
                        <div style={{marginTop: '5%', marginBottom: '5%'}}>
                            <h4>Aseguradora: Lector - Hora: 12:00 p.m</h4>
                            <p>Fecha de cierre: 12-04-12</p>
                            <p>Direccion: Carrera 16 # 93-78, Oficina 204</p>
                            <p>Numeros de Contacto: (1) 7438088 </p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div style={{marginTop: '20%'}}><p> <a href="#" class="btn btn-primary" role="button"><h4>Participar en la subasta</h4></a></p></div>
                    </div>
                </div>
                </section> : <span></span>}
            </div>
            )}          */}
            <section id="advertisement">
                <div class="container" style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
                    <div class="col-md-3">
                        <div style={{marginTop: '5%', marginBottom: '5%'}}><img src="https://www.revistaautocrash.com/wp-content/uploads/2021/02/Seguros-.jpg" style={{width:'90%'}}></img></div>
                    </div>
                    <div class="col-md-6">
                        <div style={{marginTop: '5%', marginBottom: '5%'}}>
                            <h4>Aseguradora: Sura - Hora: 12:00 p.m</h4>
                            <p>Fecha de cierre: 12-04-2022</p>
                            <p>Direccion: Carrera 16 # 93-78, Oficina 204</p>
                            <p>Numeros de Contacto: (1) 7438088 </p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div style={{marginTop: '20%'}}><p> <a href="#" class="btn btn-primary" role="button"><h4>Participar en la subasta</h4></a></p></div>
                    </div>
                </div>
                </section>
          </div>
        <br></br>

          <div class="row">
              <div class="col-md-3">
                    <div>
                      <a href="#" class="list-group-item active">Categorias
                      </a>
                      <ul class="list-group">
                          <li class="list-group-item">
                            <input type={"radio"}></input> Autos
                          </li>
                          <li class="list-group-item">
                              <input type={"radio"}></input> Motos
                          </li>
                      </ul>
                  </div>
                  <div>
                      <a href="#" class="list-group-item active">Subcategorias
                      </a>
                      <ul class="list-group">
                          <li class="list-group-item">
                            <input type={"radio"}></input> Autos Siniestrados
                          </li>
                          <li class="list-group-item">
                              <input type={"radio"}></input> Motocicletas
                          </li>
                          <li class="list-group-item">
                              <input type={"radio"}></input> Motos Siniestradas
                          </li>
                          <li class="list-group-item">
                              <input type={"radio"}></input> Sedanes
                          </li>
                      </ul>
                  </div>
                  <div>
                      <a href="#" class="list-group-item active list-group-item-success">Modelo
                      </a>
                      <ul class="list-group">
                          <li class="list-group-item">
                            <input type={"radio"}></input> Subaru
                          </li>
                          <li class="list-group-item">
                              <input type={"radio"}></input> Cherry QQ
                          </li>
                          <li class="list-group-item">
                              <input type={"radio"}></input> Toyota
                          </li>
                          <li class="list-group-item">
                              <input type={"radio"}></input> Auri
                          </li>
                      </ul>
                  </div>
                  <div>
                      <a href="#" class="list-group-item active">Ordenar Por
                      </a>
                      <ul class="list-group">
                          <li class="list-group-item">
                            <input type={"radio"}></input> De mayor a menor
                          </li>
                          <li class="list-group-item">
                              <input type={"radio"}></input> De menor a mayor
                          </li>
                      </ul>
                  </div>
              </div>
              <div class="col-md-9">
                  <div>
                      <ol class="breadcrumb">
                          <li><a href="#">Home</a></li>
                          <li class="active">Electronics</li>
                      </ol>
                  </div>
                  <div class="row">
                      <div class="btn-group alg-right-pad">
                          <button type="button" class="btn btn-default"><strong>1235  </strong>items</button>
                          <div class="btn-group">
                              <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown">
                                  Sort Products &nbsp;
        <span class="caret"></span>
                              </button>
                              <ul class="dropdown-menu">
                                  <li><a href="#">By Price Low</a></li>
                                  <li class="divider"></li>
                                  <li><a href="#">By Price High</a></li>
                                  <li class="divider"></li>
                                  <li><a href="#">By Popularity</a></li>
                                  <li class="divider"></li>
                                  <li><a href="#">By Reviews</a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  {autos[0].autoslista.map((auto, index)=>
                  <div class="row">
                      
                  <div class="col-sm-12 padding-right">
					<div class="product-details">
						<div class="col-sm-5">
							<div class="view-product" style={{ height: '270px'}}>
								<img src={auto.imagen} style={{ height: '100%'}} alt="" />
							</div>

						</div>
						<div class="col-sm-7"style={{height: '270px'}} >
							<div class="product-information" style={{height: '270px', paddingTop: '50px !important'}} >
								<h2>{auto.marca}</h2>
								<p>Web ID: 1089772</p>
								<p><b>Descripcion:</b> {auto.descripcionSiniestro}</p>
								<p><b>Modelo:</b> {auto.año}</p>
								<p><b>Estado:</b> {auto.descripcion}</p>
                                <span>
                                    <h4><b>Precio Actual:</b></h4>
									<span>$ {auto.precioInicial}</span>
								</span>
                                <div style={{float: 'right'}}><p> <a href="#" class="btn btn-primary" role="button">Ver Informacion</a></p></div>
							</div>
						</div>
					</div>
					
				</div>

                  </div>
                  )}
                  
                  <div class="row">
                      <ul class="pagination alg-right-pad">
                          <li><a href="#">&laquo;</a></li>
                          <li><a href="#">1</a></li>
                          <li><a href="#">2</a></li>
                          <li><a href="#">3</a></li>
                          <li><a href="#">4</a></li>
                          <li><a href="#">5</a></li>
                          <li><a href="#">&raquo;</a></li>
                      </ul>
                  </div>
                  
              </div>
          </div>
      </div>
      <div className="col-md-12 download-app-box text-center">
  
          <span className="fa fa-money"></span> Puedes ofertar todos los productos disponibles dentro de la fecha consiganada. <a href="#" className="btn btn-danger btn-lg">Ver Productos</a>
  
      </div>
      
      <div class="col-md-12 end-box ">
          &copy; 2014 | &nbsp; All Rights Reserved | &nbsp; www.yourdomain.com | &nbsp; 24x7 support | &nbsp; Email us: info@yourdomain.com
      </div>
      </div>
    )
}

export default AseguradoraComponent;