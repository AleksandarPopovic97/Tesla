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
        
        public DbSet<Incident> Incident { get; set; }
        
        
        public DbSet<WebAPI.Models.SafetyDocument> SafetyDocument { get; set; }
        
        
        public DbSet<WebAPI.Models.Crew> Crew { get; set; }
        
        
        public DbSet<WebAPI.Models.User> User { get; set; }
        
        
        public DbSet<WebAPI.Models.WorkRequest> WorkRequest { get; set; }
        
        
        public DbSet<WebAPI.Models.SwithingPlan> SwithingPlan { get; set; }
        
        
        public DbSet<WebAPI.Models.Notification> Notification { get; set; }


    }
}
