
import { useState } from 'react';
import './styles.css';
import SituationBadge from "./SituationBadge/SituationBadge"
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

const SituationsPage = () => {

    const [search, setSearch] = useState("");

    const situations = [
        { id: "asd", title: "ביקור במספרה", img: "images/heart.png" },
        { id: "asd", title: "רופא שיניים", img: "images/ASD_simley_big.gif" },
        { id: "asd", title: "MRI", img: "images/logo192.png" },
        { id: "asd", title: "חיסון", img: "images/soak-asd-logo-clr-01.png" },
        { id: "asd", title: "קניות בסופר", img: "images/this.jfif" }];

    const handleChange = (event) => {
        setSearch(event.target.value.toLowerCase());
    }

    return (
        <div className="situations-page">
            <TextField
                value={search}
                onChange={handleChange}
                dir="rtl"
                variant="outlined"
                InputProps={{
                    startAdornment: <SearchIcon position="start" />,
                }} />

            <div className="situations">
                {situations.filter(({ title }) => title.toLowerCase().includes(search)).map(({ title, img, id }) => {
                    return <SituationBadge title={title} photo={img} situationId={id} />
                })}
            </div>
        </div>
    );
}

export default SituationsPage;
