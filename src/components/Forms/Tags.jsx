import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';
import { getTags } from '../../Utilities/Api'

const Tags = ({ changeTags }) => {
    const [tags, setTags] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/tags')
            .then(response => response.json())
            .then(data => {
                setTags(data);
            });
    }, []);

    const handleChange = (params) => changeTags(params);
    return (
        <div>
            <Autocomplete
                sx={{ width: 300 }}
                multiple
                id="sutuations-tags"
                options={tags}
                onChange={(e, v) => handleChange(v)}
                renderInput={(params) =>
                (
                    <TextField
                        {...params}
                        variant="standard"
<<<<<<< HEAD
                        placeholder="קטגוריה"
=======
                        placeholder="קטגוריות"
>>>>>>> 353f7af43d492cf72813f0eaae2389a03b28cd0c
                    />
                )}
            />
        </div>
    )
}

export default Tags