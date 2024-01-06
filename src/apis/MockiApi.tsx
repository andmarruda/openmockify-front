export const ListMocki = (subdomainId : number) => {
    return {
        url: `${import.meta.env.VITE_BACKEND_URL}/v1/subdomain/${subdomainId}/mocki`,
        options: {
            method: "GET"
        }
    };
}

export const SearchMocki = (subdomainId : number, search : string) => {
    return {
        url: `${import.meta.env.VITE_BACKEND_URL}/v1/subdomain/${subdomainId}/mocki?query=${search}`,
        options: {
            method: "GET"
        }
    };
}

export const NewMocki = (subdomain : string) => {
    
}

export const EditMocki = (subdomain : string, subdomainId : number) => {

}

export const DeleteSubdomain = (subdomainId : number) => {
    return {
        url: `${import.meta.env.VITE_BACKEND_URL}/v1/subdomain/${subdomainId}/mocki`,
        options: {
            method: "DELETE"
        }
    };
}