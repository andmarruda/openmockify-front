import { Routes, Route } from "react-router-dom";
import ListMocki from "./Manage/ListMocki";
import NewMocki from "./Manage/NewMocki";
import EditMocki from "./Manage/EditMocki";
import { useParams } from "react-router-dom";

const Mocki = () => {
    const { id } = useParams();

    return (
        <>
            <Routes>
                <Route path="/" element={<ListMocki subdomainId={Number(id)} />} />
                <Route path="/new" element={<NewMocki subdomainId={Number(id)} />} />
                <Route path="/edit/:id" element={<EditMocki subdomainId={Number(id)} />} />
            </Routes>
        </>
    )
}

export default Mocki;