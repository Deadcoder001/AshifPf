import React from 'react';

const educationData = [
	{
		degree: 'Masters of Computer Applications',
		institution: 'The Assam Kaziranga University',
		duration: '2023 - 2025',
		description:
			'Relevant coursework in Data Structures, Algorithms, Web Development, and Database Management.',
	},
	{
		degree: 'Bachelor of Computer Applications',
		institution: 'Madhab Choudhury College, Barpeta',
		duration: '2019 - 2022',
		description: 'Focused on fundamentals of computer science and programming.',
	},
];

export default function Education() {
	return (
		<section id="education" className="w-full bg-gray-50 text-black py-28">
			<div className="container mx-auto px-4">
				<div className="text-center mb-20">
					<h2 className="text-7xl font-bold font-pixel underline-wavy-yellow inline-block">
						My Education
					</h2>
				</div>
				<div className="max-w-5xl mx-auto">
					<div className="relative border-l-2 border-gray-200">
						{educationData.map((edu, index) => (
							<div key={index} className="mb-14 ml-10">
								<span className="absolute flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full -left-5 ring-8 ring-white">
									<svg
										className="w-5 h-5 text-blue-800"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
											clipRule="evenodd"
										></path>
									</svg>
								</span>

								<h3 className="flex items-center mb-3 text-4xl font-semibold font-sans text-gray-900">
									{edu.degree}
								</h3>

								<p className="block mb-2 text-3xl font-normal leading-none text-gray-600 font-sans">
									{edu.institution}
								</p>

								<time className="block mb-4 text-2xl font-sans font-normal leading-none text-gray-500">
									{edu.duration}
								</time>

								<p className="text-2xl font-normal text-gray-700 font-sans">
									{edu.description}
								</p>
							</div>
						))}
					</div>
					<div className="mt-16 text-center">
						<p className="text-xl text-gray-600 mb-6">
							For more details, check out my full resume.
						</p>
						{/* Make sure to replace "/resume.pdf" with the actual path to your resume file */}
						<a
							href="/resume.pdf"
							target="_blank"
							rel="noopener noreferrer"
							className="btn"
						>
							View Resume
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}