import YoutubeEmbed from "../../YoutubeEmbed/YoutubeEmbed"
import { useState, useEffect } from 'react';
import './styles.css';
import { Typography, Avatar, Chip, Paper, Slider } from '@mui/material';
import { useParams } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import queryString from 'query-string';

const SituationPage = () => {
    // TODO: use the id and pull fron DB the real info
    const { situationId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [params, setParams] = useState({});

    useEffect(() => {
        fetch('http://localhost:4000/posts/' + situationId)
            .then(response => response.json())
            .then(data => {
                if (!data) {
                    console.log("error")
                    return
                }
                setParams(data);
                setIsLoading(false)
            })
            .catch(error => {
                console.error('There was an error!', error);
            })            ;
    }, []);

    const getVideoId = (url) => {
        return queryString.parse(params.videoUrl.split('?')[1]).v
    }

    return (
        <div className="situation-page">
            <Paper sx={{ width: '80%', margin: '10px', padding: '10px', backgroundColor: '#3e4b65' }}>
                {isLoading ?
                    <CircularProgress /> :
                    <>
                        <Typography variant="h4">
                            {params.title + " " + situationId}
                        </Typography>
                        <div className="dialog-content">
                            <Typography>{params.description}</Typography>
                        </div>
                        <YoutubeEmbed embedId={getVideoId(params.videoUrl)} />
                        <div className="info">
                            <Slider
                                sx={{ width: '30%', margin: '10px' }}
                                track={false}
                                value={30}
                                marks={[{ value: 0, label: 'קל' }, { value: 100, label: 'קשה' }]}
                            />
                            <div className="tags">
                                {params.tags.map(tag => {
                                    return <Chip
                                        variant="filled"
                                        color="info"
                                        // avatar={<Avatar>M</Avatar>}
                                        label={tag}
                                        onClick={() => { }}
                                        sx={{ marginRight: "5px" }} />
                                })}
                            </div>
                        </div>
                    </>
                }
            </Paper >
        </div>
    );
}

export default SituationPage;
