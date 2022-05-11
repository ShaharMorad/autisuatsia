import YoutubeEmbed from "../../YoutubeEmbed/YoutubeEmbed"
import './styles.css';
import { Typography, Avatar, Chip, Paper, Slider } from '@mui/material';

const SituationPage = ({ situationId }) => {
    const title = "hard title";
    const text = "very long and hard text " + "very long and hard text " +
        "very long and hard text " +
        "very long and hard text " +
        "very long and hard text ";
    const videoId = "ZvZ7da8JBUk"
    const tags = ["אורות מהבהבים", "רעש חזק"];


    return (
        <Paper sx={{ width: '80%', margin: '10px', padding: '10px', backgroundColor: '#3e4b65' }}>
            <Typography variant="h4">
                {title + " " + situationId}
            </Typography>
            <div className="dialog-content">
                <Typography>{text}</Typography>
            </div>
            <YoutubeEmbed embedId={videoId} />
            <div className="info">
                <Slider
                    sx={{ width: '30%', margin: '10px' }}
                    track={false}
                    value={30}
                    marks={[{ value: 0, label: 'קל' }, { value: 100, label: 'קשה' }]}
                />
                <div className="tags">
                    {tags.map(tag => {
                        return <Chip
                            variant="filled"
                            color="info"
                            avatar={<Avatar>M</Avatar>}
                            label={tag}
                            onClick={() => { }}
                            sx={{ marginRight: "5px" }} />
                    })}
                </div>
            </div>
        </Paper >
    );
}

export default SituationPage;
