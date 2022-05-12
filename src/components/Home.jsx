import'./Home.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Home = () => {
  return (
    <div class="messages">
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="טכנולוגיה שמקרבת"
          height="200px"
          image="\images\autism.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          עלינו
          </Typography>
          <Typography variant="body2" color="text.secondary">
          באתר תוכלו למצוא תכנים המאפשרים לאוטיסטים ובעלי מוגבלויות לחוות סיטואציות נפוצות מחיי היומיום כמו ביקור במספרה, או קניות בסופרמרקט. 
          התכנים מועברים באמצעות משקפי מציאות מדומה (VR), סרטון פנורמי (360) או דרך דיאלוגים המועברים בין בעזרת אדם המנחה את הדיאלוג.
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="עזרה כפולה"
          height="200px"
          image="\images\owner.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          לבעלי העסק מבינינו...
          </Typography>
          <Typography variant="body2" color="text.secondary">
          אתם מוזמנים לצלם את בית העסק שלכם ולצרף סיור וירטואלי שלו לתכני האתר, ובכך לאפשר לאוטיסטים ובעלי מוגבלויות לסייר בבית העסק שלכם טרם הביקור שלהם, ולהפוך את השהות שלהם בבית העסק לקלה וחיובית יותר. 
          </Typography>
        </CardContent>
      </Card>
        <div class="bottom-bar">
        <p 
          style={{
            fontSize: "26px"
          }}> "The Future Is Now" </p>
        </div>
    </div>
  )
}

export default Home