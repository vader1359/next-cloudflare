import React from 'react';

function Spinning(props) {
	const width = props.width || '100%';
	const height = props.height || '100%';
	const title = props.title || "dots anim 5";
	const css = `.nc-loop-dots-5-32-icon-f{--animation-duration:1s}.nc-loop-dots-5-32-icon-f *{animation:nc-loop-dots-5-anim var(--animation-duration) infinite}.nc-loop-dots-5-32-icon-f :nth-child(1){transform-origin:16px 6px}.nc-loop-dots-5-32-icon-f :nth-child(2){transform-origin:26px 16px;animation-delay:.1s}.nc-loop-dots-5-32-icon-f :nth-child(3){transform-origin:16px 26px;animation-delay:.2s}.nc-loop-dots-5-32-icon-f :nth-child(4){transform-origin:6px 16px;animation-delay:.3s}@keyframes nc-loop-dots-5-anim{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.4;transform:scale(.7)}}`;

	return (
		<svg height={height} width={width} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#00A135">
		<g className="nc-loop-dots-5-32-icon-f">
			<circle cx="16" cy="6" fill="#00A135" r="5"/>
			<circle cx="26" cy="16" r="5"/>
			<circle cx="16" cy="26" fill="#00A135" r="5"/>
			<circle cx="6" cy="16" r="5"/>
		</g>
		<style>{css}</style>
	</g>
</svg>
	);
};

export default Spinning;