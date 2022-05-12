
import { useState, useEffect } from 'react';
import './styles.css';
import SituationBadge from "./SituationBadge/SituationBadge"
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import CircularProgress from '@mui/material/CircularProgress';

const SituationsPage = () => {

    const [search, setSearch] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [situations, setSituations] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/posts')
            .then(response => response.json())
            .then(data => {
                setSituations(data);
                setIsLoading(false);
            });
    }, []);

    const handleChange = (event) => {
        setSearch(event.target.value.toLowerCase());
        console.log(situations)
    }

    return (
        <div className="situations-page">
            {isLoading ?
                <CircularProgress /> :
                <>
                    <TextField
                        sx={{ margin: '10px', backgroundColor: "lightgray" }}
                        value={search}
                        onChange={handleChange}
                        dir="rtl"
                        variant="outlined"
                        InputProps={{
                            startAdornment: <SearchIcon position="start" />,
                        }} />

                    <div className="situations">
                        {situations
                            .filter(({ title }) => title.toLowerCase().includes(search))
                            .map(({ title, photo, id }) => {
                                return <SituationBadge title={title} photo={photo} situationId={id} />
                            })}
                    </div>
                </>
            }

        </div>
    );
}

export default SituationsPage;
