import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const Tags = () => {
    const tags = ["מספרה", "סופר", "רעש חזק"];
    return (
        <div>
            <Autocomplete
                sx={{ width: 300 }}
                multiple
                id="sutuations-tags"
                options={tags}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="standard"
                        label="קטגוריות"
                        placeholder="קטגוריה"
                    />
                )}
            />
        </div>
    )
}

export default Tags