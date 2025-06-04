import { useEffect, useState } from "react";
import Loading from "./Loading";

function Chack({ data }) {
    const [puted, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [colorFilter, setColorFilter] = useState('');

    const ApiFetch = async () => {
        try {
            setLoading(true);
            const res = await fetch("https://dummyjson.com/products");

            if (!res.ok) {
                setError("Network response was not ok");
                throw new Error("Network response was not ok");
            }

            const Apidata = await res.json();

            // Adding fake colors for demo purposes (red/blue alternate)
            const withColors = Apidata.products.map((item, i) => ({
                ...item,
                color: i % 2 === 0 ? "red" : "blue"
            }));

            const filtered = withColors.filter((item) => item.price > 10);
            setData(filtered);
        } catch (error) {
            console.log("Failed to fetch data:", error);
            setError("Failed to fetch data");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        ApiFetch();
    }, []);

    const filteredByColor = puted.filter(item =>  
        item.color.toLowerCase().includes(colorFilter.toLowerCase())
    );

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Product Color Filter</h1>

            <div className="flex justify-center mb-6">
                <input
                    type="text"
                    placeholder="Enter color (e.g., red)"
                    value={colorFilter}
                    onChange={(e) => setColorFilter(e.target.value)}
                    className="w-full max-w-md border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>

            {error && <p className="text-red-500 text-center mb-4">{error}</p>}

            {loading ? (
                <Loading />
            ) : (
                <div>
                    <p className="text-lg font-medium text-gray-700 mb-4 text-center">
                        Matching Products: <span className="text-blue-600">{filteredByColor.length}</span>
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {filteredByColor.map((item) => (
                            <div key={item.id} className="border rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300">
                                <img src={item.thumbnail} alt={item.title} className="w-full h-40 object-cover rounded-md mb-4" />
                                <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
                                <p className="text-sm text-gray-500">Color: <span className="capitalize">{item.color}</span></p>
                                <p className="text-sm text-gray-500">Price: ${item.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Chack;


