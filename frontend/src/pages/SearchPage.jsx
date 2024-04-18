import { useState } from 'react';

const SearchPage = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await fetch(`http://localhost:8080/universities?name=${query}`);
            const data = await response.json();
            setResults(data);
        } catch (error) {
            console.error('Error searching universities: ', error);
        }
    };

    const handleSaveFavorite = async (name, stateProvince, webPages) => {
        try {
            // Send a POST request to the backend API to save the favorite
            const response = await fetch('http://localhost:8080/universities/favourites', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    stateProvince,
                    webPages,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to save favorite');
            }

            alert('University added to favorites!');
            
        } catch (error) {
            console.error('Error saving favorite: ', error);
            alert('Failed to add university to favorites');
        }
    };

    return (
        <div className="container mt-4">
            <h1 className="mb-4">University Search</h1>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Search for a university..." value={query} onChange={(e) => setQuery(e.target.value)} />
                <button className="btn btn-primary" type="button" onClick={handleSearch}>Search</button>
            </div>
            <table className="table">
                <thead className="table-light">
                    <tr>
                        <th>Name</th>
                        <th>State/Province</th>
                        <th>Web Pages</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map((university, index) => (
                        <tr key={index}>
                            <td>{university.name}</td>
                            <td>{university['state-province']}</td>
                            <td>
                                <ul className="list-unstyled">
                                    {university.web_pages.map((webPage, index) => (
                                        <li key={index}><a href={webPage} target="_blank" rel="noopener noreferrer">{webPage}</a></li>
                                    ))}
                                </ul>
                            </td>
                            <td>
                                <button className="btn btn-primary" onClick={() => handleSaveFavorite(university.name, university['state-province'], university.web_pages)}>
                                    Add to Favorite
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default SearchPage;
