import "../css/animation.css"
//components
import Cube from "./cube"
import Pira from "./pira"
import Triang from "./triang"

const Animation = () => {
	return (
		<section data-animation>
			<div
				data-rotation
				className="col-12 d-flex flex-column align-items-center justify-content-between"
				>
				<div className="one d-flex justify-content-around">
					<Triang />
				</div>
				<div className="one d-flex justify-content-between">
					<Cube />
					<Pira />
				</div>
				<div className="two d-flex justify-content-between">
					<Triang />
					<Cube />
				</div>
				<div className="one d-flex justify-content-between">
					<Pira />
					<Triang />
				</div>
				<div className="one d-flex justify-content-around">
					<Cube />
				</div>
			</div>
		</section>
	)
}

export default Animation