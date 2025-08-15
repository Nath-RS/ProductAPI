using Microsoft.EntityFrameworkCore;
using ProductAPI.Server.Aplication.Interfaces;
using ProductAPI.Server.Domain.Entities;
using ProductAPI.Server.Infrastructure.Data;

namespace ProductAPI.Server.Infrastructure.Repositories
{
    public class ProductRepository : IProductRepository
    {
        private readonly AppDbContext _db;
       
        public ProductRepository(AppDbContext db) => _db = db;

        public async Task<Product> AddAsync(Product product)
        {
            _db.Products.Add(product);
            await _db.SaveChangesAsync();
            return product;
        }

        public Task<List<Product>> GetAllAsync() => _db.Products.AsNoTracking().ToListAsync();
    }
}
