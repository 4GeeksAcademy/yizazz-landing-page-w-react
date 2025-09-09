import react from "react";

const Card = () => {
    return <div className="card row m-1">
        <img src="https://picsum.photos/500/325" className="card-img-top col-12 p-0" alt="placeholder" />
        <div className="card-body text-center p-0 col-12">
            <h5 className="card-title py-2">Card title</h5>
            <p className="card-text px-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita veniam cum repellendus obcaecati?</p>
            <div className="bg-body-tertiary border border-top py-2 col-12">
            <a href="#" className="btn btn-primary">Find out more!</a>
            </div>
        </div>
    </div>
}
export { Card };