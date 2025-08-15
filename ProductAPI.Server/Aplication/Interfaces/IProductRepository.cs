using ProductAPI.Server.Domain.Entities;

namespace ProductAPI.Server.Aplication.Interfaces
{
    public interface IProductRepository
    {
        Task<Product> AddAsync(Product product);
        Task<List<Product>> GetAllAsync();
    }
}
