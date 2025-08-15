import { useState, useEffect } from 'react';
import ProductList from './ProductList';

export default function App() {
    const [items, setItems] = useState([]);
    const [form, setForm] = useState({ name: '', price: '', category: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const load = async () => {
        try {
            setLoading(true);
            const res = await fetch('/produto'); // via proxy https
            const data = await res.json();
            setItems(data);
        } catch (e) {
            setError('Falha ao carregar produtos');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { load(); }, []);

    const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const res = await fetch('/produto', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: form.name, price: Number(form.price), category: form.category })
            });
            if (!res.ok) throw new Error('Erro ao salvar');
            setForm({ name: '', price: '', category: '' });
            await load();
        } catch (e) {
            setError(e.message);
        }
    };

    return (
        <div style={{ maxWidth: 720, margin: '2rem auto', fontFamily: 'system-ui' }}>
            <h1>Cadastro de Produtos</h1>
            <form onSubmit={onSubmit} style={{ display: 'grid', gap: 12, marginBottom: 24 }}>
                <input name="name" placeholder="Nome" value={form.name} onChange={onChange} required />
                <input name="price" type="number" step="0.01" placeholder="Preço" value={form.price} onChange={onChange} required />
                <input name="category" placeholder="Categoria" value={form.category} onChange={onChange} required />
                <button type="submit">Salvar</button>
            </form>
            {error && <p style={{ color: 'crimson' }}>{error}</p>}
            {loading ? <p>Carregando...</p> : <ProductList items={items} />}
        </div>
    );
}