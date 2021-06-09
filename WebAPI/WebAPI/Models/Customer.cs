using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Customer
    {
        [Key]
        public int id { get; set; }

        [Column]
        public string name { get; set; }

        [Column]
        public string lastName { get; set; }

        [Column]
        public int account { get; set; }

        [Column]
        public string address { get; set; }

        [Column]
        public string priority { get; set; }
    }
}
