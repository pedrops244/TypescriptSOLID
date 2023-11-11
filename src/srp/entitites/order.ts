import { Messages } from '../services/messages';
import { Persistency } from '../services/persistency';
import { ShoppingCart } from './shoppingCart';

export class Order {
  private _orderStatus: OrderSatus = 'open';

  constructor(
    private readonly cart: ShoppingCart,
    private readonly msg: Messages,
    private readonly persistency: Persistency,
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
      `Seu pedido com total de ${this.cart.total()} foi recebido!`,
    );
    this.persistency.saveOrder();
    this.cart.clear();
  }
}
