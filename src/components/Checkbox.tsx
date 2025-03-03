import styles from './Checkbox.module.css'
import { CheckCircle } from 'phosphor-react'
export function Checkbox() {
  
    function handleOnClickCheckbox() {
        // alert('Clicou')
        // console.log(event.target)
        // event.target.classList.add('completed');
    }

    return (
        <span onClick={handleOnClickCheckbox}><CheckCircle size={32} /></span>
    )




}