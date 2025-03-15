using ASP.NET_Confessions.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddRazorPages();

builder.Services.AddDbContext<ConfessionContext>(options =>
options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")));

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var dbcContext = scope.ServiceProvider.GetRequiredService<ConfessionContext>();
    dbcContext.Database.Migrate();
}
app.UseRouting();
app.UseAuthorization();
app.MapRazorPages();
app.Run();