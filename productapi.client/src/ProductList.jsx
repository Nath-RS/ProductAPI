export default function ProductList({ items }) {
    return (
        <table width="100%" cellPadding={8} style={{ borderCollapse: 'collapse' }}>
            <thead>
                <tr><th>ID</th><th>Nome</th><th>Preço</th><th>Categoria</th></tr>
            </thead>
            <tbody>
                {items.map(p => (
                    <tr key={p.id} style={{ borderTop: '1px solid #ddd' }}>
                        <td>{p.id}</td>
                        <td>{p.name}</td>
                        <td>{p.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                        <td>{p.category}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
