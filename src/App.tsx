import {useState} from "react";
import {AddCategoryComponent, GridGiftComponent} from "./gift/component";
function App() {

    const [categories, setCategories] = useState<string[]>([])

    const onAddCategory = (value: string) => {
        if (categories.includes(value.toLowerCase())) return;
        setCategories(categories => [...categories, value.toLowerCase()])
    }



    return (
        <>
            <h1>Gift APP</h1>
            <AddCategoryComponent onNewCategory={onAddCategory}/>
                {
                    categories.map((category) => <GridGiftComponent key={category} category ={category} />)
                }
        </>
    )
}
export default App
