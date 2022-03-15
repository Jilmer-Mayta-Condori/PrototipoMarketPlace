import './App.css';
import { useState } from 'react';
import Detalles from './Components/Detalles';
import HomeComponent from './Components/HomeComponent';
import AseguradoraComponent from './Components/AseguradorasComponent';

import { BrowserRouter, Route, Switch , Redirect} from 'react-router-dom';


const App = () => {

  const categoriasIniciales = [
    {id: 'Inmueble',descripcion: 'Inmuebles', subcategorias: [ 
      {descripcion: 'Industrial'},
      {descripcion: 'Terrenos'},
      {descripcion: 'Vivienda'},
      {descripcion: 'Rurales'}
    ]},

    {id: 'Autos',descripcion: 'Autos y Motos', subcategorias: [ 
      {descripcion: 'Autos'},
      {descripcion: 'Motos'}
    ]},

    {id: 'Camiones' ,descripcion: 'Camiones & Autobuses', subcategorias: [ 
      {descripcion: 'Camiones'},
      {descripcion: 'Autobuses'}
    ]},
  ]
  const AutosIniciales = [
    {id: 'Sura', autoslista:[{
      id: 1 ,marca:'Cherry QQ', año: '2013', imagen: 'https://farm6.static.flickr.com/5243/5381739806_e0f94018c1.jpg', descripcion:'siniestrado'
      , descripcionSiniestro: 'Golpe Lateral', precioInicial: '100000', ofertantes: 2 , idganador: 0,
    },{
      id: 2 ,marca:'Subaru Shark', año: '2002', imagen: 'https://static.retail.autofact.cl/blog/467_20180724154510.original.jpg', descripcion:'siniestrado'
      , descripcionSiniestro: 'Golpe Frontal', precioInicial: '200000', ofertantes: 2 , idganador: 0,
    },{
      id: 3 ,marca:'Toyota Yaris', año: '2018', imagen: 'https://cdn.motor1.com/images/mgl/3Mj4K/s3/bmw-m4-coupe.jpg', descripcion:'siniestrado'
      , descripcionSiniestro: 'Golpe Lateral', precioInicial: '800000', ofertantes: 2 , idganador: 0,
    },{
      id: 4 ,marca:'Cherry QQ', año: '2013', imagen: 'https://farm6.static.flickr.com/5243/5381739806_e0f94018c1.jpg', descripcion:'siniestrado'
      , descripcionSiniestro: 'Golpe Lateral', precioInicial: '100000', ofertantes: 2 , idganador: 0,
    },{
      id: 5 ,marca:'Auri SportBack', año: '2022', imagen: 'https://cdn.motor1.com/images/mgl/g6Qzm/s3/audi-a5-sportback.jpg', descripcion:'siniestrado'
      , descripcionSiniestro: 'Golpe Lateral', precioInicial: '8000000', ofertantes: 2 , idganador: 0,
    }]},
    {id: 'Consorsiofarallones' , autoslista:[{
      id: 6 ,marca:'Toyota Corolla', año: '2015', imagen: 'http://chocadostapatios.com/wp-content/uploads/2019/02/WhatsApp-Image-2019-02-26-at-12.01.07-PM-1.jpeg', descripcion:'siniestrado'
      , descripcionSiniestro: 'Golpe Lateral', precioInicial: '100000', ofertantes: 2 , idganador: 0,
    },{
      id: 7 ,marca:'Susuki Grand', año: '2010', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgjrrgu_Zist_hOkpF3ZgtMxEDu5BcBPERyA&usqp=CAU', descripcion:'siniestrado'
      , descripcionSiniestro: 'Golpe Lateral', precioInicial: '100000', ofertantes: 2 , idganador: 0,
    },{
      id: 8 ,marca:'Cherry QQ', año: '2013', imagen: 'https://farm6.static.flickr.com/5243/5381739806_e0f94018c1.jpg', descripcion:'siniestrado'
      , descripcionSiniestro: 'Golpe Lateral', precioInicial: '100000', ofertantes: 2 , idganador: 0,
    },{
      id: 9 ,marca:'Toyota FortRuner', año: '2011', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK2haK41T7XNZhugOs8_1IWcwukoSk8oWkVw&usqp=CAU', descripcion:'siniestrado'
      , descripcionSiniestro: 'Golpe Lateral', precioInicial: '100000', ofertantes: 2 , idganador: 0,
    },{
      id: 10 ,marca:'Subaru', año: '2013', imagen: 'https://cdn.motor1.com/images/mgl/oVZyp/s3/bmw-m4-coupe.jpg', descripcion:'siniestrado'
      , descripcionSiniestro: 'Golpe Lateral', precioInicial: '100000', ofertantes: 2 , idganador: 0,
    }]},
    {id: 'terpel' , autoslista:[{
      id: 11 ,marca:'Cherry QQ', año: '2013', imagen: 'https://farm6.static.flickr.com/5243/5381739806_e0f94018c1.jpg', descripcion:'siniestrado'
      , descripcionSiniestro: 'Golpe Lateral', precioInicial: '100000', ofertantes: 2 , idganador: 0,
    },{
      id: 12 ,marca:'Toyota FortRuner', año: '2011', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK2haK41T7XNZhugOs8_1IWcwukoSk8oWkVw&usqp=CAU', descripcion:'siniestrado'
      , descripcionSiniestro: 'Golpe Lateral', precioInicial: '100000', ofertantes: 2 , idganador: 0,
    },{
      id: 13 ,marca:'Subaru Shark', año: '2002', imagen: 'https://static.retail.autofact.cl/blog/467_20180724154510.original.jpg', descripcion:'siniestrado'
      , descripcionSiniestro: 'Golpe Frontal', precioInicial: '200000', ofertantes: 2 , idganador: 0,
    }]},
    {id: 'Secretariademovilidad', autoslista:[{
      id: 14 ,marca:'Subaru Shark', año: '2002', imagen: 'https://static.retail.autofact.cl/blog/467_20180724154510.original.jpg', descripcion:'siniestrado'
      , descripcionSiniestro: 'Golpe Lateral', precioInicial: '115000', ofertantes: 2 , idganador: 0,
    },{
      id: 15 ,marca:'Cherry QQ', año: '2013', imagen: 'https://farm6.static.flickr.com/5243/5381739806_e0f94018c1.jpg', descripcion:'siniestrado'
      , descripcionSiniestro: 'Golpe Lateral', precioInicial: '154120', ofertantes: 2 , idganador: 0,
    },{
      id: 16 ,marca:'Auri SportBack', año: '2022', imagen: 'https://cdn.motor1.com/images/mgl/g6Qzm/s3/audi-a5-sportback.jpg', descripcion:'siniestrado'
      , descripcionSiniestro: 'Golpe Lateral', precioInicial: '108451', ofertantes: 2 , idganador: 0,
    },{
      id: 17 ,marca:'Cherry QQ', año: '2013', imagen: 'https://farm6.static.flickr.com/5243/5381739806_e0f94018c1.jpg', descripcion:'siniestrado'
      , descripcionSiniestro: 'Golpe Lateral', precioInicial: '100000', ofertantes: 2 , idganador: 0,
    },{
      id: 18,marca:'Cherry QQ', año: '2013', imagen: 'https://farm6.static.flickr.com/5243/5381739806_e0f94018c1.jpg', descripcion:'siniestrado'
      , descripcionSiniestro: 'Golpe Lateral', precioInicial: '100000', ofertantes: 2 , idganador: 0,
    }]},
    {id: 'AlPopular' , autoslista:[{
      id: 19 ,marca:'Toyota Yaris', año: '2018', imagen: 'https://cdn.motor1.com/images/mgl/3Mj4K/s3/bmw-m4-coupe.jpg', descripcion:'siniestrado'
      , descripcionSiniestro: 'Golpe Lateral', precioInicial: '541265', ofertantes: 2 , idganador: 0,
    },{
      id: 20 ,marca:'Susuki Grand', año: '2010', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgjrrgu_Zist_hOkpF3ZgtMxEDu5BcBPERyA&usqp=CAU', descripcion:'siniestrado'
      , descripcionSiniestro: 'Golpe Lateral', precioInicial: '102300', ofertantes: 2 , idganador: 0,
    },{
      id: 21 ,marca:'Cherry QQ', año: '2013', imagen: 'https://farm6.static.flickr.com/5243/5381739806_e0f94018c1.jpg', descripcion:'siniestrado'
      , descripcionSiniestro: 'Golpe Lateral', precioInicial: '150000', ofertantes: 2 , idganador: 0,
    },{
      id: 22 ,marca:'Cherry QQ', año: '2013', imagen: 'https://farm6.static.flickr.com/5243/5381739806_e0f94018c1.jpg', descripcion:'siniestrado'
      , descripcionSiniestro: 'Golpe Lateral', precioInicial: '100000', ofertantes: 2 , idganador: 0,
    },{
      id: 23 ,marca:'Cherry QQ', año: '2013', imagen: 'https://farm6.static.flickr.com/5243/5381739806_e0f94018c1.jpg', descripcion:'siniestrado'
      , descripcionSiniestro: 'Golpe Lateral', precioInicial: '100000', ofertantes: 2 , idganador: 0,
    },{
      id: 24 ,marca:'Cherry QQ', año: '2013', imagen: 'https://farm6.static.flickr.com/5243/5381739806_e0f94018c1.jpg', descripcion:'siniestrado'
      , descripcionSiniestro: 'Golpe Lateral', precioInicial: '100000', ofertantes: 2 , idganador: 0,
    }]},
    {id: 'Cryogas' , autoslista:[{
      id: 25 ,marca:'Toyota FortRuner', año: '2011', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK2haK41T7XNZhugOs8_1IWcwukoSk8oWkVw&usqp=CAU', descripcion:'siniestrado'
      , descripcionSiniestro: 'Golpe Lateral', precioInicial: '154226', ofertantes: 2 , idganador: 0,
    },{
      id: 26 ,marca:'Susuki Grand', año: '2010', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgjrrgu_Zist_hOkpF3ZgtMxEDu5BcBPERyA&usqp=CAU', descripcion:'siniestrado'
      , descripcionSiniestro: 'Golpe Lateral', precioInicial: '87456', ofertantes: 2 , idganador: 0,
    },{
      id: 26 ,marca:'Subaru Shark', año: '2002', imagen: 'https://static.retail.autofact.cl/blog/467_20180724154510.original.jpg', descripcion:'siniestrado'
      , descripcionSiniestro: 'Golpe Lateral', precioInicial: '120400', ofertantes: 2 , idganador: 0,
    },{
      id: 27 ,marca:'Cherry QQ', año: '2013', imagen: 'https://farm6.static.flickr.com/5243/5381739806_e0f94018c1.jpg', descripcion:'siniestrado'
      , descripcionSiniestro: 'Golpe Lateral', precioInicial: '100000', ofertantes: 2 , idganador: 0,
    },{
      id: 28 ,marca:'Cherry QQ', año: '2013', imagen: 'https://farm6.static.flickr.com/5243/5381739806_e0f94018c1.jpg', descripcion:'siniestrado'
      , descripcionSiniestro: 'Golpe Lateral', precioInicial: '100000', ofertantes: 2 , idganador: 0,
    },{
      id: 29 ,marca:'Cherry QQ', año: '2013', imagen: 'https://farm6.static.flickr.com/5243/5381739806_e0f94018c1.jpg', descripcion:'siniestrado'
      , descripcionSiniestro: 'Golpe Lateral', precioInicial: '100000', ofertantes: 2 , idganador: 0,
    },{
      id: 30 ,marca:'Cherry QQ', año: '2013', imagen: 'https://farm6.static.flickr.com/5243/5381739806_e0f94018c1.jpg', descripcion:'siniestrado'
      , descripcionSiniestro: 'Golpe Lateral', precioInicial: '100000', ofertantes: 2 , idganador: 0,
    }]}
  ]
  const empresasIniciales = [
    {id: 'Sura',descripcion: 'Sura', cantidad: '43', imagen: 'https://pbs.twimg.com/profile_images/1371957609411002373/uv-resvo_400x400.jpg'
    , nombre: 'Subastas de Camionetas', fechainicio: '12-03-2022', fechafin: '18-04-2022'},
    {id: 'Consorsiofarallones',descripcion: 'Consorcio Farallones', cantidad: '20', imagen: 'https://storage.snappages.site/k68v7py6lv/assets/images/162283_350x250_500.jpg'
    , nombre: 'Subastas de Autos', fechainicio: '11-03-2022', fechafin: '21-05-2022'},
    {id: 'terpel' ,descripcion: 'Terpel', cantidad: '50', imagen: 'https://brandemia.org/contenido/subidas/2014/03/nuevo_logo_terpel.jpg'
    , nombre: 'Subastas de camiones', fechainicio: '01-03-2022', fechafin: '20-03-2022'},
    {id: 'Secretariademovilidad' ,descripcion: 'Secretaria de Movilidad', cantidad: '5', imagen: 'https://observatorio.movilidadbogota.gov.co/sites/observatorio.movilidadbogota.gov.co/files/inline-images/Alcad%C3%ADa%2BSDM%2B%20Bogot%C3%A1%20Verde.png'
    , nombre: 'Subastas de Motos', fechainicio: '03-03-2022', fechafin: '04-04-2022'},
    {id: 'AlPopular' ,descripcion: 'AlPopular', cantidad: '28', imagen: 'https://ciev.co/wp-content/uploads/2017/04/ALPOPULAR.png'
    , nombre: 'Subastas de Autos', fechainicio: '04-03-2022', fechafin: '15-06-2022'},
    {id: 'Cryogas' ,descripcion: 'Cryogas', cantidad: '35', imagen: 'https://ii.ct-stc.com/1/logos/empresas/2019/01/14/cryogas-0EBEB6643B7276AF190928thumbnail.jpeg'
    , nombre: 'Subastas de Motos', fechainicio: '11-03-2022', fechafin: '30-04-2022'},
  ]

  const [categorias , setCategorias] = useState(categoriasIniciales);
  const [empresas , setEmpresas] = useState(empresasIniciales);
  const [autos , setAutos] = useState(AutosIniciales);
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/detalles">
          <Detalles empresasI={empresas} AutosI={autos} CategoriasI={categorias}></Detalles>
        </Route>
        <Route exact path="/aseguradora-:id">
          <AseguradoraComponent empresasI={empresas} AutosI={autos} CategoriasI={categorias}></AseguradoraComponent>
        </Route>
        <Route exact path="/">
          <HomeComponent empresasI={empresas} AutosI={autos} CategoriasI={categorias}></HomeComponent>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
