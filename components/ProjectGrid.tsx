export default function ProjectGrid() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-2">Project 1</h2>
            <p className="text-gray-600">Description of Project 1.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-2">Project 2</h2>
            <p className="text-gray-600">Description of Project 2.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-2">Project 3</h2>
            <p className="text-gray-600">Description of Project 3.</p>
        </div>
        </div>
    );
}