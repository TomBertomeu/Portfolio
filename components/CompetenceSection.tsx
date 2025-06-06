export default function CompetenceSection() {
    return (
        <section className="bg-white dark:bg-gray-900 py-8 px-4">
        <div className="max-w-screen-xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Mes compétences</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Compétence */}
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Compétence 1</h3>
                <p className="text-gray-700 dark:text-gray-300">Description de la compétence 1.</p>
            </div>
            {/* Compétence */}
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Compétence 2</h3>
                <p className="text-gray-700 dark:text-gray-300">Description de la compétence 2.</p>
            </div>
            {/* Compétence */}
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Compétence 3</h3>
                <p className="text-gray-700 dark:text-gray-300">Description de la compétence 3.</p>
            </div>
            </div>
        </div>
        </section>
    );
}