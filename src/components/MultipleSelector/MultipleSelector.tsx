import type MultipleSelectorModel from "./MultipleSelector.model";
import styles from './MultipleSelector.module.css'

export default function MultipleSelector(props: MultipleSelectorProps) {

    const select = (item: MultipleSelectorModel) => {
        const selected = [...props.selected, item];
        const notSelected = props.notSelected.filter(value => value !== item);

        props.onChange(selected, notSelected);
    }

    const deselect = (item: MultipleSelectorModel) => {
        const selected = props.selected.filter(value => value !== item);
        const notSelected = [...props.notSelected, item];

        props.onChange(selected, notSelected);
    }

    const selectAll = () => {
        const selected = [...props.selected, ...props.notSelected];
        const notSelected: MultipleSelectorModel[] = [];

        props.onChange(selected, notSelected);
    }

    const deselectAll = () => {
        const selected: MultipleSelectorModel[] = [];
        const notSelected = [...props.selected, ...props.notSelected];

        props.onChange(selected, notSelected);
    }

    return (
        <div className={styles.div}>
            <ul>
                {props.notSelected.map(item => <li key={item.key} onClick={() => select(item)}>{item.description}</li>)}
            </ul>
            <div className={styles.button }>
                <button type="button" onClick={selectAll}>{'>>'}</button>
                <button type="button" onClick={deselectAll}>{'<<'}</button>
            </div>
            <ul>
                {props.selected.map(item => <li key={item.key} onClick={() => deselect(item)}>{item.description}</li>)}
            </ul>
        </div>
    )
}

interface MultipleSelectorProps {
    selected: MultipleSelectorModel[];
    notSelected: MultipleSelectorModel[];
    onChange(selected: MultipleSelectorModel[], notSelected: MultipleSelectorModel[]): void;
}