import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css']
})
export class ViewAllProductComponent implements OnInit {

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.viewAllproduct().subscribe(data=>{
      console.log(data);
      
    })
  }

}
