using Microsoft.AspNetCore.Mvc;
using ProductAPI.Server.Aplication.DTOs; // ProductCreateDTO, ProductReadDTO
using ProductAPI.Server.Aplication.Interfaces;

[ApiController]
[Route("produto")]
public class ProductController : ControllerBase
{
    private readonly IProductService _service;

    public ProductController(IProductService service)
    {
        _service = service;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<ProductReadDto>>> Get()
    {
        var products = await _service.ListAllAsync();
        return Ok(products);
    }

    [HttpPost]
    public async Task<ActionResult<ProductReadDto>> Post([FromBody] ProductCreateDto dto)
    {
        var createdProduct = await _service.CreateAsync(dto);
        return CreatedAtAction(nameof(Get), new { id = createdProduct.Id }, createdProduct);
    }
}