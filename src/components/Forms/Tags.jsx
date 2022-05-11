import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const Tags = () => {
    return (
        <div>
            <Autocomplete
                multiple
                id="sutuations-tags"
                options={["מספרה", "סופר", "רעש חזק"]}
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