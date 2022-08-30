//css
import "./css/text.css"
import "./css/app.css"
import "bootstrap/dist/css/bootstrap.min.css"
//hooks
import { useState } from "react"
//components
import Cube from "./components/cube"
import Pira from "./components/pira"
import Triang from "./components/triang"
import Animation from "./components/animation"

function App() {
	let [over, setOver] = useState(false)

	const anim = over == true ? "over" : ""

	function handleOver() {
		setOver(true)
	}

	function handleOut() {
		setOver(false)
	}

	return (
		<section
			data-text={anim}
			className="body col-12 d-flex flex-column flex-sm-row justify-content-between">
			<Animation />
			<div className="div col-sm-6 d-flex justify-content-center align-items-center">
				<div className="center col-12 col-sm-6 d-flex justify-content-center">
					<h1 data-over onMouseOver={handleOver} onMouseOut={handleOut}>
						Polygon
					</h1>
				</div>
			</div>
			<div className="div col-sm-6 d-flex justify-content-end">
				<div
					data-right={anim}
					className="col-12 d-flex align-items-cente justify-content-center">
					<div className="center col-12 col-sm-6 d-flex flex-column align-items-center justify-content-around">
						<Pira />
						<p className="col-11">
							{
								"The translate() CSS function repositions an element in the horizontal and/or vertical directions. Its result is a <transform-function> data type."
							}
						</p>
						<Cube />
						<p className="col-11">
							{
								"The clip-path CSS property creates a clipping region that sets what part of an element should be shown. Parts that are inside the region are shown, while those outside are hidden."
							}
						</p>
						<Triang />
						<p className="col-11">
							{
								"The rotate() CSS function defines a transformation that rotates an element around a fixed point on the 2D plane, without deforming it. Its result is a <transform-function> data type."
							}
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default App
