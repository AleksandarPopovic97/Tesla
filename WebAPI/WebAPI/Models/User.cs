using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class User
    {
        [Key]
        public int id { get; set; }

        [Column]
        public string role { get; set; }

        [Column]
        public string username { get; set; }

        [Column]
        public string password { get; set; }

        [Column]
        public string name { get; set; }

        [Column]
        public string lastName { get; set; }

        [Column]
        public DateTime? birthday { get; set; }

        [Column]
        public bool isConfirmed { get; set; } = false;

        [Column]
        public string crew { get; set; }

        [Column]
        public string image { get; set; }
    }
}
