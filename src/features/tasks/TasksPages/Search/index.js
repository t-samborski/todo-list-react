import { Input, Wrapper } from "../Form/styled"
import searchQueryParameter from "../searchQueryParameter";
import { useQueryParameter, useReplaceQueryParameter } from "../queryParameters";

const Search = () => {
 
    const query = useQueryParameter(searchQueryParameter);
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({target}) => {
        replaceQueryParameter({
            key: searchQueryParameter,
            value: target.value.trim() !=="" ? target.value : undefined,
        });
    };

    return (
        <Wrapper search>
            <Input
                placeholder="Wyszukaj zadania"
                value= {query || ""}
                onChange={onInputChange}
            />
        </Wrapper>
    )
}

export default Search;