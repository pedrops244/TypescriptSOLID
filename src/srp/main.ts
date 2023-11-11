import { Messages } from './services/messages';
import { Order } from './entitites/order';
import { Persistency } from './services/persistency';
import { Product } from './entitites/product';
import { ShoppingCart } from './entitites/shoppingCart';

const shoppingCart = new ShoppingCart();
const msg = new Messages();
const persistency = new Persistency();
const order = new Order(shoppingCart, msg, persistency);

shoppingCart.addItem(new Product('Camiseta', 30));
shoppingCart.addItem(new Product('Caneca', 13.222232232));
shoppingCart.addItem(new Product('PC', 9.98989));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
order.checkout();
console.log(order.orderStatus);
