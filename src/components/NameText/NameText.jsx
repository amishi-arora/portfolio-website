import {ReactTyped} from "react-typed"; 
import styles from './NameText.module.css'; 

export default function NameText() {
    return (
        <h1 className={styles.nameText}>
            <ReactTyped
                strings={["Amishi Arora"]}
                typeSpeed={125}
                showCursor={true}
            />
        </h1>
    ); 
}