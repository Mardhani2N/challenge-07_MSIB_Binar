const Car = ({children}) => {
    return (
        <>
            <div className="col-sm-4 col-sm-4 col-sm-4 mt-3">
                <div className="card" style={{ width: "320px" }}>
                    <div className="card-body" style={{marginLeft:"0px"}}>
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Car


