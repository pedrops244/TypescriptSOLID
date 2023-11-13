import { CustomerOrder } from './interfaces/customer-protocol';
import { MessagesProtocol } from './interfaces/messages-protocol';
import { PersistencyProtocol } from './interfaces/persistency-protocol';
import { ShoppingCartProtocol } from './interfaces/shopping-cart-protocol';

export class Order {
  private _orderStatus: OrderSatus = 'open';

  constructor(
    private readonly cart: ShoppingCartProtocol,
    private readonly msg: MessagesProtocol,
    private readonly persistency: PersistencyProtocol,
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
