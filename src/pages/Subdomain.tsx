import { Routes, Route } from "react-router-dom";
import List from "./Subdomain/List";

const Subdomain = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<List />} />
                <Route path="/new" element={<p>Novo</p>} />
                <Route path="/edit" element={<p>Editar</p>} />
            </Routes>
        </>
    )
}

export default Subdomain;