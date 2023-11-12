import { Messages } from './services/messages';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shoppingCart';
import { NoDiscount, TenPercentDiscount } from './classes/discount';

const noDiscount = new NoDiscount();
const tenPercentDiscount = new TenPercentDiscount();
const shoppingCart = new ShoppingCart(tenPercentDiscount);
const msg = new Messages();
const persistency = new Persistency();
const order = new Order(shoppingCart, msg, persistency);

shoppingCart.addItem(new Product('Camiseta', 30));
shoppingCart.addItem(new Product('Caneca', 13.222232232));
shoppingCart.addItem(new Product('PC', 9.98989));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
order.checkout();
console.log(order.orderStatus);
