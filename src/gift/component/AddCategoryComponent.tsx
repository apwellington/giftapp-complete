import {useState} from "react";
import {AddCategoryComponentProps} from "../../helpers/types";

export const AddCategoryComponent = ({onNewCategory}: AddCategoryComponentProps) => {

    const [inputValue, setInputValue] = useState<string>('')
    const onInputChange = ({target}: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(target.value)
    }
    const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const trimmedInputValue = inputValue.trim()
        if(trimmedInputValue.length <= 2) return;
        if(trimmedInputValue.length > 30) return;
        onNewCategory(trimmedInputValue)
        setInputValue('');
    }
    return (
        <form onSubmit={ (event) => onFormSubmit(event)}>
            <input
                type="text"
                placeholder="Add a new category"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    );
};