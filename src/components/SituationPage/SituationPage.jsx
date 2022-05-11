import YoutubeEmbed from "../YoutubeEmbed/YoutubeEmbed"
import './styles.css';
import { Typography, DialogTitle, Paper } from '@mui/material';

const SituationPage = ({ situationId }) => {
    const title = "hard title";
    const text = "very long and hard text " + "very long and hard text " +
        "very long and hard text " +
        "very long and hard text " +
        "very long and hard text ";
    const videoId = "ZvZ7da8JBUk"
    const tags = ["אורות מהבהבים","רעש חזק"];
    return (
        <Paper sx={{ width: '80%', margin: '10px',padding: '10px', backgroundColor: '#3e4b65' }}>
            <Typography variant="h4">
                {title + " " + situationId}
            </Typography>
            <div className="dialog-content">
                <Typography>{text}</Typography>
            </div>
            <YoutubeEmbed embedId={videoId} />
        </Paper >
    );
}

export default SituationPage;
