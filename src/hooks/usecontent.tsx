import axios from "axios";
import { useEffect, useState } from "react";
import { backend_url } from "../config";

export function useContent() {
    const [contents, setContents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${backend_url}/api/v1/content`, {
                    headers: {
                        Authorization: localStorage.getItem("authorization"),
                    },
                });
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