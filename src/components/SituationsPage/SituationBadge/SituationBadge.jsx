import './styles.css';
import { Badge } from '@mui/material';
import { Link, Outlet } from "react-router-dom";

const SituationBadge = ({ title, photo, situationId }) => {

    return <Badge
        overlap="circular" badgeContent={title}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
        }}
        color="primary">
        <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={'/תוכן/' + situationId}
            key={situationId}>
            <span class="dot" onClick={()=>{console.log("ASdasdasdasdasd");}} >
                
                <span class="inner-dot">
                    <img style={{ width: '100px', height: '100px' }} src={photo} />
                </span>
            </span>
        </Link>
        <Outlet />
    </Badge>
        ;
}

export default SituationBadge;
