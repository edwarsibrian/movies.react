export default function Button(props: ButtonProps) {

    return (
        <button type="button" className={props.className ? props.className : "btn btn-primary"
        } onClick={props.onClick} >
            {props.children}
        </button>
    )
}

interface ButtonProps {
    children: React.ReactNode;
    onClick(): void;
    className?: string;
}