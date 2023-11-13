import { Messages } from './services/messages';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shoppingCart';
import { NoDiscount, TenPercentDiscount } from './classes/discount';
import { EntrepriseCustomer, IndividualCustomer } from './classes/customer';

const noDiscount = new NoDiscount();
const tenPercentDiscount = new TenPercentDiscount();
const shoppingCart = new ShoppingCart(tenPercentDiscount);
const msg = new Messages();
const persistency = new Persistency();
const individualCustomer = new IndividualCustomer(
  'Pedro',
  'Souza',
  '000.111.000-22',
);
const enterpriseCustomer = new EntrepriseCustomer(
  'Alurazin',
  '000.111.000-22/000',
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
