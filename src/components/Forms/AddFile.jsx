import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import AttachFileIcon from '@mui/icons-material/AttachFile';

const AddFile = () => {
    return (
        <div>
            <label htmlFor="upload-file-input">
                <Input sx={{ display: 'none' }} id="upload-file-input" type="file" />
                <IconButton color="primary" aria-label="upload picture" component="span">
                    <AttachFileIcon />
                </IconButton>
            </label>
        </div>
    )
}

export default AddFile