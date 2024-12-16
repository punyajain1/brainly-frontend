import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { backend_url } from "../config";

export function useContent() {
    const [contents, setContents] = useState([]);
    const [loading, setLoading] = useState(true);
    const { shareLink } = useParams(); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${backend_url}/api/v1/brain/${shareLink}`);
                setContents(response.data.content || []);
            } catch (error) {
                console.error("API Error:");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { contents, loading };
}