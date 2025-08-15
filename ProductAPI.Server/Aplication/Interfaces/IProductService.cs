using ProductAPI.Server.Aplication.DTOs;

namespace ProductAPI.Server.Aplication.Interfaces
{
    public interface IProductService
    {
        Task<IEnumerable<ProductReadDto>> ListAllAsync();
        Task<ProductReadDto> CreateAsync(ProductCreateDto dto);
    }
}
