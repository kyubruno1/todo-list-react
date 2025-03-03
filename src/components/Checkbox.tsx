import styles from './Checkbox.module.css'
import { CheckCircle } from 'phosphor-react'
export function Checkbox({completed: boolean}) {

    function handleOnClickCheckbox() {

    }



    let checkbox;
    if (completed) {
        checkbox = <span className={styles.checkbox } onClick={handleOnClickCheckbox}> ✓ </span>
    } else {
        checkbox = <span className={styles.checkbox } onClick={handleOnClickCheckbox}>  </span>
    }
    return checkbox;



}