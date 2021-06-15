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


  ngOnInit(): void {
    this.getRestaurants();
  }

  /**
   * getRestaurants
   */
  public getRestaurants() {
    this.restaurantService.getAllRestaurants().subscribe((res:any)=>{
      if(res.Sucess == true){

        


        this.message.showSuccess("Consulta Exitosa.")
        for (let i = 0; i < res.Data.length; i++) {
          this.restaurants.push({text:res.Data[i].rest_name, value:res.Data[i].rest_name})     
              
        }
      }else{
        this.message.showError("Error al momento de consultar los restaurantes, intenta de nuevo.")
      }
    })
  }


  /**
   * getCategories
   */
  public getCategories($event:any) {
    this.categorieService.consultarCategorias().subscribe((res:any)=>{
      if(res.Sucess == true){
        this.message.showSuccess("Consulta Exitosa.")
        for (let i = 0; i < res.Data.length; i++) {
          this.categories.push({text:res.Data[i].cat_name, value:res.Data[i].cat_name})             
        }
      }else{
        this.message.showError("Error al momento de consultar los restaurantes, intenta de nuevo.")
      }
    })
  }

  /**
   * getProducts
   */
   public getProducts($event:any) {
    this.productService.getAllProducts({}).subscribe((res:any)=>{
      if(res.Sucess == true){
        this.message.showSuccess("Consulta Exitosa.")
        for (let i = 0; i <res.Data.length; i++) {
          this.products.push({text:res.Data[i].prod_name, value:res.Data[i].prod_name})             
        }
      }else{
        this.message.showError("Error al momento de consultar los restaurantes, intenta de nuevo.")
      }
    })
  }

  /**
   * addProducts
   */
  public addProducts() {
    alert(this.cantL)
    this.productsC.push({prod_name:this.productL,prod_cant:this.cantL})
  }


}
