import './Home.css';
import TextField from '@mui/material/TextField';

const Home = () => {
  return (
    <div>
        <div class="messages" label="ברוכים הבאים ל 'אוטיסיטואציה'">
          <TextField
          id="aboutUs"
          label="עלינו"
          multiline
          dir="rtl"
          style={{
            textAlign: "right"
          }}
          InputProps={{
            readOnly: true,
          }}
          value="באתר תוכלו למצוא תכנים המאפשרים לאוטיסטים ובעלי מוגבלויות לחוות סיטואציות נפוצות מחיי היומיום כגון ביקור במספרה, טיול בפארק או קניות בסופרמרקט. 
          חלק מהתכנים מועברים באמצעות משקפי מציאות מדומה (VR), חלק כסרטון פנורמי (360) וחלקן הן דיאלוגים המועברים בין המשתמש ואדם נוסף המנחה את הדיאלוג."/>         
          <TextField
          id="BussinesHolders"
          label="בעלי עסק יקרים!"
          multiline
          dir="rtl"
          style={{
            textAlign: "right"
          }}
          InputProps={{
            readOnly: true,
          }}
          value="אתם מוזמנים לצלם את בית העסק שלכם ולצרף סיור וירטואלי שלו לתכני אתר וכך לאפשר לאוטיסטים ובעלי מוגבלויות לסייר בבית העסק שלכם טרם הביקור שלהם ולהפוך את השהות שלהם בבית העסק לקלה וחיובית יותר"/> 
        </div>
    </div>
  )
}

export default Home