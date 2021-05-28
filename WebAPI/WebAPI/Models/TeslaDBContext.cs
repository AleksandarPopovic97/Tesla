using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class TeslaDBContext : DbContext
    {
        public TeslaDBContext(DbContextOptions<TeslaDBContext> options) : base(options)
        {

        }
        
        public DbSet<Device> DDevices {get; set;}


    }
}
