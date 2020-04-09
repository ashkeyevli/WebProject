import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {IMenu, IDish, IOrder} from './model';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const order = [
      // {
      //   id: Number,
      //   dish_name: String
      // }
    ];
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
      {
        id: 1,
        menu: 1,
        name: 'Scrambled eggs',
        price: 1590,
        imageUrl: 'https://aucdn.ar-cdn.com/recipes/originals/17a47fa0-b5c9-426e-b239-575c2e687fce.jpg',
        description: 'Highly versatile, scrambled eggs can be tailor-made with cheeses, veggies and meats.',
        count: 1
      },
      {
        id: 2,
        menu: 1,
        name: 'Biscuits and gravy',
        price: 1690,
        imageUrl: 'https://images-gmi-pmc.edge-generalmills.com/5c98f531-6b8c-494a-9171-5c7743ca3ca3.jpg',
        // tslint:disable-next-line:max-line-length
        description: 'Southern-style sausage gravy poured over a fresh biscuit is not just a filling meal but will hit you like a ton of bricks -- sometimes even hours later.',
        count: 1
      },
      {
        id: 3,
        menu: 1,
        name: 'Bacon weave breakfast tacos',
        price: 1890,
        imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/190410-bacon-weaved-breakfast-tacos-232-1555948102.jpg',
        description: 'Nothing kickstarts your day like a high protein, low-carb breakfast!',
        count: 1
      },
      {
        id: 4,
        menu: 1,
        name: 'Pizza',
        price: 1290,
        imageUrl: 'https://freshly-baked.com/wp-content/uploads/2020/01/cold-fermented-pizza-dough.jpg',
        // tslint:disable-next-line:max-line-length
        description: 'Savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (anchovies, olives, meat, etc.) baked at a high temperature.'
        ,
        count: 1
      },
      {
        id: 5,
        menu: 1,
        name: 'Doughnuts',
        price: 1190,
        imageUrl: 'https://i1.wp.com/www.patesmith.co/wp-content/uploads/2016/06/SimpsonsDoughnuts8.jpg?resize=1140%2C660',
        description: 'Glazed Simpson doughnuts.'
        ,
        count: 1},
      {
        id: 6,
        menu: 1,
        name: 'Pancakes',
        price: 1490,
        imageUrl: 'https://d3awvtnmmsvyot.cloudfront.net/api/file/6fTZjAw9Tjqf4XrddmRQ',
        description: 'Light&fluffy pancakes with fruits and honey on the top.'
        ,
        count: 1},
      {
        id: 7,
        menu: 1,
        name: 'Granola',
        price: 1590,
        imageUrl: 'https://flockler.com/thumbs/sites/192/fruity_cereal_bowl_19538-1_s600x600_c854x499_l0x450.png',
        description: 'Oaty-fruity cereal'
        ,
        count: 1},
      {
        id: 8,
        menu: 1,
        name: 'Brisket breakfast',
        price: 1890,
        imageUrl: 'https://embed.widencdn.net/img/beef/gxxmkurqif/exact/steak-tartine.jpg?keep=c&u=7fueml',
        description: 'Using leftover beef Brisket, just add crusty bread, cheese, eggs and onion for a delicious brunch meal. '
        ,
        count: 1},
      {
        id: 9,
        menu: 1,
        name: 'Sweet Potato and Kale Frittata',
        price: 2190,
        // tslint:disable-next-line:max-line-length
        imageUrl: 'https://storage-cube.quebecormedia.com/v1/cl_prod/canadian_living/86d67ca67bfd13d9714fd116ac9d784c928befc0/kale-sweet-potato-frittata.jpg',
        description: 'Amazing start of your day!'
        ,
        count: 1},
      {
        id: 10,
        menu: 1,
        name: 'Curry-Avocado Crispy Egg Toast',
        price: 1990,
        // tslint:disable-next-line:max-line-length
        imageUrl: 'https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/43/1509125249-gallery-1489589873-curryavo.jpg?crop=0.9989583333333334xw:1xh;center,top&resize=980:*',
        description: 'Nothing says "good morning" like a fried egg drizzled with curry oil.'
        ,
        count: 1},
      {
        id: 11,
        menu: 2,
        name: 'Creamy Tomato Pasta',
        price: 1990,
        // tslint:disable-next-line:max-line-length
        imageUrl: 'https://www.thespruceeats.com/thmb/dPdJ5MrJRNrbn39oRqNowTUHMDA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/creamy-tomato-pasta-481963-Hero-5b6afcf6c9e77c0050e73162.jpg',
        description: 'Adding cream cheese to tomato sauce gives the dish a creamy tang that is just delicious. '
        ,
        count: 1},
      {
        id: 12,
        menu: 2,
        name: 'Baked Honey Mustard Chicken',
        price: 2190,
        // tslint:disable-next-line:max-line-length
        imageUrl: 'https://www.thirtyhandmadedays.com/wp-content/uploads/2014/08/honeymustardhorizontal.jpg',
        description: 'The juicy and flavorful chicken goes well with rice, like our aromatic coconut rice.'
        ,
        count: 1},
      {
        id: 13,
        menu: 2,
        name: 'Red and White Tortellini',
        price: 1890,
        // tslint:disable-next-line:max-line-length
        imageUrl: 'https://www.thespruceeats.com/thmb/NXg-s-NFUv09TNTPjSl8zKHO55w=/2128x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Redandwhitetortellini-GettyImages-164933289-5a2ac112494ec9003655d188.jpg',
        description: 'Vegetarian dish.'
      },
      {
        id: 14,
        menu: 2,
        name: 'Classic Meatloaf',
        price: 2290,
        // tslint:disable-next-line:max-line-length
        imageUrl: 'https://nourishingjoy.com/wp-content/uploads/2015/10/meatloaf-featured1.jpg',
        description: 'Juicy lean beef and veggies baked in a sturdy loaf.'
      },
      {
        id: 15,
        menu: 2,
        name: 'Pot Roast',
        price: 1990,
        // tslint:disable-next-line:max-line-length
        imageUrl: 'https://www.thespruceeats.com/thmb/IRv8fWtHHctJPjm-182M9_cEEAo=/2121x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Potroast-GettyImages-173841469-5a2ac2e17d4be8003628a5bd.jpg',
        description: 'Flaky and tender beef roast.'
      },
      {
        id: 16,
        menu: 2,
        name: 'Crockpot Chicken and Dumplings',
        price: 2390,
        // tslint:disable-next-line:max-line-length
        imageUrl: 'https://www.thespruceeats.com/thmb/jH09TPU51usghlq6FPiDL2tHJu0=/2121x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/chickenanddumplings-GettyImages-155154140-5a2ac3ad47c26600361404de.jpg',
        // tslint:disable-next-line:max-line-length
        description: 'Garnish with fresh parsley and enjoy with a belly-warming classic bread basket with bacon yeast rolls and softened butter.'
      },
      {
        id: 17,
        menu: 2,
        name: 'Honey Orange Fish Fillets',
        price: 2490,
        // tslint:disable-next-line:max-line-length
        imageUrl: 'https://www.thespruceeats.com/thmb/JAxpbDEmwp474V7spfvNV0X4XVU=/1550x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/HoneyOrangeFishFillets-GettyImages-135577772-5a2ac4d19e94270037088678.jpg',
        description: 'Honey and orange make a beautiful and tasty glaze on tender fish.'
      },
      {
        id: 18,
        menu: 2,
        name: 'Meatball Stew Casserole',
        price: 2390,
        // tslint:disable-next-line:max-line-length
        imageUrl: 'https://www.thespruceeats.com/thmb/7S38AW4wozgX9DgBR49BnTdt8Q4=/1986x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Meatballstew-GettyImages-72322781-5a2ac545eb4d5200366b6453.jpg',
        description: 'Meatballs, cream soup, peas and carrots, and mashed potatoes.'
      },
      {
        id: 19,
        menu: 2,
        name: 'Vegan Skewers',
        price: 1890,
        // tslint:disable-next-line:max-line-length
        imageUrl: 'data:image/jpeg;base64,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',
        // tslint:disable-next-line:max-line-length
        description: 'Vegan dishes are always a good starting point because with one option you can cover a few bases like gluten-free, dairy-free and egg-free.'
      },
      {
        id: 20,
        menu: 2,
        name: 'Vietnamise Porkchops',
        price: 2190,
        // tslint:disable-next-line:max-line-length
        imageUrl: 'https://www.thespruceeats.com/thmb/BhmMpHt3OuYT4jF-UfNMaUgA0vk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/VietnamesePorkChops-final2-e6ccc3c007624dacbe36d805e266615b.jpg',
        description: 'With aromatic sauce that features lemongrass, fish sauce, garlic, and sugar.'
      },
      {
        id: 21,
        menu: 3,
        name: 'Roasted root vegetables',
        price: 890,
        imageUrl: 'https://ohsweetbasil.com/wp-content/uploads/roasted-root-vegetable-side-dish-ohsweetbasil.com-3l.jpg',
        description: 'Vegan product, gluten-free and sugar-free.'
      },
      {
        id: 22,
        menu: 3,
        name: 'Parmesan rice',
        price: 790,
        imageUrl: 'https://spicysouthernkitchen.com/wp-content/uploads/parmesan-rice-1-lighter-634x1024.jpg',
        description: 'Creamy Parmesan Rice has so much flavor from garlic and freshly grated Parmesan cheese.'
      },
      {
        id: 23,
        menu: 3,
        name: 'Mushroom rice',
        price: 890,
        imageUrl: 'https://www.dinneratthezoo.com/wp-content/uploads/2018/07/mushroom-rice-4.jpg',
        description: 'Rice with Champignons.'
      },
      {
        id: 24,
        menu: 3,
        name: 'Charred broccoli',
        price: 690,
        imageUrl: 'https://www.fifteenspatulas.com/wp-content/uploads/2018/07/Charred-Broccoli-Fifteen-Spatulas-1-640x959.jpg',
        description: 'This Charred Broccoli side dish is delicious, with flavors like fresh lemon.'
      },
      {
        id: 25,
        menu: 3,
        name: 'Parmesan-roasted broccoli',
        price: 890,
        // tslint:disable-next-line:max-line-length
        imageUrl: 'https://cookieandkate.com/images/2018/03/parmesan-roasted-broccoli-with-balsamic-vinegar.jpg',
        description: 'Parmesan cheese makes it gentle and soft.'
      },
      {
        id: 26,
        menu: 3,
        name: 'Southwest roasted potatoes',
        price: 790,
        imageUrl: 'https://letsdishrecipes.com/wp-content/uploads/2019/04/Southwest-Roasted-Potatoes-feature.jpg',
        description: 'Diced potatoes are tossed with southwest spices like cayenne and cumin, then roasted until tender.'
      },
      {
        id: 27,
        menu: 3,
        name: 'Cheesy potato casserole',
        price: 990,
        imageUrl: 'https://ohsweetbasil.com/wp-content/uploads/the-best-cheesy-potatoes-casserole-recipe-10.jpg',
        description: 'Simple baked potatoes with cheese.'
      },
      {
        id: 28,
        menu: 3,
        name: 'Buckwheat with mushrooms',
        price: 1190,
        imageUrl: 'https://i.pinimg.com/736x/ee/72/19/ee7219bf679035044f9f1ecbea7e15e2.jpg',
        description: 'Buckwheat Kasha with Sauteed Mushrooms, Onions, and Peas, drizzled with truffle oil.'
      },
      {
        id: 29,
        menu: 3,
        name: 'Roasted asparagus',
        price: 1090,
        imageUrl: 'https://www.chelseasmessyapron.com/wp-content/uploads/2016/03/Roasted-Asparagus-1.jpg',
        description: 'Delicious Roasted Asparagus with the perfect easy seasoning blend and grated Parmesan cheese.'
      },
      {
        id: 30,
        menu: 3,
        name: 'Broccoli-pasta',
        price: 890,
        imageUrl: 'https://cdn3.tmbi.com/toh/GoogleImagesPostCard/Broccoli-Pasta-Side-Dish_EXPS_SRBZ16_86_C09_02_6b.jpg',
        description: 'With garlic and cheese.'
      },
      {
        id: 31,
        menu: 4,
        name: 'Bitterballen',
        price: 1090,
        // tslint:disable-next-line:max-line-length
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bitterballen_mosterd_mayo.jpg/120px-Bitterballen_mosterd_mayo.jpg',
        description: 'A round shaped beef-ragout version of croquette.'
      },
      {
        id: 32,
        menu: 4,
        name: 'Crêpe',
        price: 1290,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Cr%C3%AApe_opened_up.jpg/120px-Cr%C3%AApe_opened_up.jpg',
        description: 'A type of very thin pancake, usually made from wheat flour or buckwheat flour.'
      },
      {
        id: 33,
        menu: 4,
        name: 'Chebakia',
        price: 890,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Chebakia.jpg/120px-Chebakia.jpg',
        description: 'A sesame cookie that is fried and covered with honey.'
      },
      {
        id: 34,
        menu: 4,
        name: 'Oatmeal cookie',
        price: 990,
        // tslint:disable-next-line:max-line-length
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Banana_oatmeal_chocolate_chip_cookies.jpg/120px-Banana_oatmeal_chocolate_chip_cookies.jpg',
        description: 'Cookies prepared with oatmeal.'
      },
      {
        id: 35,
        menu: 4,
        name: 'Sandwich',
        price: 590,
        // tslint:disable-next-line:max-line-length
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Peanut-Butter-Jelly-Sandwich.png/120px-Peanut-Butter-Jelly-Sandwich.png',
        description: 'A snack typically consisting of two or more slices of bread with one or more fillings between them.'
      },
      {
        id: 36,
        menu: 4,
        name: 'Nachos',
        price: 890,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Nachos-cheese.jpg/120px-Nachos-cheese.jpg',
        description: 'Fried corn tortillas covered with melted cheddar cheese, pickled jalapeño peppers, and other toppings.'
      },
      {
        id: 37,
        menu: 4,
        name: 'Tortilla chips',
        price: 690,
        // tslint:disable-next-line:max-line-length
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Mission_Tortilla_Triangles.JPG/120px-Mission_Tortilla_Triangles.JPG',
        description: 'Wedges of fried corn tortillas'
      },
      {
        id: 38,
        menu: 4,
        name: '',
        price: 1090,
        imageUrl: '',
        description: ''
      },
      {
        id: 39,
        menu: 4,
        name: 'Pastry',
        price: 790,
        // tslint:disable-next-line:max-line-length
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Cream_puff_%28cropped_and_edited%29.jpg/120px-Cream_puff_%28cropped_and_edited%29.jpg',
        description: 'Pictured is a profiterole, also known as a cream puff.'
      },
      {
        id: 40,
        menu: 4,
        name: 'Churros',
        price: 890,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Churros_el_hatillo.JPG/120px-Churros_el_hatillo.JPG',
        description: 'Сhurros drizzled with chocolate.'
      },
      {
        id: 41,
        menu: 5,
        name: '',
        price: 90,
        imageUrl: '',
        description: ''
      },
      {
        id: 42,
        menu: 5,
        name: '',
        price: 90,
        imageUrl: '',
        description: ''
      },
      {
        id: 43,
        menu: 5,
        name: '',
        price: 90,
        imageUrl: '',
        description: ''
      },
      {
        id: 44,
        menu: 5,
        name: '',
        price: 90,
        imageUrl: '',
        description: ''
      },
      {
        id: 45,
        menu: 5,
        name: '',
        price: 90,
        imageUrl: '',
        description: ''
      },
      {
        id: 46,
        menu: 5,
        name: '',
        price: 90,
        imageUrl: '',
        description: ''
      },
      {
        id: 47,
        menu: 5,
        name: '',
        price: 90,
        imageUrl: '',
        description: ''
      },
      {
        id: 48,
        menu: 5,
        name: '',
        price: 90,
        imageUrl: '',
        description: ''
      },
      {
        id: 49,
        menu: 5,
        name: '',
        price: 90,
        imageUrl: '',
        description: ''
      },
      {
        id: 50,
        menu: 5,
        name: '',
        price: 90,
        imageUrl: '',
        description: ''
      },
      {
        id: 51,
        menu: 6,
        name: '',
        price: 90,
        imageUrl: '',
        description: ''
      },
      {
        id: 52,
        menu: 6,
        name: '',
        price: 90,
        imageUrl: '',
        description: ''
      },
      {
        id: 53,
        menu: 6,
        name: '',
        price: 90,
        imageUrl: '',
        description: ''
      },
      {
        id: 54,
        menu: 6,
        name: '',
        price: 90,
        imageUrl: '',
        description: ''
      },
      {
        id: 55,
        menu: 6,
        name: '',
        price: 90,
        imageUrl: '',
        description: ''
      },
      {
        id: 56,
        menu: 6,
        name: '',
        price: 90,
        imageUrl: '',
        description: ''
      },
      {
        id: 57,
        menu: 6,
        name: '',
        price: 90,
        imageUrl: '',
        description: ''
      },
      {
        id: 58,
        menu: 6,
        name: '',
        price: 90,
        imageUrl: '',
        description: ''
      },
      {
        id: 59,
        menu: 6,
        name: '',
        price: 90,
        imageUrl: '',
        description: ''
      },
      {
        id: 60,
        menu: 6,
        name: '',
        price: 990,
        imageUrl: '',
        description: ''
      },
      { id: 61,
        menu: 7,
        name: 'Rack of lamb ',
        price: 8160,
        imageUrl: 'https://delivery.pgr.kz/image/cache/catalog/Crudo/crudo/Kareyagnenka,obzharennoenauglyah-0x430.jpg',
        description: 'Charcoal lamb rack with sweet tomato sauce'
      },
      { id: 62,
        menu: 7,
        name: 'New York New Zealand',
        price: 11670,
        imageUrl: 'https://delivery.pgr.kz/image/cache/catalog/Crudo/NyuJork-0x430.jpg',
        description: 'New York New Zealand . 300g.'
      },
      { id: 63,
        menu: 7,
        name: 'New York, USA  steak',
        price: 14640,
        imageUrl: 'https://delivery.pgr.kz/image/cache/catalog/Crudo/NyuJorkSSHAPrajm-0x430.jpg',
        description: 'New York USA Recommended Roasting medium'
      },
      { id: 64,
        menu: 7,
        name: 'New York burger',
        price: 3890,
        imageUrl: 'https://delivery.pgr.kz/image/cache/catalog/crudocrudo/BurgerCrudos(mramornojgovyadini,koninojilikuricej)' +
          'kotletojmalosolnimiogurchikamiisousomNyuJork-0x430.jpg',
        description: 'Burger with a marble patty, lettuce, tomato, cucumber, cream cheese for choice beef, chicken'
      },
      { id: 65,
        menu: 7,
        name: 'French chicken',
        price: 4580,
        imageUrl: 'https://delivery.pgr.kz/image/cache/catalog/Crudo/crudo/franc-0x430.jpg',
        description: 'French corn-fed chicken. 400g'
      },
      { id: 66,
        menu: 7,
        name: 'Finger Ribs Steak',
        price: 6840,
        imageUrl: 'https://delivery.pgr.kz/image/cache/catalog/Crudo/crudo/FingerRibsStejkizmezhrebernojmyakoti(100g)-0x430.jpg',
        description: 'Finger Ribs Steak from intercostal flesh. 300g.'
      },
      { id: 67,
        menu: 7,
        name: 'Bbc slider',
        price: 3380,
        imageUrl: 'https://delivery.pgr.kz/image/cache/catalog/crudocrudo/SlajderBbCkotletaizmramornojgovyadini-0x430.jpg',
        description: 'mini burgers with a marble patty, lettuce, tomato, cucumber, choice of beef, chicken (3 pcs.)'
      },
      { id: 68,
        menu: 7,
        name: 'Whole grilled Mediterranean dorado',
        price: 7340,
        imageUrl: 'https://delivery.pgr.kz/image/cache/catalog/Crudo/crudo/SrednezemnomorskijDoradonagrilecelikom-0x430.jpg',
        description: 'Dorado whole baked in a josper'
      },
      { id: 69,
        menu: 7,
        name: 'Norwegian Salmon Steak',
        price: 6530,
        imageUrl: 'https://delivery.pgr.kz/image/cache/catalog/Crudo/crudo/' +
          'Stejkiznorvezhskogolososyaspripuschennimimaslinamiicherri-0x430.jpg',
        description: 'Norwegian salmon steak with seasoned olives and cherry'
      },
      { id: 70,
        menu: 7,
        name: 'Duck leg "Magre" with baked sweet pumpkin',
        price: 5380,
        imageUrl: 'https://delivery.pgr.kz/image/cache/catalog/Crudo/crudo/utin-0x430.jpg',
        description: 'duck leg, pumpkin, grape frosting, spices'
      },
      { id: 71,
        menu: 8,
        name: 'Blueberry dessert',
        price: 2840,
        imageUrl: 'https://delivery.pgr.kz/image/cache/catalog/Olivier/new/776A3611-0x430.jpg',
        description: 'Blueberry dessert (glutenfree) . 250g.'
      },
      { id: 72,
        menu: 8,
        name: 'Classic Napoleon',
        price: 2000,
        imageUrl: 'https://delivery.pgr.kz/image/cache/catalog/mainstreet/Napoleonklassicheskij-0x430.jpg',
        description: 'Ingredients: "rough puff" flaky pastry, pastry cream'
      },
      { id: 73,
        menu: 8,
        name: 'Ice cream with chocolate',
        price: 1420,
        imageUrl: 'https://delivery.pgr.kz/image/cache/catalog/Dostavka/thumb_261_375x282_0_0_crop-0x430.jpg',
        description: 'Ice cream with chocolate. 150g.'
      },
      { id: 74,
        menu: 8,
        name: 'Tiramisu',
        price: 3140,
        imageUrl: 'https://delivery.pgr.kz/image/cache/catalog/Dostavka/thumb_224_375x282_0_0_crop-0x430.jpg',
        description: 'Tiramisu . 150g.'
      },
      { id: 75,
        menu: 8,
        name: 'Meringue cake with dried apricots',
        price: 3420,
        imageUrl: 'https://delivery.pgr.kz/image/cache/catalog/Dostavka/thumb_10878_375x282_0_0_crop-0x430.jpg',
        description: 'Meringue cake with dried apricots . 175g.'
      },
      { id: 76,
        menu: 8,
        name: 'Assorted fruit',
        price: 12000,
        imageUrl: 'https://delivery.pgr.kz/image/cache/catalog/Dostavka/thumb_1950_375x282_0_0_crop-0x430.jpg',
        description: 'Assorted fruit . 1kg.'
      },
      { id: 77,
        menu: 8,
        name: 'Churchkhela',
        price: 1480,
        imageUrl: 'https://delivery.pgr.kz/image/cache/catalog/Gruzinskijrestoran/Deserti_CHurchhela-0x430.jpg',
        description: 'Grape juice, sugar, flour, walnuts'
      },
      { id: 78,
        menu: 8,
        name: 'Cheese platter (6 types of cheese)',
        price: 4120,
        imageUrl: 'https://delivery.pgr.kz/image/cache/catalog/Mediterranean/Sirnoeassorti(narezkaiz6vidovsirov)-0x430.jpg',
        description: 'provolone, tartufo, pecorino, grana padano, scamorza, gorgonzola, jam, honey, walnuts, grape, mint'
      },
      { id: 79,
        menu: 8,
        name: 'Pistachio roll',
        price: 3280,
        imageUrl: 'https://delivery.pgr.kz/image/cache/catalog/Mediterranean/Deserti_Fistashkovijrulet-0x430.jpg',
        description: 'meringue, almond, pistachio, whipped cream'
      },
      { id: 80,
        menu: 8,
        name: 'Smetannik',
        price: 2980,
        imageUrl: 'https://delivery.pgr.kz/image/cache/catalog/Mediterranean/Deserti_Smetannik-0x430.jpg',
        description: 'honey, egg, flour, sugar, baking powder, lemon juice, cream, sour cream, powdered sugar'
      },


      { id: 81,
      menu: 9,
      name: 'Apple',
      price: 1200,
      imageUrl: 'https://delivery.pgr.kz/image/cache/catalog/TAL/Drinks/PAGO_Apple-0x430.png',
      description: '280ml.'
  },

      {
        id: 82,
        menu: 9,
        name: 'PAGO Cherry',
        price: 1200,
        imageUrl: 'https://delivery.pgr.kz/image/cache/catalog/TAL/Drinks/PAGO_Cherry-0x430.jpg',
        description: '200ml'
      }
      ,
      {
        id: 83,
        menu: 9,
        name: 'PAGO Orange',
        price: 1200,
        imageUrl: 'https://delivery.pgr.kz/image/cache/catalog/TAL/Drinks/PAGO_Orange-0x430.png',
        description: '200ml'
      }
      ,
      {
        id: 84,
        menu: 9,
        name: 'PAGO Tomato',
        price: 1200,
        imageUrl: 'https://delivery.pgr.kz/image/cache/catalog/TAL/Drinks/PAGO_Tomato-0x430.png',
        description: '200ml'
      }
      ,
      {
        id: 85,
        menu: 9,
        name: 'Tassay б/г',
        price: 350,
        imageUrl: 'https://delivery.pgr.kz/image/cache/catalog/TAL/Drinks/Tassay_bez-0x430.jpg',
        description: '500ml'
      }
      ,
      {
        id: 86,
        menu: 9,
        name: 'Borjomi',
        price: 800,
        imageUrl: 'https://delivery.pgr.kz/image/cache/catalog/Bar/borjomi-330ml-0x430.jpg',
        description: '330ml'
      }
      ,
      {
        id: 87,
        menu: 9,
        name: 'Tassay Excellent * still',
        price: 1400,
        imageUrl: 'https://delivery.pgr.kz/image/cache/catalog/Bar/tassayexellent0,75-0x430.jpg',
        description: '750ml'
      }
      ,
      {
        id: 88,
        menu: 9,
        name: 'Reserve Negroni',
        price: 2500,
        imageUrl: 'https://delivery.pgr.kz/image/cache/catalog/Bar/Bottlecoctails/ReserveNegroni2-0x430.jpg',
        description: 'Gin, Martini Rubino, Campari Bitter. 140ml.'
      }
      ,
      {
        id: 89,
        menu: 9,
        name: 'Whiskey Sour 2.0',
        price: 2500,
        imageUrl: 'https://delivery.pgr.kz/image/cache/catalog/Bar/Bottlecoctails/WhiskeySour6-0x430.jpg',
        description: 'Whiskey, Apple Acid, Sugar. 140ml'
      }
      ,
      {
        id: 90,
        menu: 9,
        name: 'Pina Colada 2.0',
        price: 2500,
        imageUrl: 'https://delivery.pgr.kz/image/cache/catalog/Bar/Bottlecoctails/PinaCalada6-0x430.jpg',
        description: 'Rum, Pineapple, Coconut. 140ml'
      }

    ];
    return {dishes, menu, order};
  }

  genId(order: IOrder[]): number {
    return order.length > 0 ? Math.max(...order.map( orderitem => orderitem.id)) + 1 : 1;
  }
  constructor() { }
}
