type CartItem = { name: string; price: number };
type OrderSatus = 'open' | 'closed';

export class ShoppingCartLegacy {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderSatus = 'open';

  addItem(item: CartItem): void {
    this._items.push(item);
  }
  removeItem(index: number): void {
    this._items.splice(index, 1);
  }
  get items(): Readonly<CartItem[]> {
    return this._items;
  }
  get orderStatus(): Readonly<OrderSatus> {
    return this._orderStatus;
  }

  total(): number {
    return Number(
      this._items.reduce((total, next) => total + next.price, 0).toFixed(2),
    );
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Seu carrinho está vazio!');
      return;
    }

    this._orderStatus = 'closed';
    this.sendMessage(`Seu pedido com total de ${this.total()} foi recebido!`);
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }
  sendMessage(msg: string): void {
    console.log('Mensagem enviada:', msg);
  }
  saveOrder(): void {
    console.log('Pedido salvo com sucesso');
  }
  clear(): void {
    console.log('Carrinho de compras foi limpo!');
    this._items.length = 0;
  }
}

const shoppingCartLegacy = new ShoppingCartLegacy();
shoppingCartLegacy.addItem({ name: 'Camiseta', price: 30 });
shoppingCartLegacy.addItem({ name: 'Blusa', price: 14.378278 });
shoppingCartLegacy.addItem({ name: 'Caneca', price: 9.9 });

console.log(shoppingCartLegacy.items);
console.log(shoppingCartLegacy.total());
shoppingCartLegacy.checkout();
console.log(shoppingCartLegacy.orderStatus);
