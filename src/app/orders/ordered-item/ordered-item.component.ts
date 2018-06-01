import {
  Component,
  OnInit,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

@Component({
  selector: 'app-ordered-item',
  templateUrl: './ordered-item.component.html',
  styleUrls: ['./ordered-item.component.scss'],
  animations: [
    trigger('divState', [
      state(
        'normal',
        style({
          transform: 'translateX(0)',
          opacity: 1
        })
      ),
      state(
        'fade',
        style({
          transform: 'translateX(70%)',
          opacity: 0
        })
      ),
      transition('normal => fade', animate(800))
    ])
  ]
})
export class OrderedItemComponent implements OnInit {
  state = 'normal';

  // result = this.number * this.price;
  // total = this.result;
  constructor() {}

  ngOnInit() {}
  
  // addItem() {
  //   this.number += 1;
  //   this.result = this.number * this.price;
  // }

  // deleteItem() {
  //   this.state == 'normal' ? (this.state = 'fade') : (this.state = 'normal');

  //   setTimeout(() => {
  //     this.number = 0;
  //     this.result -= this.price;
  //   }, 1000);
  // }

  // removeItem() {
  //   if (this.number < 1) {
  //     this.deleteItem();
  //   }
  //   this.number -= 1;
  //   this.result -= this.price;
  // }

  items = [
    {
      'img': 'https://recipes.timesofindia.com/photo/53110049.cms',
      'title': 'pizza',
      'description': 'Pizza Margherita is a typical Neapolitan pizza, made with San Marzano tomatoes, mozzarella fior di latte,[1] fresh basil, salt and extra-virgin olive oil.',
      'weight': '400',
      'price': '12',
      'number': '1'
    },
    {
      'img': 'https://assets.bonappetit.com/photos/5ad51b07ff795274c43a0f58/16:9/w_1200,c_limit/20180403_Basically_122.jpg',
      'title': 'salad',
      'description': 'Pizza Margherita is a typical Neapolitan pizza, made with San Marzano tomatoes, mozzarella fior di latte,[1] fresh basil, salt and extra-virgin olive oil.',
      'weight': '400',
      'price': '16',
      'number': '1'
    }
  ]



  
}
