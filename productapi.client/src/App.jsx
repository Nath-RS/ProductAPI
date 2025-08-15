import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [form, setForm] = useState({ name: '', price: '', category: '' });
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchProducts = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch('/produto');
            if (!res.ok) throw new Error(`Erro ao buscar produtos: ${res.status}`);
            const text = await res.text();
            const data = text ? JSON.parse(text) : [];
            setProducts(data);
        } catch (err) {
            console.error(err);
            setError(err.message);
            setProducts([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            const res = await fetch('/produto', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...form, price: parseFloat(form.price) }),
            });
            if (!res.ok) {
                const text = await res.text();
                throw new Error(`Erro ao salvar: ${text}`);
            }
            setForm({ name: '', price: '', category: '' });
            fetchProducts();
        } catch (err) {
            console.error(err);
            setError(err.message);
        }
    };

    return (

        <div className="app-container">
            <h1>Cadastro de Produtos</h1>

            <form className="product-form" onSubmit={handleSubmit}>
                <input
                    placeholder="Nome"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                />
                <input
                    placeholder="Preco"
                    type="number"
                    value={form.price}
                    onChange={(e) => setForm({ ...form, price: e.target.value })}
                    required
                />
                <input
                    placeholder="Categoria"
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    required
                />
                <button type="submit">Salvar</button>
            </form>

            {error && <p className="error-message">{error}</p>}

            {loading ? (
                <p>Carregando produtos...</p>
            ) : (
                <table className="product-table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Preco (R$)</th>
                            <th>Categoria</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((p) => (
                            <tr key={p.id}>
                                <td>{p.name}</td>
                                <td>{p.price.toFixed(2)}</td>
                                <td>{p.category}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>

    );
}

export default App;
