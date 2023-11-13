import { Messages } from './services/messages';
import { Persistency } from './services/persistency';
import { Order } from './classes/order';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shoppingCart';
import { TenPercentDiscount } from './classes/discount';
import { IndividualCustomer } from './classes/customer';

const tenPercentDiscount = new TenPercentDiscount();
const shoppingCart = new ShoppingCart(tenPercentDiscount);
const msg = new Messages();
const persistency = new Persistency();
const individualCustomer = new IndividualCustomer(
  'Pedro',
  'Souza',
  '000.111.000-22',
);

const order = new Order(shoppingCart, msg, persistency, individualCustomer);

shoppingCart.addItem(new Product('Camiseta', 30));
shoppingCart.addItem(new Product('Caneca', 13.222232232));
shoppingCart.addItem(new Product('PC', 9.98989));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
order.checkout();
console.log(order.orderStatus);
