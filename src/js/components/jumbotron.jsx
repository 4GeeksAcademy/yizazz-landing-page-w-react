import react from "react";


const Jumbotron = () => {
    return <div>
        <h1 key={title}>A Warm Welcome!</h1>,
        <p key={lorem}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi amet expedita, omnis illum accusamus animi sunt, blanditiis quia nostrum officia totam at obcaecati cum explicabo cumque maxime placeat, mollitia doloribus?
        </p>,
        <button key={callToAction} type="button" className="btn btn-primary">Call to action!</button>
    </div>

}
export {Jumbotron}; 
