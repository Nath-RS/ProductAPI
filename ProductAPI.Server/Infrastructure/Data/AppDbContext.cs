using Microsoft.EntityFrameworkCore;
using ProductAPI.Server.Domain.Entities;

namespace ProductAPI.Server.Infrastructure.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Product> Products => Set<Product>();
    }
}
