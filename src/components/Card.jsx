function Card( {toilet} ) {
    return (
        <div className="card">
            <h3>{toilet.location}</h3>
            <h3>{toilet.address}</h3>
            <h3>{toilet.rating}</h3>
        </div>
    )
}

export default Card
