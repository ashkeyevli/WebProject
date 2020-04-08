import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {IMenu, IDish} from './model';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const menu = [
      {
        id: 1,
        name: 'Breakfast (06:00 - 11:45)',
        image_url_menu: 'https://ala.basilic.kz/wp-content/uploads/2019/07/breakfast.jpg'
      },
      {
        id: 2,
        name: 'Hot meals',
        image_url_menu: 'https://ala.basilic.kz/wp-content/uploads/2019/02/133-min.jpg'
      },
      {
        id: 3,
        name: ' Side dishes',
        image_url_menu: 'https://ala.basilic.kz/wp-content/uploads/2019/02/135-min.jpg'
      },
      {
        id: 4,
        name: 'Snacks',
        image_url_menu: 'https://ala.basilic.kz/wp-content/uploads/2019/02/113.jpg'
      },
      {
        id: 5,
        name: 'Salads',
        image_url_menu: 'https://ala.basilic.kz/wp-content/uploads/2019/01/maxresdefault.jpg'
      },
      {
        id: 6,
        name: 'Soups',
        image_url_menu: 'https://ala.basilic.kz/wp-content/uploads/2019/02/134-min.jpg'
      }
      ,
      {
        id: 7,
        name: 'Barbecue and grill',
        image_url_menu: 'https://ala.basilic.kz/wp-content/uploads/2019/02/137-min.jpg'
  }
      ,
      {
        id: 8,
        name: 'Desserts',
        image_url_menu: 'https://ala.basilic.kz/wp-content/uploads/2019/11/shokoladnoe-nastroenie-min.jpg'
      }
      ,
      {
        id: 9,
        name: 'Drinks',
        image_url_menu: 'https://ala.basilic.kz/wp-content/uploads/2019/07/Arbuznyj-fresh-min.jpg'
      }
      ];
    const dishes = [
      { id: 61,
        menu: 7,
        name: 'Rack of lamb ',
        price: 8160,
        image_url: 'https://delivery.pgr.kz/image/cache/catalog/Crudo/crudo/Kareyagnenka,obzharennoenauglyah-0x430.jpg',
        description: 'Charcoal lamb rack with sweet tomato sauce'
      },
      { id: 62,
        menu: 7,
        name: 'New York New Zealand',
        price: 11670,
        image_url: 'https://delivery.pgr.kz/image/cache/catalog/Crudo/NyuJork-0x430.jpg',
        description: 'New York New Zealand . 300g.'
      },
      { id: 63,
        menu: 7,
        name: 'New York, USA  steak',
        price: 14640,
        image_url: 'https://delivery.pgr.kz/image/cache/catalog/Crudo/NyuJorkSSHAPrajm-0x430.jpg',
        description: 'New York USA Recommended Roasting medium'
      },
      { id: 64,
        menu: 7,
        name: 'New York burger',
        price: 3890,
        image_url: 'https://delivery.pgr.kz/image/cache/catalog/crudocrudo/BurgerCrudos(mramornojgovyadini,koninojilikuricej)' +
          'kotletojmalosolnimiogurchikamiisousomNyuJork-0x430.jpg',
        description: 'Burger with a marble patty, lettuce, tomato, cucumber, cream cheese for choice beef, chicken'
      },
      { id: 65,
        menu: 7,
        name: 'French chicken',
        price: 4580,
        image_url: 'https://delivery.pgr.kz/image/cache/catalog/Crudo/crudo/franc-0x430.jpg',
        description: 'French corn-fed chicken. 400g'
      },
      { id: 66,
        menu: 7,
        name: 'Finger Ribs Steak',
        price: 6840,
        image_url: 'https://delivery.pgr.kz/image/cache/catalog/Crudo/crudo/FingerRibsStejkizmezhrebernojmyakoti(100g)-0x430.jpg',
        description: 'Finger Ribs Steak from intercostal flesh. 300g.'
      },
      { id: 67,
        menu: 7,
        name: 'Bbc slider',
        price: 3380,
        image_url: 'https://delivery.pgr.kz/image/cache/catalog/crudocrudo/SlajderBbCkotletaizmramornojgovyadini-0x430.jpg',
        description: 'mini burgers with a marble patty, lettuce, tomato, cucumber, choice of beef, chicken (3 pcs.)'
      },
      { id: 68,
        menu: 7,
        name: 'Whole grilled Mediterranean dorado',
        price: 7340,
        image_url: 'https://delivery.pgr.kz/image/cache/catalog/Crudo/crudo/SrednezemnomorskijDoradonagrilecelikom-0x430.jpg',
        description: 'Dorado whole baked in a josper'
      },
      { id: 69,
        menu: 7,
        name: 'Norwegian Salmon Steak',
        price: 6530,
        image_url: 'https://delivery.pgr.kz/image/cache/catalog/Crudo/crudo/' +
          'Stejkiznorvezhskogolososyaspripuschennimimaslinamiicherri-0x430.jpg',
        description: 'Norwegian salmon steak with seasoned olives and cherry'
      },
      { id: 70,
        menu: 7,
        name: 'Duck leg "Magre" with baked sweet pumpkin',
        price: 5380,
        image_url: 'https://delivery.pgr.kz/image/cache/catalog/Crudo/crudo/utin-0x430.jpg',
        description: 'duck leg, pumpkin, grape frosting, spices'
      },
      { id: 71,
        menu: 8,
        name: 'Blueberry dessert',
        price: 2840,
        image_url: 'https://delivery.pgr.kz/image/cache/catalog/Olivier/new/776A3611-0x430.jpg',
        description: 'Blueberry dessert (glutenfree) . 250g.'
      },
      { id: 72,
        menu: 8,
        name: 'Classic Napoleon',
        price: 2000,
        image_url: 'https://delivery.pgr.kz/image/cache/catalog/mainstreet/Napoleonklassicheskij-0x430.jpg',
        description: 'Ingredients: "rough puff" flaky pastry, pastry cream'
      },
      { id: 73,
        menu: 8,
        name: 'Ice cream with chocolate',
        price: 1420,
        image_url: 'https://delivery.pgr.kz/image/cache/catalog/Dostavka/thumb_261_375x282_0_0_crop-0x430.jpg',
        description: 'Ice cream with chocolate. 150g.'
      },
      { id: 74,
        menu: 8,
        name: 'Tiramisu',
        price: 3140,
        image_url: 'https://delivery.pgr.kz/image/cache/catalog/Dostavka/thumb_224_375x282_0_0_crop-0x430.jpg',
        description: 'Tiramisu . 150g.'
      },
      { id: 75,
        menu: 8,
        name: 'Meringue cake with dried apricots',
        price: 3420,
        image_url: 'https://delivery.pgr.kz/image/cache/catalog/Dostavka/thumb_10878_375x282_0_0_crop-0x430.jpg',
        description: 'Meringue cake with dried apricots . 175g.'
      },
      { id: 76,
        menu: 8,
        name: 'Assorted fruit',
        price: 12000,
        image_url: 'https://delivery.pgr.kz/image/cache/catalog/Dostavka/thumb_1950_375x282_0_0_crop-0x430.jpg',
        description: 'Assorted fruit . 1kg.'
      },
      { id: 77,
        menu: 8,
        name: 'Churchkhela',
        price: 1480,
        image_url: 'https://delivery.pgr.kz/image/cache/catalog/Gruzinskijrestoran/Deserti_CHurchhela-0x430.jpg',
        description: 'Grape juice, sugar, flour, walnuts'
      },
      { id: 78,
        menu: 8,
        name: 'Cheese platter (6 types of cheese)',
        price: 4120,
        image_url: 'https://delivery.pgr.kz/image/cache/catalog/Mediterranean/Sirnoeassorti(narezkaiz6vidovsirov)-0x430.jpg',
        description: 'provolone, tartufo, pecorino, grana padano, scamorza, gorgonzola, jam, honey, walnuts, grape, mint'
      },
      { id: 79,
        menu: 8,
        name: 'Pistachio roll',
        price: 3280,
        image_url: 'https://delivery.pgr.kz/image/cache/catalog/Mediterranean/Deserti_Fistashkovijrulet-0x430.jpg',
        description: 'meringue, almond, pistachio, whipped cream'
      },
      { id: 80,
        menu: 8,
        name: 'Smetannik',
        price: 2980,
        image_url: 'https://delivery.pgr.kz/image/cache/catalog/Mediterranean/Deserti_Smetannik-0x430.jpg',
        description: 'honey, egg, flour, sugar, baking powder, lemon juice, cream, sour cream, powdered sugar'
      },


      { id: 81,
      menu: 9,
      name: 'Apple',
      price: 1200,
      image_url: 'https://delivery.pgr.kz/image/cache/catalog/TAL/Drinks/PAGO_Apple-0x430.png',
      description: '280ml.'
  },

      {
        id: 82,
        menu: 9,
        name: 'PAGO Cherry',
        price: 1200,
        image_url: 'https://delivery.pgr.kz/image/cache/catalog/TAL/Drinks/PAGO_Cherry-0x430.jpg',
        description: '200ml'
      }
      ,
      {
        id: 83,
        menu: 9,
        name: 'PAGO Orange',
        price: 1200,
        image_url: 'https://delivery.pgr.kz/image/cache/catalog/TAL/Drinks/PAGO_Orange-0x430.png',
        description: '200ml'
      }
      ,
      {
        id: 84,
        menu: 9,
        name: 'PAGO Tomato',
        price: 1200,
        image_url: 'https://delivery.pgr.kz/image/cache/catalog/TAL/Drinks/PAGO_Tomato-0x430.png',
        description: '200ml'
      }
      ,
      {
        id: 85,
        menu: 9,
        name: 'Tassay б/г',
        price: 350,
        image_url: 'https://delivery.pgr.kz/image/cache/catalog/TAL/Drinks/Tassay_bez-0x430.jpg',
        description: '500ml'
      }
      ,
      {
        id: 86,
        menu: 9,
        name: 'Borjomi',
        price: 800,
        image_url: 'https://delivery.pgr.kz/image/cache/catalog/Bar/borjomi-330ml-0x430.jpg',
        description: '330ml'
      }
      ,
      {
        id: 87,
        menu: 9,
        name: 'Tassay Excellent * still',
        price: 1400,
        image_url: 'https://delivery.pgr.kz/image/cache/catalog/Bar/tassayexellent0,75-0x430.jpg',
        description: '750ml'
      }
      ,
      {
        id: 88,
        menu: 9,
        name: 'Reserve Negroni',
        price: 2500,
        image_url: 'https://delivery.pgr.kz/image/cache/catalog/Bar/Bottlecoctails/ReserveNegroni2-0x430.jpg',
        description: 'Gin, Martini Rubino, Campari Bitter. 140ml.'
      }
      ,
      {
        id: 89,
        menu: 9,
        name: 'Whiskey Sour 2.0',
        price: 2500,
        image_url: 'https://delivery.pgr.kz/image/cache/catalog/Bar/Bottlecoctails/WhiskeySour6-0x430.jpg',
        description: 'Whiskey, Apple Acid, Sugar. 140ml'
      }
      ,
      {
        id: 90,
        menu: 9,
        name: 'Pina Colada 2.0',
        price: 2500,
        image_url: 'https://delivery.pgr.kz/image/cache/catalog/Bar/Bottlecoctails/PinaCalada6-0x430.jpg',
        description: 'Rum, Pineapple, Coconut. 140ml'
      }

    ];
    return {dishes, menu};
  }

// ,
//   genId(menu: IMenu[]): number {
//     return menu.length > 0 ? Math.max(...menu.map( menuitem => menuitem.id)) + 1 : 1;
//   }
  constructor() { }
}
