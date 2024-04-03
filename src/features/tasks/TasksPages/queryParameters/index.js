import { useLocation, useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const useQueryParameter = (keyName) => {
    const location = useLocation();
    const serchParams = (new URLSearchParams(location.search)).get(keyName);
    return serchParams;
};

export const useReplaceQueryParameter = () => {

    const location = useLocation();
    const history = useHistory();

    return ({ key, value }) => {
        const searchParams = new URLSearchParams(location.search);

        if (value === undefined) {
            searchParams.delete(key);
        } else {
            searchParams.set(key, value);
        }
        history.push(`${location.pathname}?${searchParams.toString()}`);
    };
};

