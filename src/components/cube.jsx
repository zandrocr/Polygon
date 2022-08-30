import '../css/cube.css'

const Cube = () => {
	return (
		<div data-blur>
			<div data-cube>
                <div data-face='front'></div>
                <div data-face='back'></div>
                <div data-face='left'></div>
                <div data-face='right'></div>
                <div data-face='top'></div>
                <div data-face='bottom'></div>
            </div>
		</div>
	)
}

export default Cube
