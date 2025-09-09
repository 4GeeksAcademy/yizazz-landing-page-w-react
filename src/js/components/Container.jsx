import react from "react";
import { Jumbotron } from "./Jumbotron";
import { Card } from "./Card";

const Container = () => {
    return <div className="container pt-5">
        <Jumbotron />
        <div className="row">
            <div className="col-md-3">
                <Card />
            </div>
            <div className="col-md-3">
                <Card />
            </div>
            <div className="col-md-3">
                <Card />
            </div>
            <div className="col-md-3">
                <Card />
            </div>

        </div>
    </div>
}
export { Container };