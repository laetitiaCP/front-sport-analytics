import useFetch from "../Hooks/useFetch";

export function WebService(parUserId, parTypeData) {

    const {dataUser, loading, error} = useFetch(parUserId);

}

