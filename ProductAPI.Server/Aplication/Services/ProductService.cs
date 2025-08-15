using Microsoft.EntityFrameworkCore;
using ProductAPI.Server.Aplication.DTOs;
using ProductAPI.Server.Aplication.Interfaces;
using ProductAPI.Server.Domain.Entities;
using ProductAPI.Server.Infrastructure.Data;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProductAPI.Server.Aplication.Services
{
    public class ProductService : IProductService
    {
        private readonly AppDbContext _context;

        public ProductService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<ProductReadDto>> ListAllAsync()
        {
            return await _context.Products
                .Select(p => new ProductReadDto
                {
                    Id = p.Id,
                    Name = p.Name,
                    Price = p.Price,
                    Category = p.Category
                })
                .ToListAsync();
        }

        public async Task<ProductReadDto> CreateAsync(ProductCreateDto dto)
        {
            var product = new Product
            {
                Name = dto.Name,
                Price = dto.Price,
                Category = dto.Category
            };

            _context.Products.Add(product);
            await _context.SaveChangesAsync();

            return new ProductReadDto
            {
                Id = product.Id,
                Name = product.Name,
                Price = product.Price,
                Category = product.Category
            };
        }
    }
}