import ListProducts from "./ListProducts";

type ItemProps = {
    item: ListProducts
}
function Item ( { item } : ItemProps) {

    if (item.state != "active") return;
    const money = ( currency: string, price: string ): string => {
        if (currency === "USD") {
            return "$" + price
        } else if (currency === "EUR") {
            return "\u20AC" + price
        } else {
            return price + " " + currency
        }
    }

    const title : string = item.title.length <= 50 ? item.title : item.title.slice(0, 50) + '...'

    const level: string = item.quantity <= 10 ? 'level-low' : item.quantity < 20 ? 'level-medium' : 'level-high'

   return (
      <>
        <div className="item">
            <div className="item-image">
                <a href={item.url}>
                    <img src={item.MainImage.url_570xN}/>
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{title}</p>
                <p className="item-price">{money(item.currency_code, item.price)}</p>
                <p className={"item-quantity " + level}>{item.quantity} left</p>
            </div>
        </div>
      </>
   )
}

export default Item
