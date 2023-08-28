import styles from './Select.module.scss';
import { FC, useState } from "react"

interface ISelect {
    options: any[]

}


const Select: FC<ISelect> = ({ options }) => {
    const [selectedOPtion, setSelectedOPtion] = useState(options[0].name)


    return (
        <select className={styles.selectBlock}>
            {options.map(item => (

                <option
                    key={item.id}
                    value={item.id}
                    onChange={(e: any) => setSelectedOPtion(e.target.value)}
                >
                    {item.name}
                </option>

            ))}
        </select>
    )
};

export default Select;
