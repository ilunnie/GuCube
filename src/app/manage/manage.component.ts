import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './manage.component.html',
  styleUrl: './manage.component.css'
})
export class ManageComponent {
  showUnavailable = true;
  list = [
    {
      id: "inoaprnva",
      available: true,
      name: "blabla",
      description: "asnhlidh salhds gk dsfu hkdjfh gafdjlk asdjkjj jdk s akjfaf",
      price: 12.50,
      image: "https://live.staticflickr.com/6229/6378261011_382d6a1bb2_b.jpg",
      time: "2 minutos",
      ingredients: [
        "tomate", "pericles", "humburguer", "Qi jo"
      ],
      categories: [
        "Hamburguer", "Batata"
      ]
    },
    {
      id: "874cyksd",
      available: true,
      name: "blabla 2",
      description: "asnhlidh salhds gk dsfu hkdjfh gafdjlk asdjkjj jdk s akjfaf",
      price: 12.50,
      image: "https://live.staticflickr.com/6229/6378261011_382d6a1bb2_b.jpg",
      time: "2 minutos",
      ingredients: [
        "tomate", "pericles", "humburguer", "Qi jo"
      ],
      categories: [
        "Hamburguer", "Batata"
      ]
    },
    {
      id: "p34cut8oma",
      available: false,
      name: "blabla",
      description: "asnhlidh salhds gk dsfu hkdjfh gafdjlk asdjkjj jdk s akjfaf",
      price: 12.50,
      image: "https://live.staticflickr.com/6229/6378261011_382d6a1bb2_b.jpg",
      time: "2 minutos",
      ingredients: [
        "tomate", "pericles", "humburguer", "Qi jo"
      ],
      categories: [
        "Hamburguer", "Batata"
      ]
    },
    {
      id: "onsaykcgr",
      available: true,
      name: "blabla",
      description: "asnhlidh salhds gk dsfu hkdjfh gafdjlk asdjkjj jdk s akjfaf",
      price: 12.50,
      image: "https://live.staticflickr.com/6229/6378261011_382d6a1bb2_b.jpg",
      time: "2 minutos",
      ingredients: [
        "tomate", "pericles", "humburguer", "Qi jo"
      ],
      categories: [
        "Hamburguer", "Batata"
      ]
    }
  ]

  modPrice(event: any, item: any) {
    this.list.forEach(it => {
      if(it.id == item) {
        it.price = parseFloat(event.target.value ? event.target.value : '0')
      }
    })
    console.log(this.list)
  }
}
