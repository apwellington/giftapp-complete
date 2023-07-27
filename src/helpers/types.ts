export type AddCategoryComponentProps = { onNewCategory: (value:string) => void }

export type GridGiftComponentProps = { category: string }

export type Gift = {
    id: string;
    title: string;
    url: string;
}


export type GiftGridItemComponentProps = {
    image: Gift
}
