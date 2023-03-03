import React from 'react';
import {Section, Header, Body, Text} from 'crack-ux';

// Contexts
import {usePublic} from '../../contexts/layouts/Public';

const images =
[
	{
		src: '1.jpg',
		alt: '1'
	},
	{
		src: '2.jpg',
		alt: '2'
	},
	{
		src: '3.jpg',
		alt: '3'
	},
	{
		src: '4.jpg',
		alt: '4'
	},
	{
		src: '5.jpg',
		alt: '5'
	},
	{
		src: '6.jpg',
		alt: '6'
	},
	{
		src: '7.jpg',
		alt: '7'
	},
	{
		src: '8.jpg',
		alt: '8'
	},
	{
		src: '9.jpg',
		alt: '9'
	},
	{
		src: '10.jpg',
		alt: '10'
	},
	{
		src: '11.jpg',
		alt: '11'
	},
	{
		src: '12.jpg',
		alt: '12'
	},
	{
		src: '13.jpg',
		alt: '13'
	},
	{
		src: '14.jpg',
		alt: '14'
	},
	{
		src: '15.jpg',
		alt: '15'
	},
	{
		src: '16.jpg',
		alt: '16'
	},
	{
		src: '17.jpg',
		alt: '17'
	},
]

const Gallery = () =>
{
	const containerRef = React.useRef(null);
	
	const {ShowModalImage} = usePublic();

	React.useEffect(() =>
	{
		const slider = containerRef.current;

		let isDown = false;
		let startX;
		let scrollLeft;

		const HandleMouseDown = (e) =>
		{
			isDown = true;
			slider.classList.add('active');
			startX = e.pageX - slider.offsetLeft;
			scrollLeft = slider.scrollLeft;
		}

		const HandleMouseLeave = (e) =>
		{
			isDown = false;
			slider.classList.remove('active');
		}

		const HandleMouseUp = (e) =>
		{
			isDown = false;
			slider.classList.remove('active');
		}

		const HandleMouseMove = (e) =>
		{
			if(!isDown) return;
			e.preventDefault();
			const x = e.pageX - slider.offsetLeft;
			const walk = (x - startX) * 3; //scroll-fast
			slider.scrollLeft = scrollLeft - walk;
		}

		slider.addEventListener('mousedown', HandleMouseDown);
		slider.addEventListener('mouseleave', HandleMouseLeave);
		slider.addEventListener('mouseup', HandleMouseUp);
		slider.addEventListener('mousemove', HandleMouseMove);

		return () => {
			slider.removeEventListener('mousedown', HandleMouseDown);
			slider.removeEventListener('mouseleave', HandleMouseLeave);
			slider.removeEventListener('mouseup', HandleMouseUp);
			slider.removeEventListener('mousemove', HandleMouseMove);
		};
	}, []);

	return (
		<Section class='gallery section'>
			<Body reference={containerRef} class='media horizontal-scroll no-vertical-scroll no-padding no-break'>
				{images.map((image, index) =>
				{
					return <img key={index} className='pointer' src={`/gallery/${image.src}`} alt={image.alt} onClick={() => ShowModalImage(image)}/>
				})}
			</Body>
		</Section>
	)
}

export {Gallery}