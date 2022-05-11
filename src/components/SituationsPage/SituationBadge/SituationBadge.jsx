import './styles.css';
import { Badge } from '@mui/material';

const SituationBadge = ({ title, photo, situationId }) => {
    return <Badge
        overlap="circular" badgeContent={title}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
        }}
        color="primary">
        <span class="dot" onClick={() => { console.log('should go to the page of- ' + situationId) }}>
            <span class="inner-dot">
                <img style={{ width: '100px', height: '100px' }} src={photo} />
            </span>
        </span>
    </Badge>
        ;
}

export default SituationBadge;
