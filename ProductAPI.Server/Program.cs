using Microsoft.EntityFrameworkCore;
using ProductAPI.Server.Infrastructure.Data;
using ProductAPI.Server.Aplication.Interfaces;
using ProductAPI.Server.Aplication.Services;

var builder = WebApplication.CreateBuilder(args);

// DbContext InMemory
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseInMemoryDatabase("ProductDb"));

// Registrar serviço
builder.Services.AddScoped<IProductService, ProductService>();

// Controllers e Swagger
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Middleware
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.Run();
