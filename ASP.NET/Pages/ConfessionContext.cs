using Microsoft.EntityFrameworkCore;
using ASP.NET_Confessions.Pages.Models;
namespace ASP.NET_Confessions.Data
{
    public class ConfessionContext : DbContext
    {
        public ConfessionContext(DbContextOptions<ConfessionContext> options) : base(options) { }

        public DbSet<Confession> Confessions { get; set; }

        protected ConfessionContext()
        {
        }
    }
}
