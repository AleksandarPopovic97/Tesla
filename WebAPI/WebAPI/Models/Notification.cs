using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Notification
    {


        [Key]
        public int id { get; set; }
        [Column]
        public string message { get; set; }

        [Column]
        public string type { get; set; }

        [Column]
        public int userId { get; set; }

        [Column]
        public bool read { get; set; }

    }
}
