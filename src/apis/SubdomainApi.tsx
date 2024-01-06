export const ListSubdomain = () => {
    return {
        url: `${import.meta.env.VITE_BACKEND_URL}/v1/subdomain`,
        options: {
            method: "GET"
        }
    };
}

export const SearchSubdomain = (search : string) => {
    return {
        url: `${import.meta.env.VITE_BACKEND_URL}/v1/subdomain?query=${search}`,
        options: {
            method: "GET"
        }
    };
}

export const NewSubdomain = (subdomain : string) => {
    const fd = new FormData();
    fd.append('subdomain', subdomain);

    return {
        url: `${import.meta.env.VITE_BACKEND_URL}/v1/subdomain`,
        options: {
            method: "POST",
            body: fd
        }
    };
}

export const EditSubdomain = (subdomain : string, subdomainId : number) => {
    const fd = new FormData();
    fd.append('subdomain', subdomain);

    return {
        url: `${import.meta.env.VITE_BACKEND_URL}/v1/subdomain/${subdomainId}`,
        options: {
            method: "PUT",
            body: fd
        }
    };
}

export const DeleteSubdomain = (subdomainId : number) => {
    return {
        url: `${import.meta.env.VITE_BACKEND_URL}/v1/subdomain/${subdomainId}`,
        options: {
            method: "DELETE"
        }
    };
}