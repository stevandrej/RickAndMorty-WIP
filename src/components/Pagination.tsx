export default function Pagination() {
	return (
		<div className="mx-auto my-6 max-w-lg">
			<ul className="flex justify-center text-center gap-1">
				<li className="border border-slate-600 rounded-full p-4 w-8 h-8 flex items-center justify-center cursor-pointer">1</li>
				<li className="border border-slate-600 rounded-full p-4 w-8 h-8 flex items-center justify-center cursor-pointer">2</li>
				<li className="border border-slate-600 rounded-full p-4 w-8 h-8 flex items-center justify-center cursor-pointer">3</li>
				<li className="border border-slate-600 rounded-full p-4 w-8 h-8 flex items-center justify-center cursor-pointer">4</li>
				<li className="border border-slate-600 rounded-full p-4 w-8 h-8 flex items-center justify-center cursor-pointer">...</li>
				<li className="border border-slate-600 rounded-full p-4 w-8 h-8 flex items-center justify-center cursor-pointer">6</li>
				<li className="border border-slate-600 rounded-full p-4 w-8 h-8 flex items-center justify-center cursor-pointer">7</li>
				<li className="border border-slate-600 rounded-full p-4 w-8 h-8 flex items-center justify-center cursor-pointer">8</li>
				<li className="border border-slate-600 rounded-full p-4 w-8 h-8 flex items-center justify-center cursor-pointer">9</li>
			</ul>
		</div>
	);
}
