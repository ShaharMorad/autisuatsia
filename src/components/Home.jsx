import'./Home.css';
import TextField from '@mui/material/TextField';
import AppBar from '@mui/material/AppBar';
import { Box } from '@mui/system';

const Home = () => {
  return (
    <div class="messages">
        <div class="about-us-section">
          <p 
          style={{
            borderBottom: "1px solid", 
            fontSize: "20px"
          }}>
             עלינו 
          </p>
          <p 
          style={{
            fontSize: "16px"
          }}>באתר תוכלו למצוא תכנים המאפשרים לאוטיסטים ובעלי מוגבלויות לחוות סיטואציות נפוצות מחיי היומיום כמו ביקור במספרה, או קניות בסופרמרקט. 
          התכנים מועברים באמצעות משקפי מציאות מדומה (VR), סרטון פנורמי (360) או דרך דיאלוגים המועברים בין בעזרת אדם המנחה את הדיאלוג.
          </p>         
        </div>
        <div class="managers-section">
          <p 
          style={{
            borderBottom: "1px solid", 
            fontSize: "20px"
          }}>לבעלי העסק מבינינו...</p>
          <p 
          style={{
            fontSize: "16px"
          }}>אתם מוזמנים לצלם את בית העסק שלכם ולצרף סיור וירטואלי שלו לתכני אתר וכך לאפשר לאוטיסטים ובעלי מוגבלויות לסייר בבית העסק שלכם טרם הביקור שלהם ולהפוך את השהות שלהם בבית העסק לקלה וחיובית יותר.</p> 
        </div>
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