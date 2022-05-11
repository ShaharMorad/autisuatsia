import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import AddFile from './AddFile';
import Tags from './Tags.jsx';

const AddPost = () => {
    return (
        <div>
            <Box id="title-wrapper">
                <TextField id="Title" label="כותרת" variant="standard" />
            </Box>
            <Box id="description-wrapper">
                <TextField id="description" label="תיאור" multiline variant="standard" />
            </Box>
            <Tags />
            <Box id="video-link-wrapper">
                <TextField fullwidth id="video-link" label="קישור לסרטון" type="text" variant="standard" />
            </Box>
            <AddFile />
        </div>
    )
}

export default AddPost