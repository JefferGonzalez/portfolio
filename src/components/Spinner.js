export default  function Spinner () {
    return (
        <div className="position-absolute top-50 start-50 translate-middle">
            <div className="h-100 text-center text-dark">
                <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                    <main className="px-3 h-100">
                    <div className="d-flex justify-content-center">
                        <div className="spinner-grow text-success" style={{width: "6rem" , height: "6rem"}} role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
