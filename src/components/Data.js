

function Data(props) {
    return (
        <figure>
            <img src={props.src} alt={props.alt} />
            <figcaption>{props.byline}</figcaption>
        </figure>
    );
}

export default Data;