import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import { Slider } from '@mui/material';
import AddFile from './AddFile';
import Tags from './Tags.jsx';
import { useState } from 'react';
import { addPost, sendQrCode } from '../../Utilities/Api'
import { useNavigate } from 'react-router-dom';

const AddPost = () => {
    const [difficulty, setDifficulty] = useState(0);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [videoUrl, setLink] = useState('');
    const [tags, setTags] = useState([]);
    const navigate = useNavigate();

    const changeDiffculty = (event, newValue) => {
        setDifficulty(newValue);
    };

    const changeTitle = (event) => {
        setTitle(event.currentTarget.value);
    };

    const changeDescription = (event) => {
        setDescription(event.currentTarget.value);
    };

    const changeLink = (event) => {
        setLink(event.currentTarget.value);
    };

    const changeTags = (newValue) => {
        setTags(newValue);
    };

    const onSubmit = (post) => {
        addPost(post);
        sendQrCode(post);
        navigate("/", { replace: true });
    };


    return (
        <div>

            <Box id="title-wrapper">
                <TextField dir="rtl" value={title} onChange={changeTitle} id="Title" placeholder="כותרת" variant="standard" />
            </Box>

            <Box id="description-wrapper">
                <TextField dir="rtl" value={description} onChange={changeDescription} id="description" placeholder="תיאור" multiline variant="standard" />
            </Box>

            <Box sx={{ mr: "40%" }}>
                <Tags changeTags={changeTags} />
            </Box>

            <Slider
                sx={{ width: '25%', margin: '10px' }}
                track={false}
                value={difficulty}
                onChange={changeDiffculty}
                marks={[{ value: 0, label: 'קל' }, { value: 100, label: 'קשה' }]}
            />

            <Box id="video-link-wrapper">
                <TextField dir="rtl" value={videoUrl} onChange={changeLink} id="video-link" placeholder="קישור לסרטון" type="text" variant="standard" />
            </Box>

            <AddFile />

            <Button onClick={() => {
                onSubmit({
                    title ,
                    description,
                    difficulty,
                    tags,
                    videoUrl
                });
            }}
                variant="contained">
                הוסף פוסט
            </Button>
        </div >
    )
}

export default AddPost