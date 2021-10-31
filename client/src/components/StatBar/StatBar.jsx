import React from 'react'
import s from "./StatBar.module.css"
function StatBar({done, att, back1, back, color}) {
    const [style, setStyle] = React.useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`,
			background: `linear-gradient(to left, ${back1}, ${back})`,
			color: color
		}
		
		setStyle(newStyle);
	}, 200);
    
   
    return (
		<div className={s.progress}>
			<div className={s.progressDone} style={style}>
				 <p>{att}</p>
			</div>
		</div>
	)

      
  
}

export default StatBar
