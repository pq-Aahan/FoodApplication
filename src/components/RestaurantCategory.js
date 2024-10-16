import ItemList from "./itemList";

const RestaurantCategory=({data})=>{
    return <div>
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 flex justify-between">
            <span className="font-bold text-lg">{data.title}({data.itemCards.length})</span>
            <span>⬇️</span>
        </div>
        <ItemList items={data.itemCards}/>
    </div>
}

export default RestaurantCategory;