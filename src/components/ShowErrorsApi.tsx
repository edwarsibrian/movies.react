export default function ShowErrorsApi(props: ShowErrorsApiProps) {
    return (
        <>
            {props.errors && props.errors.length > 0 && (
                <div className="alert alert-danger">
                    <ul>
                        {props.errors.map((error, index) => (
                            <li key={index}>{error}</li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    )
}

interface ShowErrorsApiProps {
    errors: string[];
}