import { Routes, Route } from "react-router-dom";
import List from "./Subdomain/List";
import NewSubdomain from "./Subdomain/NewSubdomain";
import Edit from "./Subdomain/Edit";
import Mocki from "./Mocki";

const Subdomain = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<List />} />
                <Route path="/new" element={<NewSubdomain />} />
                <Route path="/edit/:id" element={<Edit />} />
                <Route path="/manage/:id/*" element={<Mocki />} />
            </Routes>
        </>
    )
}

export default Subdomain;