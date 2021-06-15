import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { ProductsService } from 'src/app/services/products/products.service';
import { RestaurantsService } from 'src/app/services/restaurants/restaurants.service';
import { ToastsService } from 'src/app/services/toast/toasts.service';

@Component({
  selector: 'app-add-pedidos',
  templateUrl: './add-pedidos.component.html',
  styleUrls: ['./add-pedidos.component.scss']
})
export class AddPedidosComponent implements OnInit {
  restaurants = [{text:"",value:""}];
  categories = [{text:"",value:""}];
  restaurantL:any;
  categorieL:any;
  products = [{text:"",value:""}];
  productL:any='';
  productsC:any = [];
  cantL:any= 0;
  constructor(private restaurantService:RestaurantsService,
              private categorieService:CategoriesService,
              private productService:ProductsService, 
              private message:ToastsService) { }

  Data = [
    {
        "rest_id": 1,
        "rest_name": "RESTAURANTE 1",
        "rest_phone": "+57 2000106",
        "created_at": "2021-06-14T20:15:24.127238Z"
    },
    {
        "rest_id": 2,
        "rest_name": "RESTAURANTE 2",
        "rest_phone": "+57 2000107",
        "created_at": "2021-06-14T20:15:24.136969Z"
    },
    {
        "rest_id": 3,
        "rest_name": "RESTAURANTE 3",
        "rest_phone": "+57 2000108",
        "created_at": "2021-06-14T20:15:24.138396Z"
    }
]


Data1 = [
  {
      "cat_id": 1,
      "cat_name": "Aperitivos",
      "created_at": "2021-06-14T20:15:24.139467Z"
  },
  {
      "cat_id": 2,
      "cat_name": "Platos Principales",
      "created_at": "2021-06-14T20:15:24.14309Z"
  },
  {
      "cat_id": 3,
      "cat_name": "Entradas",
      "created_at": "2021-06-14T20:15:24.144076Z"
  },
  {
      "cat_id": 4,
      "cat_name": "Guarniciones",
      "created_at": "2021-06-14T20:15:24.144823Z"
  },
  {
      "cat_id": 5,
      "cat_name": "Bebidas",
      "created_at": "2021-06-14T20:15:24.145585Z"
  }
]

Data3 = [
  {
      "Prod_id": 1,
      "prod_name": "Producto 1 - Aperitivos",
      "prod_category": "Aperitivos",
      "created_at": "2021-06-14T20:15:24.146321Z"
  },
  {
      "Prod_id": 2,
      "prod_name": "Producto 2 - Aperitivos",
      "prod_category": "Aperitivos",
      "created_at": "2021-06-14T20:15:24.14968Z"
  }
]


  ngOnInit(): void {
    this.getRestaurants();
  }

  /**
   * getRestaurants
   */
  public getRestaurants() {
    //this.restaurantService.getAllRestaurants().subscribe((res:any)=>{
      if(true){

        


        this.message.showSuccess("Consulta Exitosa.")
        for (let i = 0; i < this.Data.length; i++) {
          this.restaurants.push({text:this.Data[i].rest_name, value:this.Data[i].rest_name})     
              
        }
      }else{
        this.message.showError("Error al momento de consultar los restaurantes, intenta de nuevo.")
      }
    //})
  }


  /**
   * getCategories
   */
  public getCategories($event:any) {
    //this.categorieService.consultarCategorias().subscribe((res:any)=>{
      if(true){

        


        this.message.showSuccess("Consulta Exitosa.")
        for (let i = 0; i < this.Data.length; i++) {
          this.categories.push({text:this.Data1[i].cat_name, value:this.Data1[i].cat_name})             
        }
      }else{
        this.message.showError("Error al momento de consultar los restaurantes, intenta de nuevo.")
      }
    //})
  }

  /**
   * getProducts
   */
   public getProducts($event:any) {
    //this.productService.getAllProducts().subscribe((res:any)=>{
      if(true){

        


        this.message.showSuccess("Consulta Exitosa.")
        for (let i = 0; i < this.Data.length; i++) {
          this.products.push({text:this.Data3[i].prod_name, value:this.Data3[i].prod_name})             
        }
      }else{
        this.message.showError("Error al momento de consultar los restaurantes, intenta de nuevo.")
      }
    //})
  }

  /**
   * addProducts
   */
  public addProducts() {
    alert(this.cantL)
    this.productsC.push({prod_name:this.productL,prod_cant:this.cantL})
  }


}
