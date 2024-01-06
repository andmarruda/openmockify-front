import { Routes, Route } from "react-router-dom";
import List from "./Subdomain/List";
import NewSubdomain from "./Subdomain/NewSubdomain";
import Edit from "./Subdomain/Edit";

const Subdomain = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<List />} />
                <Route path="/new" element={<NewSubdomain />} />
                <Route path="/edit/:id" element={<Edit />} />
            </Routes>
        </>
    )
}

export default Subdomain;