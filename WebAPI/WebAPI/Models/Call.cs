using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Call
    {
        [Key]
        public int id { get; set; }

        [Column]
        public string reason { get; set; }

        [Column]
        public string comment { get; set; }

        [Column]
        public string hazard { get; set; }

        [Column]
        public Customer customer { get; set; }
    }
}
