using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Models;

namespace WebAPI.Models
{
    public class TeslaDBContext : DbContext
    {
        public TeslaDBContext(DbContextOptions<TeslaDBContext> options) : base(options)
        {

        }
        
        public DbSet<Device> DDevices {get; set;}
        
        public DbSet<WebAPI.Models.Customer> Customer { get; set; }
        
        public DbSet<WebAPI.Models.Call> Call { get; set; }


    }
}
