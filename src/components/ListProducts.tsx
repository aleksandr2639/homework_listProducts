type UrlImage = {
    url_570xN: string
}

type ListProducts = {
    listing_id: number,
    url: string,
    MainImage: UrlImage,
    title: string,
    currency_code: string,
    price: string,
    quantity: number,
    state: string;
}

export default ListProducts
