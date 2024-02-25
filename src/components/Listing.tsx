import Item from './Item'
import ListProducts from './ListProducts'

type List = {
    items : Array<ListProducts>
}
function Listing({ items = [] }: List){
  return (
      <div className="item-list">
          {items.map((item) =>
              <Item item={item} key={item.listing_id}/>
          )}
      </div>
  )
}
export default  Listing
