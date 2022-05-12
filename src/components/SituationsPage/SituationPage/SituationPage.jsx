import YoutubeEmbed from "../../YoutubeEmbed/YoutubeEmbed"
import { useState, useEffect } from 'react';
import './styles.css';
import { Typography, Chip, Paper, Slider, Box, Card } from '@mui/material';
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
            });
    }, []);

    const getVideoId = (url) => {
        return queryString.parse(params.videoUrl.split('?')[1]).v
    }

    return (
        <div className="situation-page">
            <Box sx={{
                width: '80%', margin: '10px', padding: '10px', display: 'flex', paddingTop: '25px',
                flexDirection: 'column', alignItems: 'flex-start'
            }}>
                {isLoading ?
                    <CircularProgress /> :
                    <>
                        <Typography variant="h4" marginBottom="10px">
                            {params.title}
                        </Typography>

                        <YoutubeEmbed embedId={getVideoId(params.videoUrl)} />

                        <div className="tags">
                            {params.tags.map(tag => {
                                return <Chip
                                    variant="filled"
                                    color="info"
                                    label={tag}
                                    sx={{ marginRight: "5px" }} />
                            })}
                        </div>

                        <div className="info">
                            <Slider
                                sx={{ margin: '10px' }}
                                track={false}
                                value={30}
                                marks={[{ value: 0, label: 'קל' }, { value: 100, label: 'קשה' }]}
                            />
                        </div>

                        <Card className="description">
                            <Typography>{params.description}</Typography>
                        </Card>
                    </>
                }
            </Box >
        </div>
    );
}

export default SituationPage;
