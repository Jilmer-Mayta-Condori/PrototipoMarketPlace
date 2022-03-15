import React from "react";
import { useState } from "react";
const Detalles = () => {

    const autos = {id: 1 ,marca:'Cherry QQ', año: '2013', imagen: 'https://farm6.static.flickr.com/5243/5381739806_e0f94018c1.jpg', descripcion:'siniestrado'
    , descripcionSiniestro: 'Golpe Lateral', precioInicial: '100000', ofertantes: 2 , idganador: 0,}

    const [auto , setAutos] = useState(autos);
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
    <div class="container">
        <br></br>
        <div class="row">
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
            <div class="col-sm-12 padding-right"  style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
					<div class="product-details">
						<div class="col-sm-5">
							<div class="view-product" style={{ height: '350px'}}>
								<img src={auto.imagen} style={{ height: '100%'}} alt="" />
							</div>

						</div>
						<div class="col-sm-7"style={{height: '350px'}} >
							<div class="product-information" style={{height: '350px', paddingTop: '50px !important'}} >
                                <p><b>Cierra</b></p>
                                <h3>20horas | 04minutos | 56segundos</h3>
                                <p><b>Fecha cierre:</b></p>
                                <p>12 de Marzo del 2022</p>
                                <p><b>Marca:</b></p>
								<h2>{auto.marca}</h2>
								<p><b>Modelo:</b> {auto.año}</p>
                                <span>
                                    <h4><b>Precio Actual:</b></h4>
									<span>$ {auto.precioInicial}</span>
								</span>
							</div>
						</div>
					</div>
					
				</div>
            <br></br>
        </div>
        <br></br>

        <div className="row">
        <div class="col-sm-12 padding-right" style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', padding :'15px'}}>
            <div class="product-information" >
            <h3>Informacion de apertura</h3>
            <p><b>Tienda:</b></p>
            <h2>Sura</h2>
            <p></p>
            <p><b>Fecha de Cierre:</b></p>
            <h2>12 de Marzo del 2022</h2>
            <p><b>Oferta inicial:</b></p>
            <h2>{auto.precioInicial}</h2>

            <hr></hr>

            <div class="product-information" >
            <h3>Informacion Detallada</h3>
            <p>{auto.marca}</p>
            
            <p><b>TRANSMISIÓN</b> MECANICA</p>
            <p><b>COMBUSTIBLE</b> GASOLINA</p>
            <p><b>DIRECCIÓN</b> MECANICA</p>
            <p><b>CILINDRAJE</b> 645</p>
            <p><b>SERVICIO</b> Particular</p>
            <p><b>AMPARO</b> DAÑOS</p>
            <p><b>TRANSITO</b> STRIA TTOyTTE MCPAL FUNZA</p>
            <p><b>REGRABACIONES</b> NO</p>
            <p><b>CANTIDAD DE PLACAS</b> 1</p>
            <p><b>JUEGO DE LLAVES</b> NO</p>
            <p><b>SOAT</b> COMPRAR</p>
            <p><b>REVISION TECNOMECANICA:</b> 15/10/2022</p>
            </div>
        </div>
        </div>
        </div>
        <div class="col-md-12 download-app-box text-center">
            <span className="fa fa-money"></span> Puedes ofertar todos los productos disponibles dentro de la fecha consiganada. <a href="#" className="btn btn-danger btn-lg">Ver Productos</a>
        </div>
        
        <div class="col-md-12 end-box ">
            &copy; 2014 | &nbsp; All Rights Reserved | &nbsp; www.yourdomain.com | &nbsp; 24x7 support | &nbsp; Email us: info@yourdomain.com
        </div>
    </div>
    </div>
  )
}


export default Detalles;