import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./home.scss";
import List from "../../components/list/List";
import { BASE_URL, api } from "../../constants";
import { useCallback, useEffect, useState } from "react";



const Home = ({ type }) => {
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);

    const fetchLists = useCallback(async () => {
        try {
            const params = {
                type: type ?? "",
                genre: genre ?? "",
            };
            const headers = {
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MmEyNDliOThiY2I5ZjRhYmQyYzg1YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxNjIzMzk0OCwiZXhwIjoxNzE2NjY1OTQ4fQ.6QTDAKhgWtU1xrORzHZN8FOI9t8IsfMloJGrKx2mO68",
            };
            const response = await api().get(`${BASE_URL}/lists/`, { params, headers });
            setLists(response.data);
        } catch (error) {
            console.error(error);
        }
    }, [type, genre]);

    useEffect(() => {
        fetchLists();
    }, [fetchLists]);


    return (
        <div className="home">
            <Navbar />
            <Featured type={type} setGenre={setGenre} />
            {lists.map((list, index) => (
                <List key={index} list={list} />
            ))}
        </div>
    );
};


export default Home;