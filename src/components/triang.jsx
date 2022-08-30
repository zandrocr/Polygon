import "../css/triang.css"

const Triang = () => {
	return (
		<div data-blur>
			<div data-trin>
                <div data-triang='top'>
                    <div data-face="front"></div>
                    <div data-face="back"></div>
                    <div data-face="left"></div>
                    <div data-face="right"></div>
                    <div data-face="bottom"></div>
                </div>
                <div data-triang='bottom'>
                    <div data-face="front"></div>
                    <div data-face="back"></div>
                    <div data-face="left"></div>
                    <div data-face="right"></div>
                    <div data-face="bottom"></div>
                </div>
            </div>
		</div>
	)
}

export default Triang
