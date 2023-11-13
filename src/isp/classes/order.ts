import { Messages } from '../services/messages';
import { Persistency } from '../services/persistency';
import { CustomerOrder } from './interfaces/customer-protocol';
import { ShoppingCart } from './shoppingCart';

export class Order {
  private _orderStatus: OrderSatus = 'open';

  constructor(
    private readonly cart: ShoppingCart,
    private readonly msg: Messages,
    private readonly persistency: Persistency,
    private readonly customer: CustomerOrder,
  ) {}

  get orderStatus(): Readonly<OrderSatus> {
    return this._orderStatus;
  }
  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Seu carrinho está vazio!');
      return;
    }
    this._orderStatus = 'closed';
    this.msg.sendMessage(
      `Seu pedido com total de ${this.cart.totalWithDiscount()} foi recebido!`,
    );
    this.persistency.saveOrder();
    this.cart.clear();
    console.log(
      `O cliente é: ${this.customer.getName()} com a identificação ${this.customer.getIDN()}`,
    );
  }
}
